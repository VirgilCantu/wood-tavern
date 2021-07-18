import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Wood Tavern</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/events">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/beers">
          <Nav.Link>Beer</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/cocktails">
          <Nav.Link>Cocktail</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/reviews">
          <Nav.Link>Review</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
