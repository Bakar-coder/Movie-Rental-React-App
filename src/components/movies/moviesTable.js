import React from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import Like from "../common/like";

const MoviesTable = ({
  movies,
  filtered,
  handleDelete,
  likeMovie,
  onSort,
  sortColumn
}) => {
  return (
    <table className="table table-container">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>
            Title{" "}
            {sortColumn.path === "title" && sortColumn.order === "asc" ? (
              <MdExpandMore />
            ) : (
              <MdExpandLess />
            )}
          </th>
          <th onClick={() => onSort("genre.name")}>
            Genre{" "}
            {sortColumn.path === "genre.name" && sortColumn.order === "asc" ? (
              <MdExpandMore />
            ) : (
              <MdExpandLess />
            )}
          </th>
          <th onClick={() => onSort("numberInStock")}>
            Stock{" "}
            {sortColumn.path === "numberInStock" &&
            sortColumn.order === "asc" ? (
              <MdExpandMore />
            ) : (
              <MdExpandLess />
            )}
          </th>
          <th onClick={() => onSort("dailyRentalRate")}>
            Rate{" "}
            {sortColumn.path === "dailyRentalRate" &&
            sortColumn.order === "asc" ? (
              <MdExpandMore />
            ) : (
              <MdExpandLess />
            )}
          </th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {(filtered ? filtered : movies).map(movie => (
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
  );
};

export default MoviesTable;
