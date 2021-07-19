import React, { Component } from "react";
import Reviews from "../components/reviews/Reviews";
import ReviewInput from "../components/reviews/ReviewInput";
import { fetchReviews } from "../actions/reviewActions";
import { addReview } from "../actions/reviewActions";
import { connect } from "react-redux";

class ReviewsContainer extends Component {
  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    return (
      <div>
        <br />
        <Reviews reviews={this.props.reviews} />
        <br />
        <br />
        <ReviewInput addReview={this.props.addReview} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviewsReducer.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: () => dispatch(fetchReviews()),
    addReview: review => dispatch(addReview(review))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
