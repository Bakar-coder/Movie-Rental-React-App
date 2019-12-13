import React, { Fragment, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchMovie, clearSearch } from "../../redux/actions";
import "./filter.css";

const FilterMovies = ({ searchMovie, clearSearch }) => {
  const text = useRef("");

  const handleInputChange = e => {
    return text.current.value !== ""
      ? searchMovie(e.target.value)
      : clearSearch();
  };
  return (
    <input
      type="text"
      ref={text}
      className="form-control search"
      name="text"
      placeholder="Search movie by title | genre..."
      onChange={handleInputChange}
    />
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchMovie, clearSearch }, dispatch);

export default connect(null, mapDispatchToProps)(FilterMovies);
