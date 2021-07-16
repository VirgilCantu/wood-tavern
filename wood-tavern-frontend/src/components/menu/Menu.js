import React, { Component } from "react";

class Menu extends Component {
  componentDidMount() {
    this.props.fetchBeers();
    this.props.fetchCocktails();
  }

  render() {
    return <div></div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
