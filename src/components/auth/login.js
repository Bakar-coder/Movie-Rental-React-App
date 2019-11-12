import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {toast} from "react-toastify";

const Login = ({ auth }) => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!email) return toast.error(" Email is not allowed empty!");
    if (!password) return toast.error(" Password is not allowed empty!");
    console.log(user);
  };

  const { email, password } = user;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-title">
        <h3>Sign In</h3>
      </div>

      <div className="form-group">
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder='Email Address'
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder='Password'
          value={password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
