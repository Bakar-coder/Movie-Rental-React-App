import { GET_MOVIES, GET_GENRES } from "./types";
const getMovies = movies => ({ type: GET_MOVIES, payload: movies });
const getGenres = genres => ({ type: GET_GENRES, payload: genres });
export { getMovies, getGenres };
