import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { createRequestHandler, useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
export default function Dashboard() {
  const navigate = useNavigate();
  const [task, setTask] = useState([]);
  useEffect(()=>
  {
    fetchData();
    
    
  },[])
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/task");
      const data =  await response.json();
      setTask(data);
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
      <h1>My Task</h1>

      <TaskList tasks={task}/>
    </div>
  );
}
