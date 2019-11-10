import {
  GET_GENRES,
  GET_MOVIES,
  MOVIE_DELETE,
  LIKE_MOVIE
} from "../actions/types";
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
    case MOVIE_DELETE:
      return {
        ...state,
        movies: [...state.movies].filter(movie => movie._id !== payload._id)
      };
    case LIKE_MOVIE:
      const allMovies = [...state.movies];
      const index = allMovies.indexOf(payload);
      allMovies[index] = { ...allMovies[index] };
      allMovies[index].liked = !allMovies[index].liked;
      return {
        ...state,
        movies: allMovies
      };
    default:
      return state;
  }
};
