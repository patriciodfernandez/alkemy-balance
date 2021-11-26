import React from "react";
import axios from "axios";
import Home from "./views/Home.jsx";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login/Index";
import Register from "./components/Register/Index";
// import Footer from "./components/Footer.jsx";
import AppBar from "./components/AppBar/AppBar";
import "./App.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { setUser } from "./state/user";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : undefined;
    if (token) {
      axios.defaults.headers.authorization = `${token}`;
      axios.post("/api/auth/me").then((data) => {
        dispatch(setUser(data.data));
      });
    }

   }, []);

  return (
    <div>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
