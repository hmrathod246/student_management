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
  const [editTask, setEditTask] = useState();
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
  const handleUpdateTask = async (updatedTask) => {
    try {
      await fetch(`http://localhost:3000/task/${updatedTask.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });
      setTask(
        task.map((task) =>
          task.id === updatedTask.id ? { ...updatedTask } : task,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };
  const editingTask = (editingTask) => {
    console.log(editingTask);
    setEditTask(editingTask);
  };
  const handleDeleteTask=async(id)=>{
    try{
      await fetch(`http://localhost:3000/task/${id}`,
        {
          method:"DELETE"
        })
        setTask(task.filter((task)=>task.id!==id))
    }
    catch(error)
    {
      console.log(error)
    }
  }
  return (
    <div>
      <Navbar title="Task Manager" onLogout={handleLogout} />
      <TaskForm
        addTask={handleAddTask}
        updateTask={handleUpdateTask}
        editingTask={editTask}
      />
      <h1>My Task</h1>

      <TaskList tasks={task} editingTask={editingTask} deletingTask={handleDeleteTask} />
    </div>
  );
}
