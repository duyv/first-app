const initialState = [];

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FILM":
            return [...state, action.payload];
        case 'REMOVE_FILM':
            return state.filter(item => item.id !== action.payload)
        default:
            return state;
    }
};

export default filmReducer;