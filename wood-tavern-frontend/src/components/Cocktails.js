import React, { Component } from "react";
import Cocktail from "./Cocktail";

class Cocktails extends Component {
  renderCocktails = () =>
    this.props.cocktails.map(cocktail => (
      <Cocktail key={cocktail.id} cocktail={cocktail} />
    ));

  render() {
    return <div>{this.renderCocktails()}</div>;
  }
}

export default Cocktails;
