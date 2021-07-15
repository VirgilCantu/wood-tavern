export const fetchCocktails = () => {
  return dispatch => {
    dispatch({ type: "LOADING_COCKTAILS" });
    fetch("http://localhost:3000/cocktails")
      .then(response => response.json())
      .then(responseJSON =>
        dispatch({ type: "ADD_COCKTAILS", cocktails: responseJSON })
      );
  };
};
