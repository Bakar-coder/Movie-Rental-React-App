import React, { Fragment } from "react";
import BackDrop from "./backDrop";

const SideDraw = ({ isOpen, onToggle }) => {
  return (
    <Fragment>
      <div className={isOpen ? "side-nav_open" : "side-nav"}>
        <div className="container">
          <h3>Side Draw</h3>
        </div>
      </div>
      <BackDrop isOpen={isOpen} onToggle={onToggle} />
    </Fragment>
  );
};

export default SideDraw;
