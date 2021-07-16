import React, { Component } from "react";
import Beer from "./Beer";

class Beers extends Component {
  renderBeers = () =>
    this.props.beers.map(beer => <Beer key={beer.id} beer={beer} />);

  render() {
    return <div>{this.renderBeers()}</div>;
  }
}

export default Beers;
