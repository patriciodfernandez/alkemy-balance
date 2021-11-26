import React ,{ useState, useEffect }from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../assets/logo.png'

import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { AiOutlineSearch } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";
import {Link ,useHistory } from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {logout} from "../../state/user"
 import axios from 'axios'
 


const AppBar = ( ) => {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();
  

  const user = useSelector(state=> state.user)
   const dispatch= useDispatch()
  const logOut = (e) => {
      e.preventDefault();
      localStorage.clear();
      dispatch(logout())
      history.push('/')
  };
   

  
  
  return (
      <Navbar expand="lg" bg="primary">
        <Container fluid style={{maxWidth: 1500}}>
        <Link to="/">
          <Navbar.Brand ><img src={logo} width="50px" alt="IOT COMERCE"/></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"  >
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown
              variant="light"
               id="basic-nav-dropdown"
             >
            
              
            </NavDropdown>
            
          
          </Nav>
       
          {user.id ? (
            <div >
              <div className="titleName">{`¡Hola, ${user.name}!`}</div>
              <NavDropdown
              variant="light"
              title={<RiAccountCircleFill/>}
              id="basic-nav-dropdown"
               
              alignRight
              
              >
                <NavDropdown.Item onClick={()=>history.push('/pastOrders')}>Mis compras</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut}>
                  Cerrar sesión
                </NavDropdown.Item>
            </NavDropdown>
            </div>
          
          ) : (
            <div>
              <Link to="/login">
                <Button className="mr-1">Ingresar</Button>
              </Link>
              <Link to="/register">
              <Button variant="warning">Registrarse</Button>
              </Link>
            </div>
          )}
          
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default AppBar


//color #2e2e2