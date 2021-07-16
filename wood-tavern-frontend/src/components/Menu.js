import React, { Component } from "react";
import { connect } from "react-redux";

class Menu extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beers,
    cocktails: state.cocktails
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
