import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

const SearchSchema = Yup.object().shape({
  search: Yup.string().required("Este campo es obligatorio"),
});

const SearchComponent = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: SearchSchema,
    onSubmit: (value, { resetForm }) => {
      history.push(`/search/${value.search}`);
      resetForm();
    },
  });

  return (
    <form className="d-flex" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        className="form-control"
        name="search"
        placeholder="Ingresar nombre"
        onChange={formik.handleChange}
        value={formik.values.search}
      />
      <button type="submit" className="btn btn-primary ms-2">
        Buscar
      </button>
    </form>
  );
};

export default SearchComponent;
