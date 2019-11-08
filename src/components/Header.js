import React from 'react'
import {Nav, Navbar } from "react-bootstrap"
import {Link} from "gatsby"

export default (props) => (
    
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Gatsby-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">
        <b className="text-dark">Home</b>
      </Nav.Link>
      <Nav.Link as={Link} to="/about">
      <b className="text-dark">About us</b>
      </Nav.Link>
      <Nav.Link as={Link} to="/contact">
      <b className="text-dark">Contact us</b>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    
)