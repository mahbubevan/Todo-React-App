import React, { Component } from "react";
import TodoTable from "../components/TodoTable";
import { Spinner } from "reactstrap";

class TodoAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(result => {
        this.setState({
          items: result,
          isLoaded: true
        });
      });
  }

  render() {
    const { isLoaded } = this.state;

    return isLoaded ? (
      <TodoTable items={this.state.items} />
    ) : (
      <div>
        <Spinner type="grow" color="danger" />
      </div>
    );
  }
}

export default TodoAPI;
