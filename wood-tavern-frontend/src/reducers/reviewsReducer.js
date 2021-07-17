const reviewsReducer = (state = { reviews: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_REVIEWS":
      return {
        ...state,
        reviews: [...state.events],
        loading: true
      };
    case "ADD_REVIEWS":
      return {
        ...state,
        reviews: action.reviews,
        loading: false
      };
    default:
      return state;
  }
};

export default reviewsReducer;
