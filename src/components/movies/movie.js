import React, { Fragment } from "react";
import _ from "lodash";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import ListGroup from "../movies/listGroup";
import MoviesTable from "../movies/moviesTable";
import FilterMovies from "../filter/filterMovies";

const Movie = ({
  movies: allMovies,
  genres,
  filtered: allFiltered,
  deleteMovie,
  likeMovie,
  pageSize,
  currentPage,
  setCurrent,
  selectedGenre,
  setSelectedGenre,
  set_column,
  sortColumn
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

  const handleSort = path => {
    set_column(path);
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

  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  const movies = paginate(sorted, currentPage, pageSize);

  return (
    <Fragment>
      <div className="total-movies">
        <p>Showing {filtered.length} movies in the database.</p>
      </div>
      <FilterMovies />
      <div className="movies-section">
        <ListGroup
          items={genres}
          onItemSelect={handleGenreSelect}
          selectedItem={selectedGenre}
        />
        <div>
          <MoviesTable
            movies={movies}
            filtered={allFiltered}
            handleDelete={handleDelete}
            likeMovie={likeMovie}
            onSort={handleSort}
            sortColumn={sortColumn}
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
