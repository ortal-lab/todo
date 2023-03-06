import express from "express";
import cors from "cors";
import fs from "fs";
import bodyParser from "body-parser";
const app = express();

//get
app.use(cors());

app.use(bodyParser.json());

app.get("/api/getAllTodos", (req, res) => {
  const allTodos = fs.readFileSync("./todos.json", "utf-8");
  res.status(200).send(allTodos);
});

app.post("/api/addTodo", (req, res) => {
  const allTodos = JSON.parse(fs.readFileSync("./todos.json", "utf-8"));
  console.log("hjdvsjvj")
  console.log(req.body);
  const newTodo = req.body;
  allTodos.push(newTodo);
  const allTodosAfterPost = fs.writeFileSync(
    "./todos.json",
    JSON.stringify(allTodos)
  );
  res.status(200).send(allTodosAfterPost);
});

app.delete("/api/deleteTodo/:id", (req, res) => {
  const id = req.params.id;
  const allTodos = JSON.parse(fs.readFileSync("./todos.json", "utf-8"));
  allTodos.splice(
    allTodos.findIndex((todo) => todo.id === id),
    1
  );
  console.log(allTodos);
  const allTodosAfterPost = fs.writeFileSync(
    "./todos.json",
    JSON.stringify(allTodos)
  );
  res.status(200).send(allTodosAfterPost);
});

app.put("/api/updateTodo/:id", (req, res) => {
    const id = req.params.id;
    let  updateTodo=req.body;
    updateTodo.id=id

    const allTodos = JSON.parse(fs.readFileSync("./todos.json", "utf-8"));

    allTodos.forEach((todo, index) => {
        if(todo.id === id) {
            allTodos[index] = updateTodo;
        }
    });

    console.log(allTodos);
    const allTodosAfterPost = fs.writeFileSync(
      "./todos.json",
      JSON.stringify(allTodos)
    );
    res.status(200).send(allTodosAfterPost);

});

app.listen(8000, () => {
  console.log("works");
});
