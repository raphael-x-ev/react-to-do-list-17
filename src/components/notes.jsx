import React, { useState } from "react";
import List from "./list";

const Notes = () => {
  const [todo, setToDo] = useState([
    { name: "Clearn React", date: "8/3/2021, 7:19:01 PM" },
    { name: "Eat Breakfast", date: "8/2/2021, 7:29:01 PM" },
    { name: "Be a Rockstar Developer", date: "8/4/2021, 7:35:00 PM" },
  ]);
  const [input, setInput] = useState("");

  //Methods

  const handleAddToDo = () => {
    let nameListArray = [];

    Object.values(todo).forEach((value) => {
      nameListArray.push(value.name);
    });

    if (!nameListArray.includes(input)) {
      const newTodos = [
        ...todo,
        { name: input, date: new Date().toLocaleString() + "" },
      ];
      setToDo(newTodos);
      setInput("");
    }
  };

  const handleRemoveToDo = (e) => {
    e.stopPropagation();
    const index = e.currentTarget.getAttribute("data-index");
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setToDo(newTodos);
  };

  function handleSortToDoName() {
    this.setState((previousState) => {
      return {
        todoList: previousState.todoList.sort(dynamicSort("name")),
      };
    });
  }

  function handleSortToDoDate() {
    this.setState((previousState) => {
      return {
        todoList: previousState.todoList.sort(dynamicSort("date")),
      };
    });
  }

  function dynamicSort(property) {
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
  const updateInput = (typeEvent) => {
    const value = typeEvent.target.value;
    setInput(value);
  };

  return (
    <div>
      <div id="inputList" className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Add ToDo"
          value={input}
          onChange={updateInput}
        />
        <div className="input-group-prepend">
          <button className="btn btn-primary" onClick={handleAddToDo}>
            Add
          </button>
        </div>
      </div>
      <List
        list={todo}
        onRemoveToDo={handleRemoveToDo}
        // onSortByToDoName={handleSortToDoName}
        // onSortByToDoDate={handleSortToDoDate}
      />
    </div>
  );
};

export default Notes;
