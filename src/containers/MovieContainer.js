import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Movies from "../components/movies/movies";
import { getMovies, getGenres, deleteMovie, likeMovie } from "../redux/actions";
import { getMovies as allMovies } from "../services/fakeMovieService";
import { getGenres as allGenres } from "../services/fakeGenreService";

const MoviesContainer = ({ movies, genres, getMovies, getGenres, deleteMovie, likeMovie }) => {
  useEffect(() => {
    const movies = allMovies();
    const genres = allGenres();
    getMovies(movies);
    getGenres(genres);
  }, [getMovies, getGenres]);

  return (
    <div>
      <Movies movies={movies} genres={genres} deleteMovie={deleteMovie} likeMovie={likeMovie} />
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  genres: state.movies.genres
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMovies, getGenres, deleteMovie, likeMovie }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesContainer);
