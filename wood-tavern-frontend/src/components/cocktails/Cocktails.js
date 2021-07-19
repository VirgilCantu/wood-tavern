import React, { Component } from "react";
import Cocktail from "./Cocktail";
import Carousel from "react-bootstrap/Carousel";

class Cocktails extends Component {
  renderCocktails = () =>
    this.props.cocktails.map(cocktail => (
      <Carousel.Item key={cocktail.id} interval={5000}>
        <Cocktail cocktail={cocktail} />
      </Carousel.Item>
    ));

  render() {
    return (
      <div className="text-center">
        <br />
        <h1>Cocktails</h1>
        <p style={{ width: "60rem", margin: "auto" }}>
          We take a relaxed approach when it comes to our house cocktails.
          Simple, fresh ingredients that highlight the underlying spirits,
          without too many of the frills.
        </p>
        <br />
        <div>
          <Carousel fade indicators={false}>
            {this.renderCocktails()}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Cocktails;
