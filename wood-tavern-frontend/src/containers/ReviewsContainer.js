import React, { Component } from "react";
import Reviews from "../components/reviews/Reviews";
import { fetchReviews } from "../actions/reviewActions";
import { connect } from "react-redux";

class ReviewsContainer extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviewsReducer.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: () => dispatch(fetchReviews())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
