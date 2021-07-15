import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
};

export default App;
