export const fetchBeers = () => {
  return dispatch => {
    dispatch({ type: "LOADING_BEERS" });
    fetch("http://localhost:3000/beers")
      .then(response => response.json())
      .then(responseJSON =>
        dispatch({ type: "ADD_BEERS", beers: responseJSON })
      );
  };
};
