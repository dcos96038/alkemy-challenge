import { useContext, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import LayoutComponent from "./components/LayoutComponent";
import { AppContext } from "./Context/AppContext";
import Details from "./Details";
import Home from "./Home";
import Login from "./Login";
import Search from "./Search";

function App() {
  const { user, setUser } = useContext(AppContext);

  useEffect(() => {
    const token = window.localStorage.getItem("userToken");
    if (token) {
      const user = JSON.parse(token);
      setUser(user);
    }
  }, [setUser]);

  return (
    <>
      <div className="bg-dark bg-gradient min-vh-100">
        <BrowserRouter>
          <LayoutComponent>
            <div className="py-5">
              <Switch>
                <Route exact path="/">
                  {user ? <Home /> : <Redirect to="/login" />}
                </Route>
                <Route path="/search/:searchString">
                  {user ? <Search /> : <Redirect to="/login" />}
                </Route>
                <Route path="/details/:id">
                  {user ? <Details /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login">
                  {!user ? <Login /> : <Redirect to="/" />}
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
