import React, { useState } from "react"
import "./TaskBoard.css"
import { Fab } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import Appbar from "../Appbar/Appbar"
import TaskCard from "../../Components/TaskCard/TaskCard"
import AddTaskModal from "../../Components/AddTaskModal/AddTaskModal"

export default function TaskBoard() {
  const [taskModal, setTaskModal] = useState(false)

  const openTaskModal = () => {
    setTaskModal(true)
  }

  const closeTaskModal = () => {
    setTaskModal(false)
  }

  return (
    <div className="taskboardContainer">
      <Appbar />
      <div className="taskboardMain">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>

      <Fab color="primary" aria-label="add" sx={{ position: "fixed", right: 30, bottom: 30 }} onClick={openTaskModal}>
        <AddIcon />
      </Fab>

      {/* Add Task Modal */}
      <AddTaskModal taskModal={taskModal} closeTaskModal={closeTaskModal} />
    </div>
  )
}
