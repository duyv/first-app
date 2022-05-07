export const addFilm = (film) => {
    return {
        type: 'ADD_FILM',
        payload: film
    }
}
export const removeFilm = (filmId) => {
    console.log('filmId',filmId);
    return {
        type: 'REMOVE_FILM',
        payload: filmId
    }
}