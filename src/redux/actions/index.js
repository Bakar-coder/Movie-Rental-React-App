import {
  GET_MOVIES,
  GET_GENRES,
  MOVIE_DELETE,
  LIKE_MOVIE,
  SET_CURRENT,
  SET_GENRE,
  SET_COLUMN
} from "./types";
const getMovies = movies => ({ type: GET_MOVIES, payload: movies });
const getGenres = genres => ({ type: GET_GENRES, payload: genres });
const deleteMovie = movie => ({ type: MOVIE_DELETE, payload: movie });
const likeMovie = movie => ({ type: LIKE_MOVIE, payload: movie });
const setCurrent = page => ({ type: SET_CURRENT, payload: page });
const setSelectedGenre = genre => ({ type: SET_GENRE, payload: genre });
const set_column = path => ({ type: SET_COLUMN, payload: path });
export {
  getMovies,
  getGenres,
  deleteMovie,
  likeMovie,
  setCurrent,
  setSelectedGenre,
  set_column
};
