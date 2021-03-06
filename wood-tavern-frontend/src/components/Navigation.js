import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand>Wood Tavern</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/events">
          <Nav.Link>Events</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/beers">
          <Nav.Link>Beer</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/cocktails">
          <Nav.Link>Cocktails</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/reviews">
          <Nav.Link>Reviews</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
