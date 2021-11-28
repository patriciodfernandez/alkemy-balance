import React, { useEffect } from "react";
import { setUser } from "../state/user";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {user.id ? (
        <div className="display-4 m-5">
          <div className="text-center">
            {" "}
            Bienvenido a tu balance {`¡${user.name}!`}
            <br /> tu cuenta es la nº {`${user.id}!`}
          </div>
        </div>
      ) : (
        <div className="display-4 m-5">
          <div className="text-center">
            {" "}
            Bienvenido a tu balance, por favor ingresa o registra una nueva
            cuenta.
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
