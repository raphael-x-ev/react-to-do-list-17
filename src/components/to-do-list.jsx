import React from "react";
import "./to-do-list.css";
import Notes from "./notes";
import auth from "../auth/auth";

const ToDoList = (props) => {
  const logout = () => {
    auth.logout(() => {
      props.history.push("/");
    });
  };

  const handleClick = (evt) => {
    logout();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-md-auto content-text">
          <span>{props.location.state.username}</span>'s to do list
        </div>
        <div className="col col-lg-2">
          <button
            name="logout"
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Logout
          </button>
        </div>
      </div>

      <div className=" justify-content-center">
        <Notes />
      </div>
    </div>
  );
};

export default ToDoList;
