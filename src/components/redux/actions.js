export const addFilmAction = (payload) => {
    return {
        type: "ADD_FILM",
        payload,
    };
};
export const removeFilmAction = (payload) => {
    return {
        type: 'REMOVE_FILM',
        payload,
    }
}