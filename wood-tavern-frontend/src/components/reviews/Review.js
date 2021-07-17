import React from "react";
import StarRatings from "react-star-ratings";

const Review = props => {
  return (
    <div>
      <h3>
        {props.review.name} on {props.review.date}
      </h3>
      <h4>
        <StarRatings
          rating={props.review.rating}
          starDimension="20px"
          starSpacing="5px"
          starRatedColor="rgb(255,202,40)"
        />
      </h4>
      <p>{props.review.content}</p>
    </div>
  );
};

export default Review;
