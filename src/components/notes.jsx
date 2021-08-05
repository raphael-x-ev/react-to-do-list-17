import React from "react";
import List from "./list";

export default class Notes extends React.Component {
  //initial state
  state = {
    todoList: [
      { name: "Clearn React", date: "8/3/2021, 7:19:01 PM" },
      { name: "Eat Breakfast", date: "8/2/2021, 7:29:01 PM" },
      { name: "Be a Rockstar Developer", date: "8/4/2021, 7:35:00 PM" },
    ],
    input: "",
  };

  //this bind
  handleRemoveToDo = this.handleRemoveToDo.bind(this);
  updateInput = this.updateInput.bind(this);
  handleAddToDo = this.handleAddToDo.bind(this);
  handleSortToDoName = this.handleSortToDoName.bind(this);
  handleSortToDoDate = this.handleSortToDoDate.bind(this);

  //Methods
  handleAddToDo() {
    const obj = {
      name: this.state.input,
      date: new Date().toLocaleString() + "",
    };
    let nameListArray = [];

    this.setState((previousState) => {
      Object.values(previousState.todoList).forEach((value) => {
        nameListArray.push(value.name);
      });

      if (!nameListArray.includes(this.state.input)) {
        return {
          todoList: previousState.todoList.concat(obj),
          input: "",
        };
      }
      //adds if the value is not yet inside the object
    });
  }

  handleRemoveToDo(name) {
    this.setState((previousState) => {
      return {
        todoList: previousState.todoList.filter((todo) => todo.name !== name),
      };
    });
  }

  handleSortToDoName() {
    this.setState((previousState) => {
      return {
        todoList: previousState.todoList.sort(this.dynamicSort("name")),
      };
    });
  }

  handleSortToDoDate() {
    this.setState((previousState) => {
      return {
        todoList: previousState.todoList.sort(this.dynamicSort("date")),
      };
    });
  }

  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  //update inputs (event)
  updateInput(typeEvent) {
    const value = typeEvent.target.value;
    this.setState({
      input: value,
    });
  }

  render() {
    return (
      <div>
        <div id="inputList" className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Add ToDo"
            value={this.state.input}
            onChange={this.updateInput}
          />
          <div className="input-group-prepend">
            <button className="btn btn-primary" onClick={this.handleAddToDo}>
              Add
            </button>
          </div>
        </div>
        <List
          list={this.state.todoList}
          onRemoveToDo={this.handleRemoveToDo}
          onSortByToDoName={this.handleSortToDoName}
          onSortByToDoDate={this.handleSortToDoDate}
        />
      </div>
    );
  }
}
