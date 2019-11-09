import React, { Fragment } from "react";
import Movie from "./movie";


const Movies = ({movies, genres}) => {
  return (
    <Fragment>
      <Movie movies={movies} genres={genres}/>
    </Fragment>
  );
};


export default  Movies;
