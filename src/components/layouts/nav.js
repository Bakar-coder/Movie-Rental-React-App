import React, {Fragment,  useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import SideDraw from "./sideNav";

const Nav = () => {
  const [state, setState] = useState({
    isOpen: false
  });

  const toggleNav = () => {
    const { isOpen } = state;
    setState({ isOpen: !isOpen });
  };

  return (
    <Fragment>
    <div className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <h3>Logo</h3>
        </div>
        <MdMenu className="menu" onClick={toggleNav} />
        <ul className="list-group">
          <li className="list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-item">
            <Link to="/about">About</Link>
          </li>
          <li className="list-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="list-item">
            <Link to="/add-product">Add-product</Link>
          </li>
          <li className="list-item">
            <Link to="/register">Register</Link>
          </li>
          <li className="list-item">
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
      <SideDraw isOpen={state.isOpen} onToggle={toggleNav} />
    </Fragment>
  );
};

export default Nav;
