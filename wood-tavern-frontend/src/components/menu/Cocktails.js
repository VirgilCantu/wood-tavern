import React, { Component } from "react";
import Cocktail from "./Cocktail";

class Cocktails extends Component {
  renderCocktails = () =>
    this.props.cocktails.map(cocktail => (
      <Cocktail key={cocktail.id} cocktail={cocktail} />
    ));

  render() {
    return (
      <div>
        <h1>Cocktails</h1>
        <p>
          We take a relaxed approach when it comes to our house cocktails.
          Simple, fresh ingredients that highlight the underlying spirits,
          without too many of the frills.
        </p>
        {this.renderCocktails()}
      </div>
    );
  }
}

export default Cocktails;