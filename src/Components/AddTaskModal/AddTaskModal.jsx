import React from "react"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { useForm } from "react-hook-form"
import { Box, Button, InputLabel, TextField, MenuItem, Modal, Select } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from "react"
import dayjs from "dayjs"

export default function AddTaskModal({taskModal, closeTaskModal, prefillMode, data}) {

  console.log("Task Modal Data: ",data)
  const [taskStatus, setTaskStatus] = useState(prefillMode?data.taskStatus:"Not Started")
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

  const handleStatusChange = (e) => {
    setTaskStatus(e.target.value)
  }
  const taskCreateSubmit = (data) => {
    console.log("Task Created",data.taskNameInp)
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
            name="taskNameInp"
            {...taskRegister("taskNameInp", { required: "Please enter task name" })}
            error={!!errors.taskNameInp}
            helperText={errors.taskNameInp?.message}
            value={prefillMode?data.taskName:""}
          />

          <InputLabel htmlFor="project-start-date">Task Start Date</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker
              {...taskRegister("taskStartDateInp", { required: "Please enter start date" })}
              error={!!errors.taskStartDateInp}
              helperText={errors.taskStartDateInp?.message}
              value={prefillMode?dayjs("12-11-2023","DD-MM-YYYY"):dayjs(new Date())}
            />
          </LocalizationProvider>

          <InputLabel htmlFor="clients-name">Task Description</InputLabel>
          <TextField
            id="clients-name"
            {...taskRegister("taskDescInp", { required: "Please enter task description" })}
            error={!!errors.taskDescInp}
            helperText={errors.taskDescInp?.message}
            value={prefillMode?data.taskDescription:""}
          />

          <InputLabel htmlFor="project-name-input">No. of Hours Required</InputLabel>
          <TextField
            id="taskHoursInp"
            {...taskRegister("taskHoursInp", { required: "Please enter no of hours required" })}
            error={!!errors.taskHoursInp}
            helperText={errors.taskHoursInp?.message}
            value={prefillMode?data.taskDuration:""}
          />

          <InputLabel htmlFor="project-name-input">Cost Per Hour</InputLabel>
          <TextField
            id="taskCostInp"
            {...taskRegister("taskCostInp", { required: "Please enter cost per hour" })}
            error={!!errors.taskCostInp}
            helperText={errors.taskCostInp?.message}
            value={prefillMode?data.taskPerHourCost:""}
          />

          <InputLabel id="demo-simple-select-label">Task Status</InputLabel>
          <Select id="demo-simple-select" value={taskStatus} onChange={(e) => handleStatusChange(e)}>
            <MenuItem value={"Not Started"}>Not Started</MenuItem>
            <MenuItem value={"WIP"}>WIP</MenuItem>
            <MenuItem value={"Done"}>Done</MenuItem>
            <MenuItem value={"Problem Occured"}>Pending</MenuItem>
          </Select>
          <Button type="submit" variant="contained">{prefillMode?"Update Task":"Add Task"}</Button>
        </Box>
      </form>
    </Modal>
  )
}
