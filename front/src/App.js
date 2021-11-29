import React ,{useEffect}from "react";
import axios from "axios";
import Home from "./views/Home.jsx";
import { useDispatch } from "react-redux";
import Login from "./components/Login/Index";
import OperationForm from "./components/OperationForm/Index";

import Register from "./components/Register/Index";
// import Footer from "./components/Footer.jsx";
import AppBar from "./components/AppBar/AppBar";
import "./App.css";
import {  Route,Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

import { setUser } from "./state/user";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="operationForm" element={<OperationForm />}></Route>

        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
         
      </Routes>
 
    </div>
  );
};

export default App;
