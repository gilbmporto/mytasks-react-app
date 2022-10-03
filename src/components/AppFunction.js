import React, { useState } from "react";
import '../App.css';
import NewTask from "./newTask";
import TasksList from "./TasksList";

export default function App() {
  // hook your code up here ;)
  const [allTasks, setAllTasks] = useState([]);
  const [newTask, setNewTask] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prevState) => ({ ...prevState, [name]: value, id: Date.now()}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prevState) => [newTask, ...prevState]);
    setNewTask({});
  }

  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prevState) => prevState.filter(
    (task) => task.id !== taskIdToRemove
    ));
  }

  console.log(newTask);

  return (
      <main>
        <h1>My Tasks App</h1>
        <NewTask
          newTask={newTask}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <TasksList
          allTasks={allTasks}
          handleDelete={handleDelete}
        />
      </main>
    );
}
