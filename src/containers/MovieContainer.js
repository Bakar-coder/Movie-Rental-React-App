import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Movies from "../components/movies/movies";
import {
  getMovies,
  getGenres,
  deleteMovie,
  likeMovie,
  setCurrent,
  setSelectedGenre
} from "../redux/actions";
import { getMovies as allMovies } from "../services/fakeMovieService";
import { getGenres as allGenres } from "../services/fakeGenreService";

const MoviesContainer = ({
  movies,
  genres,
  getMovies,
  getGenres,
  deleteMovie,
  likeMovie,
  pageSize,
  currentPage,
  setCurrent,
  selectedGenre,
  setSelectedGenre
}) => {

  useEffect(() => {
    const movies = allMovies();
    const genres = [{ name: 'All Genres' },...allGenres()];
    getMovies(movies);
    getGenres(genres);
  }, [getMovies, getGenres]);

  return (
    <div>
      <Movies
        movies={movies}
        genres={genres}
        deleteMovie={deleteMovie}
        likeMovie={likeMovie}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrent={setCurrent}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  genres: state.movies.genres,
  pageSize: state.movies.pageSize,
  currentPage: state.movies.currentPage,
  selectedGenre: state.movies.selectedGenre
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies,
      getGenres,
      deleteMovie,
      likeMovie,
      setCurrent,
      setSelectedGenre
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesContainer);
