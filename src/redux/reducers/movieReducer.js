import {
  GET_GENRES,
  GET_MOVIES,
  MOVIE_DELETE,
  LIKE_MOVIE,
  SET_CURRENT,
  SET_GENRE
} from "../actions/types";
const movieState = {
  movies: [],
  genres: [],
  selectedGenre: null,
  pageSize: 4,
  currentPage: 1
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
    case SET_CURRENT:
      return {
        ...state,
        currentPage: payload
      };
    case SET_GENRE:
      return {
        ...state,
        selectedGenre: payload
      };
    default:
      return state;
  }
};
