import React from "react";
import ReactDOM from "react-dom";

import TodoAPI from "./api/TodoAPI";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <TodoAPI />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
