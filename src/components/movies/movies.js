import React from "react";
import Movie from "./movie";

const Movies = ({
  movies,
  genres,
  deleteMovie,
  likeMovie,
  pageSize,
  currentPage,
  setCurrent,
  selectedGenre,
  setSelectedGenre
}) => {
  return (
    <div className="container">
      <Movie
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

export default Movies;
