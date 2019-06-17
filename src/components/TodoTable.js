import React, { Component } from "react";
import { Table } from "reactstrap";
import { PropTypes } from "prop-types";

class TodoTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.items
    };
  }

  render() {
    const todo = this.state.todos;
    return (
      <div>
        <Table dark>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Id</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {todo.map(t => (
              <tr key={t.id}>
                <th scope="row">{t.userId}</th>
                <td>{t.id}</td>
                <td>{t.title}</td>
                <td>{t.completed ? "Complete" : "Not Complete"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

Table.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  striped: PropTypes.bool,
  dark: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.bool,
  // Custom ref handler that will be assigned to the "ref" of the inner <table> element
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ])
};

export default TodoTable;
