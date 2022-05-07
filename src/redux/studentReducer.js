const initialState = [];

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STUDENT":
      return action.payload;
    case "ADD_STUDENT":
      return [...state, action.payload];
    case "REMOVE_STUDENT":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
