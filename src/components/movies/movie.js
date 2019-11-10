import React, { Fragment } from "react";
import Like from "../common/like";

const Movie = ({ movies, genres, deleteMovie, likeMovie }) => {
  const handleDelete = movie => {
    deleteMovie(movie);
  };


  if (movies.length === 0)
    return (
      <div className="total-movies">
        <p>No movies in the database.</p>
      </div>
    );

  return (
    <Fragment>
      <div className="total-movies">
        <p>Showing {movies.length} movies in the database.</p>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like movie={movie} likeMovie={likeMovie} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Movie;
