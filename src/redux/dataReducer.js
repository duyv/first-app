const initialState = [];

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return action.payload;
    default:
      return state;
  }
};
