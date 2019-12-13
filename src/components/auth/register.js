import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { validateUserRegister } from "../../utils/Validation";
import "./form.css";

const Register = ({ auth }) => {
  const [user, setUser] = useState({
    account: { name: "", username: "", email: "", password: "", password2: "" },
    errors: {}
  });

  const handleChange = e => {
    setUser({
      ...user,
      account: {
        ...user.account,
        [e.target.name]: e.target.value
      }
    });
  };

  const Validation = user => {
    const { error } = validateUserRegister(user.account);
    if (!error) return null;
    const errors = {};
    error.details.map(item => (errors[item.path[0]] = item.message));
    return errors;
  };

  const { name, username, email, password, password2 } = user.account;

  const handleSubmit = e => {
    e.preventDefault();
    const errors = Validation(user);
    if (errors !== {}) {
      setUser({ ...user, errors });
      setTimeout(() => {
        setUser({ ...user, errors: {} });
      }, 5000);
    }
    if (user.account.password !== user.account.password2) {
      setUser({
        ...user,
        errors: {
          password2:
            "Passwords't match, please enter the correct password to continue."
        }
      });
      setTimeout(() => {
        setUser({ ...user, errors: {} });
      }, 5000);
    }
    console.log(user.account);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-title">
        <h3>Sign Up</h3>
      </div>
      <div className="form-group">
        <label
          htmlFor="name"
          className={user.errors && user.errors.name ? "danger" : ""}
        >
          {user.errors !== {} && user.errors.name ? user.errors.name : null}
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          id="name"
          placeholder="Full Name"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label
          htmlFor="name"
          className={user.errors && user.errors.username ? "danger" : ""}
        >
          {user.errors !== {} && user.errors.username
            ? user.errors.username
            : null}
        </label>
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
        <label
          htmlFor="name"
          className={user.errors && user.errors.email ? "danger" : ""}
        >
          {user.errors !== {} && user.errors.email ? user.errors.email : null}
        </label>
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
        <label
          htmlFor="name"
          className={user.errors && user.errors.password ? "danger" : ""}
        >
          {user.errors !== {} && user.errors.password
            ? user.errors.password
            : null}
        </label>
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
        <label
          htmlFor="name"
          className={user.errors && user.errors.password2 ? "danger" : ""}
        >
          {user.errors !== {} && user.errors.password2
            ? user.errors.password2
            : null}
        </label>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
