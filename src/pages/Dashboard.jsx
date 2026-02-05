import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { createRequestHandler, useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
export default function Dashboard() {
  const navigate = useNavigate();
  const [task, setTask] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/task");
      const data = await response.json();
      setTask(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddTask = async (newtask) => {
    const tasktoAdd = { ...newtask, completed: false };
    try {
      const response = await fetch("http://localhost:3000/task", {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify(tasktoAdd),
      });
      console.log(tasktoAdd);
      const data = await response.json();
      setTask([...task, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("logindata");
    localStorage.removeItem("authData");
    //  localStorage.clear()
    navigate("/login");
  };

  return (
    <div>
      <Navbar title="Task Manager" onLogout={handleLogout} />
      <TaskForm addTask={handleAddTask} />
      <h1>My Task</h1>

      <TaskList tasks={task} />
    </div>
  );
}
