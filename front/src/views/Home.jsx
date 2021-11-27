import React, { useEffect } from "react";
 import { setUser } from "../state/user";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
 

  return (
    <div>
      <div className="d-4">
        <h1> Bienvenido a tu balance </h1>
      </div>
    </div>
  );
};

export default Home;
