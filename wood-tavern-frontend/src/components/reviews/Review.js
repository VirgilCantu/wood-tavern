import React from "react";

const Review = props => {
  return (
    <div>
      <h2>
        {props.review.title} - {props.review.rating}
      </h2>
      <h4>
        Posted By: {props.review.name} on {props.review.date}
      </h4>
      <p>{props.review.content}</p>
    </div>
  );
};

export default Review;
