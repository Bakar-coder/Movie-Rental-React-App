import React from "react";
import Movie from "./movie";

const Movies = ({
  movies,
  genres,
  filtered,
  deleteMovie,
  likeMovie,
  pageSize,
  currentPage,
  setCurrent,
  selectedGenre,
  setSelectedGenre,
  sortMovies,
  set_column,
  sortColumn
}) => {
  return (
    <div className="container">
      <Movie
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
        sortMovies={sortMovies}
        set_column={set_column}
        sortColumn={sortColumn}
      />
    </div>
  );
};

export default Movies;
