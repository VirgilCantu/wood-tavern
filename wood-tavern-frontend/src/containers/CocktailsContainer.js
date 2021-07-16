import React, { Component } from "react";
import Cocktails from "./Cocktails";
import { fetchCocktails } from "../../actions/cocktailActions";
import { connect } from "react-redux";
class CocktailsContainer extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => {
  return {
    cocktails: state.cocktailsReducer.cocktails
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsContainer);
