import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import { isValidEmail } from "../../utils/emailValidation";

const Register = ({ auth }) => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password2: ""
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const { name, username, email, password, password2 } = user;

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) return toast.error(" Name is not allowed empty!");
    if (!username) return toast.error(" Username is not allowed empty!");
    if (!email) return toast.error(" Email is not allowed empty!");
    if (!password) return toast.error(" Password is not allowed empty!");
    if (password.length < 8) return toast.error(" Password must be at least 8 characters.");
    if (!password2) return toast.error(" Confirm password");
    if (username.length < 3) return toast.error("Username must be at least 3 characters.");
    if (!isValidEmail(email)) return toast.error("Invalid Email.");
    if (password !== password2)
      return toast.error("Passwords don't match.");
    console.log(user);
  };


  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-title">
        <h3>Sign Up</h3>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Full Name"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Register</button>
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
)(Register);
