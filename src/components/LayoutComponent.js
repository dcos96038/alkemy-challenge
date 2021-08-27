import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Navbar from "./Navbar";

const LayoutComponent = ({ children }) => {
  const { user } = useContext(AppContext);

  return (
    <div className="d-flex flex-column">
      {user ? <Navbar /> : ""}
      <div className="container">{children}</div>
      <div className="sticky-bottom text-white m-2">
        Hecho por{" "}
        <a
          href="https://www.instagram.com/d_cos96/"
          className="link-danger text-decoration-none fw-bold fs-6"
        >
          Diego
        </a>{" "}
        para Alkemy
      </div>
    </div>
  );
};

export default LayoutComponent;
