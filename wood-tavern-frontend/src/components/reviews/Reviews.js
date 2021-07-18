import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  renderReviews = () =>
    this.props.reviews.map(review => (
      <Review key={review.id} review={review} />
    ));

  render() {
    return <div className="text-center">{this.renderReviews()}</div>;
  }
}

export default Reviews;
