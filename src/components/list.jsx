import React from "react";

const List = (props) => {
  return (
    <div>
      <table className="table table-striped border-bottom">
        <thead>
          <tr>
            <th
              className="todo-header"
              scope="col"
              onClick={props.onSortByToDoName}
            >
              To Do
            </th>
            <th
              className="todo-header"
              scope="col"
              onClick={props.onSortByToDoDate}
            >
              Date Added
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {Object.values(props.list).map((value, index) => (
            <tr data-index={index} key={value.name}>
              <td>{value.name}</td>
              <td>{value.date}</td>
              <td id="table-action">
                <button
                  data-index={index}
                  type="button"
                  className="btn btn-danger"
                  onClick={props.onRemoveToDo}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
