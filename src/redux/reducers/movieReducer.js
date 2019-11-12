import {
  GET_GENRES,
  GET_MOVIES,
  MOVIE_DELETE,
  LIKE_MOVIE,
  SET_CURRENT,
  SET_GENRE,
  SET_COLUMN
} from "../actions/types";
const movieState = {
  movies: [],
  genres: [],
  selectedGenre: null,
  pageSize: 4,
  currentPage: 1,
  sortColumn: { path: "title", order: "asc" }
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
    case SET_COLUMN:
      const sortColumn = { ...state.sortColumn };
      if (sortColumn.path === payload)
        sortColumn.order = "asc" ? "desc" : "asc";
      else {
        sortColumn.path = payload;
        sortColumn.order = "asc";
      }
      return {
        ...state,
        sortColumn: sortColumn
      };
    default:
      return state;
  }
};
