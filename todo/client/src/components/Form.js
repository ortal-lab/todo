import React,{useState} from "react";
import { addToDo } from "../api/api";
const Form = ({ setFlagAdded }) => {
  const [title, setTitle] = useState("");
  const handleAddToDo = async () => {
    const newDate = {
      id:Math.round(Math.random() * 100000).toString() ,
      title,
      isCompleted: false,
    };
    await addToDo(newDate);
    setFlagAdded((prev) => !prev);
  };
  return (
    <div className="form-container">
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="todo"
      ></input>
      <button onClick={handleAddToDo}>Add to list</button>
    </div>
  );
};
export default Form;
