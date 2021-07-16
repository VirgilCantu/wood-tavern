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
    </div>
  );
};

export default Nav;
