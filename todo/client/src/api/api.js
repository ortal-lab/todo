import axios from "axios";

export const getAllTodos = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/getAllTodos");
    console.log(res);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
export const addToDo = async (todo) => {
  try {
    console.log(todo);
    const res = await axios.post("http://localhost:8000/api/addTodo", todo);
    console.log(res);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
export const deleteToDo = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/api/deleteTodo/${id}`);
  } catch (e) {
    console.log(e);
  }
};
export const updateToDo = async (id,todo) => {
    try {
      await axios.put(`http://localhost:8000/api/updateTodo/${id}`,todo);
    } catch (e) {
      console.log(e);
    }
  };
  