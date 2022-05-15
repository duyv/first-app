// const filmDefault = JSON.parse(window.localStorage.getItem('film-List'));
// console.log(123,filmDefault)
const initialState = [];

const FilmReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FILM': {
            // window.localStorage.setItem('film-List', JSON.stringify([...state,action.payload]));
            console.log([...state,action.payload]);
            return [...state,action.payload];
        }
        case 'REMOVE_FILM': {
            // window.localStorage.setItem('film-List', JSON.stringify(state.filter(item => item.id != action.payload)));
            console.log(state);
            return state.filter(item => item.id != action.payload);
        }
        default: 
        return state;
    }
}
export default FilmReducer;