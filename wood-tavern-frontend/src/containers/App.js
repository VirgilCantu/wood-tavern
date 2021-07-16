import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Events from "../components/events/Events";
import BeersContainer from "../containers/BeersContainer";
import CocktailsContainer from "../containers/CocktailsContainer";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/beers" component={BeersContainer} />
        <Route exact path="/cocktails" component={CocktailsContainer} />
      </Router>
    </div>
  );
};

export default App;
