import {
  GET_MOVIES,
  GET_GENRES,
  MOVIE_DELETE,
  LIKE_MOVIE,
  SET_CURRENT,
  SET_GENRE,
  SET_COLUMN,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_ERRORS
} from "./types";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/api";

const getMovies = movies => ({ type: GET_MOVIES, payload: movies });
const getGenres = genres => ({ type: GET_GENRES, payload: genres });
const deleteMovie = movie => ({ type: MOVIE_DELETE, payload: movie });
const likeMovie = movie => ({ type: LIKE_MOVIE, payload: movie });
const setCurrent = page => ({ type: SET_CURRENT, payload: page });
const setSelectedGenre = genre => ({ type: SET_GENRE, payload: genre });
const set_column = path => ({ type: SET_COLUMN, payload: path });

const registerUser = (user, history) => async dispatch => {
  console.log(user);
  try {
    const { data } = await axios.post("/users/register", user);
    history.push("/login");
    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (ex) {
    if (
      (ex.response && ex.response.status >= 400) ||
      (ex.response && ex.response.status <= 500)
    )
      dispatch({ type: REGISTER_FAIL, payload: ex.response.data.msg });
    else
      dispatch({
        SET_ERRORS,
        payload: `Unexpected error! - Check your connection`
      });
  }
};

export {
  getMovies,
  getGenres,
  registerUser,
  deleteMovie,
  likeMovie,
  setCurrent,
  setSelectedGenre,
  set_column
};
