import { GET_GENRES, GET_MOVIES } from "../actions/types";
const movieState = {
  movies: [],
  genres: []
};

export default (state = movieState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload
      };
    case GET_GENRES:
      return {
        ...state,
        genres: payload
      };
    default:
      return state;
  }
};
