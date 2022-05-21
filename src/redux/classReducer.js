const initialState = [];

export const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CLASS":
      return [...state, action.payload];
    default:
      return state;
  }
};
