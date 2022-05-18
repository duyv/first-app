const initialState = [];

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FILM":
            return [...state, action.payload];
        default:
            return state;
    }
};

export default filmReducer;