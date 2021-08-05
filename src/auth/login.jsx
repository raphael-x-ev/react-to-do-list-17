import React, { useState } from "react";
import { FormErrors } from "./formErrors";
import auth from "../auth/auth";
import "./login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({ username: "", password: "" });
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [authorized, setAuth] = useState(false);

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    validateField(name, value);
    setUsername(value);
  };
  const handlePasswordInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    validateField(name, value);
    setPassword(value);
  };

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = formErrors;
    let usernameValidField = usernameValid;
    let passwordValidField = passwordValid;

    switch (fieldName) {
      case "username":
        usernameValidField = value.match(/^[a-zA-Z0-9_]{3,10}$/);
        fieldValidationErrors.username = usernameValidField ? "" : "Invalid";
        break;
      case "password":
        passwordValidField = value.match(/^[^&^$#]+$/);
        fieldValidationErrors.password = passwordValidField ? "" : "Invalid";
        break;
      default:
        break;
    }
    setFormErrors(fieldValidationErrors);
    setUsernameValid(usernameValidField);
    setPasswordValid(passwordValidField);
  };

  const login = () => {
    auth.login(() => {
      props.history.push({
        pathname: "/todo",
        state: { username: username },
      });
    });
  };

  const authorize = (e) => {
    let fieldValidationErrors = formErrors;
    const username = e.target.querySelector('input[name="username"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    const authIsValid = password === "123456" && username === "myaccount";
    fieldValidationErrors.credentials = authIsValid ? login() : "Invalid";
    e.preventDefault();
    setAuth(auth);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form action="#" onSubmit={authorize}>
          <h3>Sign In</h3>
          <div className="form-group">
            <div className={`form-group`}>
              <input
                name="username"
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={handleUserInput}
              />
            </div>
          </div>
          <div className="form-group">
            <div className={`form-group`}>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordInput}
              />
            </div>
          </div>
          <div className="panel panel-default">
            <FormErrors formErrors={formErrors} />
          </div>
          <button
            name="submit"
            type="submit"
            className="btn btn-primary btn-block"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
