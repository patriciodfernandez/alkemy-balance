import React, { useState, useEffect, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/libro-mayor.png";

import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../state/user";
import axios from "axios";
import { setUser } from "../../state/user";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  
  const navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault();
    localStorage.clear();

    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <Navbar expand="lg" bg="primary">
        <Container className="appbar">
          <div>
            <Link to="/">
              <Navbar.Brand>
                <img src={logo} width="40" alt="IOT COMERCE" />
              </Navbar.Brand>
            </Link>
          </div>
          <div>
            {" "}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {user.id ? (
                <div className="d-flex justify-content-center align-items-center mx-2">
                  <div className="mr-2">
                    <Link to={"/operationForm"}>
                      <Button className="mr-1 bg-dark text-center">Operación Nueva</Button>
                    </Link>
                  </div>

                  <div className="text-white h3 d-flex justify-content-center align-items-center ">{`¡Hola, ${user.name}!`}</div>
                  <NavDropdown
                    variant="light"
                    title={<RiAccountCircleFill />}
                    className="h3 bg-dark  mx-3 rounded-pill "
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut}>
                      Cerrar sesión
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              ) : (
                <div className="d-flex justify-content-around">
                  <Link to={"/login"}>
                    <Button className="mr-1 bg-dark">Ingresar</Button>
                  </Link>
                  <Link to={"/register"}>
                    <Button variant="warning">Registrarse</Button>
                  </Link>
                </div>
              )}
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppBar;

//color #2e2e2
