import React, { useState } from "react"
import "./TaskBoard.css"
import { Box, Button, Fab, Input, InputLabel, MenuItem, Modal, Select } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import AddIcon from "@mui/icons-material/Add"
import Appbar from "../Appbar/Appbar"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"

export default function TaskBoard() {
  const projectModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    height: "500px",
    justifyContent: "space-evenly",
  }

  const [taskModal, setTaskModal] = useState(false)
  const [taskStatus, setTaskStatus] = useState("Not Started")

  const openTaskModal = () => {
    setTaskStatus("Not Started")
    setTaskModal(true)
  }

  const closeTaskModal = () => {
    setTaskModal(false)
  }

  const handleStatusChange = (e)=>{
    setTaskStatus(e.target.value)
  }
  return (
    <div className="taskboardContainer">
      <Appbar />

      <Fab color="primary" aria-label="add" sx={{ position: "absolute", right: 30, bottom: 80 }} onClick={openTaskModal}>
        <AddIcon />
      </Fab>

      {/* Add Task Modal */}

      <Modal open={taskModal} onClose={closeTaskModal}>
        <Box sx={projectModalStyle}>
          <InputLabel htmlFor="project-name-input">Task Name</InputLabel>
          <Input id="project-name-input" />

          <InputLabel htmlFor="project-start-date">Task Start Date</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>

          <InputLabel htmlFor="clients-name">Task Description</InputLabel>
          <Input id="clients-name" />

          <InputLabel htmlFor="project-name-input">No. of Hours Required</InputLabel>
          <Input id="project-name-input" />


          <InputLabel id="demo-simple-select-label">Task Status</InputLabel>
          <Select labelId="demo-simple-select-label" label="Status" id="demo-simple-select" value={taskStatus} onChange={(e)=>handleStatusChange(e)}>
            <MenuItem value={"Not Started"}>Not Started</MenuItem>
            <MenuItem value={"WIP"}>WIP</MenuItem>
            <MenuItem value={"Done"}>Done</MenuItem>
            <MenuItem value={"Problem Occured"}>Problem Occured</MenuItem>
          </Select>
          <Button variant="contained">Add Task</Button>
        </Box>
      </Modal>
    </div>
  )
}
