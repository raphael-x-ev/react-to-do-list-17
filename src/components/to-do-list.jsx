import React from "react";
import "./to-do-list.css";
import Notes from "./notes";
import auth from "../auth/auth";

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  logout() {
    auth.logout(() => {
      this.props.history.push("/");
    });
  }

  handleClick(evt) {
    this.logout();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-md-auto content-text">
            <span>{this.props.location.state.username}</span>'s to do list
          </div>
          <div className="col col-lg-2">
            <button
              name="logout"
              type="submit"
              className="btn btn-primary"
              onClick={this.handleClick}
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
  }
}
