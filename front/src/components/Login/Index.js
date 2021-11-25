import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../state/user";
import { useHistory } from "react-router-dom";
import { setCarrito } from "../state/carrito"
import swal from "sweetalert";
import { Link } from "react-router-dom";
import "./Login.css";
const Index = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const submitHandler = (e) => {
      e.preventDefault();
      
      if (emailValidate == "mostrar" && emailValidate == "mostrar") {
        dispatch(login({ email: email, password: password })).then((data) => {
   
          if (data.meta.requestStatus === "rejected") {
            setPassword("");
            return swal("Usuario o contraseña incorrectos");
          }
  
          if (data.payload) {
            localStorage.setItem("token", data.payload.token);
  
            dispatch(setCarrito()).then((order)=>{
              history.push("/")
              swal("Logged in!");
            });          
          }
        });
      } else {
        swal("¡Ingrese datos válidos!");
      }
    };
    return (
        <div>
            
        </div>
    );
};

export default Index;