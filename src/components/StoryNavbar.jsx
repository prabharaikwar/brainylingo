import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const StoryNavbar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="justify-content-between"
    >
      <Navbar.Brand href="#home">Science Fiction Stories</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Story Adventure</Nav.Link>
          <Nav.Link href="#link">Word Explorer</Nav.Link>
          <Nav.Link href="#link">Brain Quest</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div>
        <Button variant="primary" className="mx-2">
          Sign In
        </Button>
        <Button variant="outline-primary">Sign Up</Button>
      </div>
    </Navbar>
  );
};

export default StoryNavbar;
