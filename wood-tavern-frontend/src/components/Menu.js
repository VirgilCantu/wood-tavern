import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBeers } from "../actions/beerActions";
import { fetchCocktails } from "../actions/cocktailActions";

class Menu extends Component {
  componentDidMount() {
    this.props.fetchBeers();
    this.props.fetchCocktails();
  }

  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beersReducer.beers,
    cocktails: state.cocktailsReducer.cocktails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
    fetchCocktails: () => dispatch(fetchCocktails())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
