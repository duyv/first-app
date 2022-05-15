const initialState = [];

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FILM":
      return [...state, action.payload];
    case "LIKE_FILM":
      state.map((el) => {
        if (el.nameFilm === action.payload) {
          el["like"] = true;
        }
      });
      console.log(12345, state);
      return state;
    default:
      return state;
  }
};

export default filmReducer;
