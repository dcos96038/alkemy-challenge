import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { actionLogoutUser } from "../reducers/userReducer";
import SearchComponent from "./SearchComponent";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    window.localStorage.setItem("userToken", JSON.stringify(null));
    dispatch(actionLogoutUser());
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex justify-content-center align-items-center"
          to="/"
        >
          <img
            src="/logo.png"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top me-2"
          />
          <span className="fw-bold fs-5">Superhero APP</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <span className="text-uppercase fs-6">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => handleLogout()}
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                <span className="text-uppercase fs-6">Logout</span>
              </Link>
            </li>
          </ul>
          <SearchComponent />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
