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
  return dispatch => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(review)
    };

    dispatch({ type: "LOADING_REVIEWS" });
    fetch("http://localhost:3000/reviews", configObj)
      .then(response => response.json())
      .then(responseJSON =>
        dispatch({ type: "ADD_REVIEW", review: responseJSON })
      );
  };
};
