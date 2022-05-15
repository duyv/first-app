export const addFilm = (film) => {
    return {
        type: 'ADD_FILM',
        payload: film
    }
}
export const removeFilm = (filmId) => {
    return {
        type: 'REMOVE_FILM',
        payload: filmId
    }
}