import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "white"
};

const Nav = () => {
  return (
    <div>
      <NavLink to="/" exact style={link}>
        Home
      </NavLink>
      <NavLink to="/about" exact style={link}>
        About
      </NavLink>
      <NavLink to="/menu" exact style={link}>
        Menu
      </NavLink>
      <NavLink to="/events" exact style={link}>
        Events
      </NavLink>
      <NavLink to="/contact" exact style={link}>
        Contact
      </NavLink>
    </div>
  );
};

export default Nav;