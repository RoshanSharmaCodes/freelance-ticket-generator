import React, { useState } from "react"
import "./TaskBoard.css"
import { Fab } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import Appbar from "../Appbar/Appbar"
import TaskCard from "../../Components/TaskCard/TaskCard"
import AddTaskModal from "../../Components/AddTaskModal/AddTaskModal"
import { TaskCardData } from "../../JSON/FakeData"

export default function TaskBoard() {
  const [taskModal, setTaskModal] = useState(false)
  var [taskData, setTaskData] = useState(TaskCardData)

  const openTaskModal = () => {
    setTaskModal(true)
  }

  const closeTaskModal = () => {
    setTaskModal(false)
  }

  const handleTaskEdit = (id) => {
    setTaskModal(true)
  }

  const handleTaskDelete = (id) => {
    taskData = taskData.filter((data) => data.taskId != id)
    setTaskData(taskData)
  }

  return (
    <div className="taskboardContainer">
      <Appbar />
      <div className="taskboardMain">
        {taskData.map((data) => (
          <TaskCard data={data} handleTaskDelete={handleTaskDelete} handleTaskEdit={handleTaskEdit}/>
        ))}
      </div>

      <Fab color="primary" aria-label="add" sx={{ position: "fixed", right: 30, bottom: 30 }} onClick={openTaskModal}>
        <AddIcon />
      </Fab>

      {/* Add Task Modal */}
      <AddTaskModal taskModal={taskModal} closeTaskModal={closeTaskModal} prefillMode={false}/>
          
    </div>
  )
}
