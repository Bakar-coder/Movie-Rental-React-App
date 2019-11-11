import React, { Fragment } from "react";
import Like from "../common/like";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import ListGroup from "../movies/listGroup";
import MoviesTable from "../movies/moviesTable";

const Movie = ({
  movies: allMovies,
  genres,
  deleteMovie,
  likeMovie,
  pageSize,
  currentPage,
  setCurrent,
  selectedGenre,
  setSelectedGenre
}) => {
  const handleDelete = movie => {
    deleteMovie(movie);
  };

  const handlePageChange = page => {
    setCurrent(page);
  };

  const handleGenreSelect = genre => {
    setSelectedGenre(genre);
    setCurrent(1);
  };

  if (allMovies.length === 0)
    return (
      <div className="total-movies">
        <p>No movies in the database.</p>
      </div>
    );

  const filtered =
    selectedGenre && selectedGenre._id
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies;

  const movies = paginate(filtered, currentPage, pageSize);

  return (
    <Fragment>
      <div className="total-movies">
        <p>Showing {filtered.length} movies in the database.</p>
      </div>
      <div className="movies-section">
        <ListGroup
          items={genres}
          onItemSelect={handleGenreSelect}
          selectedItem={selectedGenre}
        />
        <div>
          <MoviesTable
            movies={movies}
            handleDelete={handleDelete}
            likeMovie={likeMovie}
          />
          <div className="paginate">
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Movie;
