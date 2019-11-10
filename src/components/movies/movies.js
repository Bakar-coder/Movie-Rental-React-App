import React, { Fragment } from "react";
import Movie from "./movie";


const Movies = ({movies, genres, deleteMovie, likeMovie}) => {
  return (
    <div className='container'>
      <Movie movies={movies} genres={genres} deleteMovie={deleteMovie} likeMovie={likeMovie}/>
    </div>
  );
};


export default  Movies;
