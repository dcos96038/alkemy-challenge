import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import LayoutComponent from "./components/LayoutComponent";
import Details from "./Details";
import Home from "./Home";
import Login from "./Login";
import { actionLoginUser } from "./reducers/userReducer";
import Search from "./Search";

function App() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem("userToken");
    if (token) {
      const userToken = JSON.parse(token);
      dispatch(actionLoginUser(userToken));
    }
  }, [dispatch]);

  return (
    <>
      <div className="bg-dark bg-gradient min-vh-100">
        <BrowserRouter>
          <LayoutComponent>
            <div className="py-5">
              <Switch>
                <Route exact path="/">
                  {user !== null ? <Home /> : <Redirect to="/login" />}
                </Route>
                <Route path="/search/:searchString">
                  {user !== null ? <Search /> : <Redirect to="/login" />}
                </Route>
                <Route path="/details/:id">
                  {user !== null ? <Details /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login">
                  {user === null ? <Login /> : <Redirect to="/" />}
                </Route>
              </Switch>
            </div>
          </LayoutComponent>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
