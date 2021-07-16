import React, { Component } from "react";
import Beers from "./Beers";
import { fetchBeers } from "../../actions/beerActions";
import { connect } from "react-redux";

class BeersContainer extends Component {
  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    return (
      <div>
        <Beers beers={this.props.beers} />
      </div>
    );
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
