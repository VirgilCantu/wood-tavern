import React, { Component } from "react";
import Beers from "./Beers";
import { fetchBeers } from "../../actions/beerActions";
import { connect } from "react-redux";

class BeersContainer extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beersReducer.beers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBeers: () => dispatch(fetchBeers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeersContainer);
