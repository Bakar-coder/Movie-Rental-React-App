import {
  GET_GENRES,
  GET_MOVIES,
  MOVIE_DELETE,
  LIKE_MOVIE,
  SET_CURRENT,
  SET_GENRE,
  SET_COLUMN,
  SEARCH_ITEM,
  SEARCH_CLEAR
} from "../actions/types";
const movieState = {
  movies: [],
  genres: [],
  filtered: null,
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
    case SEARCH_ITEM:
      return {
        ...state,
        filtered: [...state.movies].filter(movie => {
          const regex = new RegExp(`${payload}`, "gi");
          return movie.title.match(regex) || movie.genre.name.match(regex);
        })
      };
    case SEARCH_CLEAR:
      return {
        ...state,
        filtered: null
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
