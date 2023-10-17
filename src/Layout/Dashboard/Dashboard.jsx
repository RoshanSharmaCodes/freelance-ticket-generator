import React from "react"
import "./Dashboard.css"
import Sidebar from "../Sidebar/Sidebar"
import TaskBoard from "../TaskBoard/TaskBoard"

export default function Dashboard() {
  return <div className="mainContainer">
    <Sidebar/>
    <TaskBoard/>
  </div>
}
