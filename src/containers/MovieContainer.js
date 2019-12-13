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
  setSelectedGenre,
  set_column
} from "../redux/actions";
import { getMovies as allMovies } from "../services/fakeMovieService";
import { getGenres as allGenres } from "../services/fakeGenreService";

const MoviesContainer = ({
  movies,
  genres,
  filtered,
  getMovies,
  getGenres,
  deleteMovie,
  likeMovie,
  pageSize,
  currentPage,
  setCurrent,
  selectedGenre,
  setSelectedGenre,
  sortColumn,
  set_column
}) => {
  useEffect(() => {
    const movies = allMovies();
    const genres = [{ _id: "", name: "All Genres" }, ...allGenres()];
    getMovies(movies);
    getGenres(genres);
  }, [getMovies, getGenres]);

  return (
    <div>
      <Movies
        movies={movies}
        genres={genres}
        filtered={filtered}
        deleteMovie={deleteMovie}
        likeMovie={likeMovie}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrent={setCurrent}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        set_column={set_column}
        sortColumn={sortColumn}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  genres: state.movies.genres,
  filtered: state.movies.filtered,
  pageSize: state.movies.pageSize,
  currentPage: state.movies.currentPage,
  selectedGenre: state.movies.selectedGenre,
  sortColumn: state.movies.sortColumn
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies,
      getGenres,
      deleteMovie,
      likeMovie,
      setCurrent,
      setSelectedGenre,
      set_column
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
