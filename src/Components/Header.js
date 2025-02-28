import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


import "./Header.css"


function Header() {
  return (
    <Navbar expand="lg" className="navbar" >
    
    <Container>
    <Navbar.Brand href="#home" className='brand'><img src="/img/logo.png" width="90px" height="33px" alt="brandimg" /></Navbar.Brand>
           
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="nav" > 
        
        <Nav className="ms-auto"> 
                    
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/About">About</Nav.Link>
          <Nav.Link as={Link} to="/Services">Services</Nav.Link>
          <NavDropdown title="Blog" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/Bloglists">Blog list</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Blogdetails">Blog details</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          <NavDropdown title="Pages" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/Career">Career</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Careerdetails">Careerdetails</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Pricing">Pricing</NavDropdown.Item>
          </NavDropdown>          
        </Nav>
        <Nav className='ms-auto'>
            <Button className='btn' size="lg" as={Link} to="/Login">Login</Button>
        </Nav>
        <Nav className='ms-auto'>
            <Button className='btn' size="lg" as={Link} to="/Register">Register</Button>
        </Nav>       
      </Navbar.Collapse>     
    </Container>    
  </Navbar>
  );
}

export default Header;