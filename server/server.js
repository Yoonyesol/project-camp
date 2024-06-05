const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors()); //모든 origin에 허용

let todos = [];

app.get("/", (req, res) => {
  res.send("Hello Snifer!");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const { text } = req.body;
  const newTodo = {
    id: uuidv4(),
    text,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== id);
  res.status(204).send();
});

app.patch("/todos/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  res.json(todos.filter((todo) => todo.id === id));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
