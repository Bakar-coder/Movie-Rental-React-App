import { GET_MOVIES, GET_GENRES, MOVIE_DELETE, LIKE_MOVIE } from "./types";
const getMovies = movies => ({ type: GET_MOVIES, payload: movies });
const getGenres = genres => ({ type: GET_GENRES, payload: genres });
const deleteMovie = movie => ({ type: MOVIE_DELETE, payload: movie });
const likeMovie = movie => ({ type: LIKE_MOVIE, payload: movie });
export { getMovies, getGenres, deleteMovie, likeMovie };
