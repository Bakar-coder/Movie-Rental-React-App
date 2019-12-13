import React, { Fragment, useRef } from "react";
import "./filter.css";

const FilterMovies = () => {
  const text = useRef("");
  return (
    <Fragment>
      <input
        type="text"
        ref={text}
        className="form-control search"
        name="text"
        placeholder="Search..."
      />
    </Fragment>
  );
};

export default FilterMovies;
