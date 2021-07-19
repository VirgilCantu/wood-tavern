import React from "react";
import StarRatings from "react-star-ratings";

const Review = props => {
  return (
    <div>
      <h5>
        {props.review.name} on {props.review.date}
      </h5>
      <StarRatings
        rating={props.review.rating}
        starDimension="20px"
        starSpacing="5px"
        starRatedColor="rgb(255,202,40)"
      />
      <br />
      <br />
      <p>{props.review.content}</p>
      <hr />
    </div>
  );
};

export default Review;
