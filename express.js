const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Worked Well");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  let newTask = req.body;
  console.log(req.body);
  tasks.push(newTask);
  res.json(tasks);
});

app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks.forEach((elem, index) => {
    if (elem.id === id) {
      tasks.splice(index, 1);
    }
  });
  res.json(tasks);
});

PORT = 5000;
app.listen(PORT, () => console.log(`YOUR SERVER WORKS CORRECTLY) ${PORT}`));

const tasks = [
  {
    id: 1,
    title: "express",
    isCompleted: true
  },

  {
    id: 2,
    title: "nodejs",
    isCompleted: false
  },

  {
    id: 3,
    title: "react",
    isCompleted: false
  }
];
