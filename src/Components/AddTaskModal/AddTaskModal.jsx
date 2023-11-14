import React from "react"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { useForm } from "react-hook-form"
import { Box, Button, InputLabel, TextField, MenuItem, Modal, Select } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from "react"
import dayjs from "dayjs"
import { useDispatch, useSelector } from "react-redux"
import { addTaskToProject } from "../../Store/projectStore/projectStore"

export default function AddTaskModal({taskModal, closeTaskModal, prefillMode, data}) {

  const [taskStatus, setTaskStatus] = useState("Not Started")
  const dispatch = useDispatch()

  const TaskForm = useForm({
    defaultValues: {
      taskName: "",
      taskCreatedOn: "",
      taskDescription: "",
      taskDuration: "",
      taskPerHourCost: "",
      taskStatus: "",
      taskAssignedTo: "Sugam"
    },
  })

  const { register: taskRegister, handleSubmit: handleTaskSubmit, formState: taskFormState } = TaskForm
  const { errors } = taskFormState

  const handleStatusChange = (e) => {
    setTaskStatus(e.target.value)
  }
  const taskCreateSubmit = (data) => {
    dispatch(addTaskToProject(data))
    closeTaskModal()
  }
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
  return (
    <Modal open={taskModal} onClose={closeTaskModal}>
      <form onSubmit={handleTaskSubmit(taskCreateSubmit)}>
        <Box sx={projectModalStyle}>
          <InputLabel htmlFor="project-name-input">Task Name</InputLabel>
          <TextField
            id="project-name-input"
            name="taskName"
            {...taskRegister("taskName", { required: "Please enter task name" })}
            error={!!errors.taskName}
            helperText={errors.taskName?.message}
          />

          <InputLabel htmlFor="project-start-date">Task Start Date</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker
              // {...taskRegister("taskCreatedOn", { required: "Please enter start date" })}
              // error={!!errors.taskCreatedOn}
              // helperText={errors.taskCreatedOn?.message}
            />
          </LocalizationProvider>

          <InputLabel htmlFor="clients-name">Task Description</InputLabel>
          <TextField
            id="clients-name"
            {...taskRegister("taskDescription", { required: "Please enter task description" })}
            error={!!errors.taskDescription}
            helperText={errors.taskDescription?.message}
          />

          <InputLabel htmlFor="project-name-input">No. of Hours Required</InputLabel>
          <TextField
            id="taskDuration"
            {...taskRegister("taskDuration", { required: "Please enter no of hours required" })}
            error={!!errors.taskDuration}
            helperText={errors.taskDuration?.message}
          />

          <InputLabel htmlFor="project-name-input">Cost Per Hour</InputLabel>
          <TextField
            id="taskPerHourCost"
            {...taskRegister("taskPerHourCost", { required: "Please enter cost per hour" })}
            error={!!errors.taskPerHourCost}
            helperText={errors.taskPerHourCost?.message}
          />

          <InputLabel id="demo-simple-select-label">Task Status</InputLabel>
          <Select id="demo-simple-select" value={taskStatus}  {...taskRegister("taskStatus", { required: "Please enter cost per hour" })}
            error={!!errors.taskStatus}
            helperText={errors.taskStatus?.message} onChange={(e) => handleStatusChange(e)}>
            <MenuItem value={"Not Started"}>Not Started</MenuItem>
            <MenuItem value={"WIP"}>WIP</MenuItem>
            <MenuItem value={"Done"}>Done</MenuItem>
            <MenuItem value={"Pending"}>Pending</MenuItem>
          </Select>
          <Button type="submit" variant="contained">Add Task</Button>
        </Box>
      </form>
    </Modal>
  )
}
