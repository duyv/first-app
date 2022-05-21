const initialState = false;

export const processReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_PROCESS":
      return action.payload;
    default:
      return state;
  }
};
