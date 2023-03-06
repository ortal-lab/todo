import React, { useState } from "react";
import { MdDoneAll } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi";
import { BsPencil } from "react-icons/bs";
import { deleteToDo, updateToDo } from "../api/api";

const Todo = ({ todo, setFlagAdded }) => {
  const [update, setUpdate] = useState(false);
  const [title, setTitle] = useState("");
  const handleDeleteTask = async () => {
    await deleteToDo(todo.id);
    setFlagAdded((prev) => !prev);
  };
  const handleCompleteTask = async () => {
    todo.isCompleted = !todo.isCompleted;
    await updateToDo(todo.id, todo);
    setFlagAdded((prev) => !prev);
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleUpdateTask = async () => {
    todo.title = title;
    await updateToDo(todo.id, todo);
    setFlagAdded((prev) => !prev);
    setUpdate(false);
  };
  return (
    <div className="todo-line" key={todo.id}>
      {todo.isCompleted ? <s> {todo.title}</s>:<span> {todo.title}</span>}
      <div className="icons">
        <button className="button-in-line" onClick={handleDeleteTask}>
          <HiOutlineTrash />
        </button>
        {
          <button className="button-in-line" onClick={handleCompleteTask}>
            <MdDoneAll />
          </button>
       }
        {
          <button
            className="button-in-line"
            onClick={() => {
              setUpdate(true);
            }}
          >
            <BsPencil />
          </button>
        }
        <dialog open={update}>
          <p>Update todo title</p>
          <form method="dialog">
            <input type="text" onChange={handleChange}></input>
            <button className="button-in-line" onClick={handleUpdateTask}>
              set
            </button>
          </form>
        </dialog>
      </div>
    </div>
  );
};
export default Todo;
