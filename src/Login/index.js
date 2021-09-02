import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { actionLoginUser } from "../reducers/userReducer";
import { loginService } from "../services";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo electronico no valido")
    .required("Este campo es obligatorio"),
  password: Yup.string().required("Este campo es obligatorio"),
});

const Login = () => {
  const [errorMsg, setErrorMsg] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = async (email, password) => {
    try {
      const response = await loginService(email, password);
      if (response) {
        window.localStorage.setItem(
          "userToken",
          JSON.stringify(response.data.token)
        );
        dispatch(actionLoginUser(response.data.token));
        history.push("/");
      }
    } catch (error) {
      if (error) {
        setErrorMsg("Credenciales incorrectas");
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (value) => {
      handleLogin(value.email, value.password);
    },
  });

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="text-white">SuperHero APP Login</h1>
      {errorMsg ? (
        <div
          className="alert alert-danger alert-dismissible mt-4"
          role="alert"
          id="liveAlert"
        >
          {errorMsg}
          <button
            type="button"
            className="btn-close"
            onClick={() => setErrorMsg(null)}
          ></button>
        </div>
      ) : (
        ""
      )}
      <form
        className="text-white w-75 border border-danger rounded p-2 my-3"
        onSubmit={formik.handleSubmit}
      >
        <div className="my-3 d-flex flex-column justify-content-center align-items-center">
          <h5>Email</h5>
          <input
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="text"
            className="form-control w-75"
          />
          {formik.touched.email && formik.errors.email && (
            <div id="emailHelp" className="form-text text-danger">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="my-3 d-flex flex-column justify-content-center align-items-center">
          <h5>Password</h5>
          <input
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            className="form-control w-75"
          />
          {formik.touched.password && formik.errors.password && (
            <div id="emailHelp" className="form-text text-danger">
              {formik.errors.password}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-danger mb-3">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
