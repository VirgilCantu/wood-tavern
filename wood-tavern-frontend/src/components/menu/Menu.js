import React, { Component } from "react";

class Menu extends Component {
  componentDidMount() {
    this.props.fetchBeers();
    this.props.fetchCocktails();
  }

  render() {
    return (
      <div>
        <Beers beers={this.props.beers} />
        <Cocktails cocktails={this.props.cocktails} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
