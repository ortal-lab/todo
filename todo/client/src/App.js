import React, { useState, useEffect } from "react";

import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { getAllTodos } from "./api/api";
function App() {
  const [isDoneVal, setIsDoneVal] = useState(false);
  const [todosList, setTodosList] = useState([]);
  const [flagAdded, setFlagAdded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const todos = await getAllTodos();
      setTodosList(todos);
    };
    fetchData();
    console.log("runnnnn");
  }, [flagAdded]);
  useEffect(() => {
    console.log("isDoneVal ", isDoneVal);
  }, [isDoneVal]);

  useEffect(() => {
    console.log("todosList ", todosList);
  }, [todosList]);

  return (
    <div className="App">
      <h1>Things To Do</h1>
      <div className="main-container">
        <Form setFlagAdded={setFlagAdded} />

        <div className="todos-container">
          {todosList
            ?.map((todo) => {
              return (
                <Todo key={todo.id} todo={todo} setFlagAdded={setFlagAdded} />
              );
            })}
        </div>

        <button
          onClick={() => {
            setIsDoneVal(!isDoneVal);
          }}
        >
          {!isDoneVal ? (
            <span>Show what's done</span>
          ) : (
            <span>Show todos (what's not done yet)</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
