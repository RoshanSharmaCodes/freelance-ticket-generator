import React, { useState } from "react"
import "./TaskBoard.css"
import { Box, Button, Fab, Input, InputLabel, TextField, MenuItem, Modal, Select } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import AddIcon from "@mui/icons-material/Add"
import Appbar from "../Appbar/Appbar"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { useForm } from "react-hook-form"
import TaskCard from "../../Components/TaskCard/TaskCard"

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
    height: "600px",
    justifyContent: "space-evenly",
  }

  const [taskModal, setTaskModal] = useState(false)
  const [taskStatus, setTaskStatus] = useState("Not Started")

  const TaskForm = useForm({
    defaultValues: {
      taskNameInp: "",
      taskStartDateInp: "",
      taskDescInp: "",
      taskHoursInp: "",
      taskCostInp: "",
      taskStatusInp: "",
    },
  })

  const { register: taskRegister, handleSubmit: handleTaskSubmit, formState: taskFormState } = TaskForm
  const { errors } = taskFormState

  const taskCreateSubmit = () => {
    console.log("Task Created")
  }

  const openTaskModal = () => {
    setTaskStatus("Not Started")
    setTaskModal(true)
  }

  const closeTaskModal = () => {
    setTaskModal(false)
  }

  const handleStatusChange = (e) => {
    setTaskStatus(e.target.value)
  }
  return (
    <div className="taskboardContainer">
      <Appbar />

      <TaskCard />

      <Fab color="primary" aria-label="add" sx={{ position: "absolute", right: 30, bottom: 80 }} onClick={openTaskModal}>
        <AddIcon />
      </Fab>

      {/* Add Task Modal */}

      <Modal open={taskModal} onClose={closeTaskModal}>
        <form onSubmit={handleTaskSubmit(taskCreateSubmit)}>
          <Box sx={projectModalStyle}>
            <InputLabel htmlFor="project-name-input">Task Name</InputLabel>
            <TextField
              id="project-name-input"
              {...taskRegister("taskNameInp", { required: "Please enter task name" })}
              error={!!errors.taskNameInp}
              helperText={errors.taskNameInp?.message}
            />

            <InputLabel htmlFor="project-start-date">Task Start Date</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                {...taskRegister("taskStartDateInp", { required: "Please enter start date" })}
                error={!!errors.taskStartDateInp}
                helperText={errors.taskStartDateInp?.message}
              />
            </LocalizationProvider>

            <InputLabel htmlFor="clients-name">Task Description</InputLabel>
            <TextField
              id="clients-name"
              {...taskRegister("taskDescInp", { required: "Please enter task description" })}
              error={!!errors.taskDescInp}
              helperText={errors.taskDescInp?.message}
            />

            <InputLabel htmlFor="project-name-input">No. of Hours Required</InputLabel>
            <TextField
              id="taskHoursInp"
              {...taskRegister("taskHoursInp", { required: "Please enter no of hours required" })}
              error={!!errors.taskHoursInp}
              helperText={errors.taskHoursInp?.message}
            />

            <InputLabel htmlFor="project-name-input">Cost Per Hour</InputLabel>
            <TextField
              id="taskCostInp"
              {...taskRegister("taskCostInp", { required: "Please enter cost per hour" })}
              error={!!errors.taskCostInp}
              helperText={errors.taskCostInp?.message}
            />

            <InputLabel id="demo-simple-select-label">Task Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              label="Status"
              id="demo-simple-select"
              value={taskStatus}
              onChange={(e) => handleStatusChange(e)}
            >
              <MenuItem value={"Not Started"}>Not Started</MenuItem>
              <MenuItem value={"WIP"}>WIP</MenuItem>
              <MenuItem value={"Done"}>Done</MenuItem>
              <MenuItem value={"Problem Occured"}>Problem Occured</MenuItem>
            </Select>
            <Button type="submit" variant="contained">
              Add Task
            </Button>
          </Box>
        </form>
      </Modal>
    </div>
  )
}
