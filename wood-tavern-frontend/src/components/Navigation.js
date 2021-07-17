import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "white"
};

const Navigation = () => {
  return (
    <div>
      <NavLink to="/" exact style={link}>
        Home
      </NavLink>
      <NavLink to="/about" exact style={link}>
        About
      </NavLink>
      <NavLink to="/beers" exact style={link}>
        Beer
      </NavLink>
      <NavLink to="/cocktails" exact style={link}>
        Cocktails
      </NavLink>
      <NavLink to="/events" exact style={link}>
        Events
      </NavLink>
      <NavLink to="/reviews" exact style={link}>
        Reviews
      </NavLink>
    </div>
  );
};

export default Navigation;
