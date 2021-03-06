import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../components/Navigation";
import Home from "../components/Home";
import About from "../components/About";
import EventsContainer from "../containers/EventsContainer";
import BeersContainer from "../containers/BeersContainer";
import CocktailsContainer from "../containers/CocktailsContainer";
import ReviewsContainer from "../containers/ReviewsContainer";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/events" component={EventsContainer} />
          <Route exact path="/beers" component={BeersContainer} />
          <Route exact path="/cocktails" component={CocktailsContainer} />
          <Route exact path="/reviews" component={ReviewsContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
