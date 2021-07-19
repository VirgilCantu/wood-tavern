import React, { Component } from "react";
import Beer from "./Beer";
import Carousel from "react-bootstrap/Carousel";

class Beers extends Component {
  renderBeers = () =>
    this.props.beers.map(beer => (
      <Carousel.Item key={beer.id} interval={5000}>
        <Beer beer={beer} />
      </Carousel.Item>
    ));

  render() {
    return (
      <div className="text-center">
        <br />
        <h1>Beer</h1>
        <p style={{ width: "60rem", margin: "auto" }}>
          Wood’s specialty is craft beers, so we stock a very limited supply of
          major brands. We’re not afraid of the big guys, we just like to give
          up-and-comers a shot. If you’re into beer, you’ll know what we mean
          and really dig our selection. Our libation library is always growing
          and changing, so stop in often to see what we’re serving up this time.
        </p>
        <br />
        <div>
          <Carousel indicators={false}>{this.renderBeers()}</Carousel>
        </div>
      </div>
    );
  }
}

export default Beers;
