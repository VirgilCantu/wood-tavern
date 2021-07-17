export const fetchReviews = () => {
  return dispatch => {
    dispatch({ type: "LOADING_REVIEWS" });
    fetch("http://localhost:3000/reviews")
      .then(response => response.json())
      .then(responseJSON =>
        dispatch({ type: "ADD_REVIEWS", reviews: responseJSON })
      );
  };
};

export const addReview = review => {
  return {
    type: "ADD_REVIEW",
    review: review
  };
};
