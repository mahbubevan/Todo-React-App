import React, { Component } from "react";
import TodoTable from "../components/TodoTable";

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

    if (!isLoaded) {
      return <h3> API Loading ..</h3>;
    } else {
      return (
        <div>
          <TodoTable items={this.state.items} />
        </div>
      );
    }
  }
}

export default TodoAPI;
