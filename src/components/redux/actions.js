export const addFilmAction = (payload) => {
  return {
    type: "ADD_FILM",
    payload,
  };
};

export const likeFilmAction = (index) => {
  return {
    type: "LIKE_FILM",
    payload: index,
  };
};
