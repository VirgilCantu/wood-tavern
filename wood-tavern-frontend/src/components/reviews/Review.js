import React from "react";

const Review = props => {
  return (
    <div>
      <h3>
        {props.review.name} on {props.review.date}
      </h3>
      <h4>{props.review.rating}</h4>
      <p>{props.review.content}</p>
    </div>
  );
};

export default Review;
