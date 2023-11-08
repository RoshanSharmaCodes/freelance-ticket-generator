import React from "react"
import { InputLabel, Box, Button, Modal, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { addProject } from "../../Store/projectStore/projectStore"

export default function AddProjectModal({ projectModal, closeProjectModal }) {
  const projectList = useSelector((state) => state.projectStore)
  const dispatch = useDispatch()

  const projectsForm = useForm({
    defaultValues: {
      id: projectList.length + 1,
      projectNameInp: "",
      projectStartDateInp: "",
      clientsNameInp: "",
      clientsEmailInp: "",
    },
  })

  const { register: projectRegister, handleSubmit: handleProjectSubmit, formState: projectFormState } = projectsForm
  const { errors: projectError } = projectFormState

  const submitProjectForm = (data) => {
    dispatch(addProject(data))
    closeProjectModal()
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
    height: "400px",
    justifyContent: "space-evenly",
  }

  return (
    <Modal open={projectModal} onClose={closeProjectModal}>
      <form onSubmit={handleProjectSubmit(submitProjectForm)}>
        <Box sx={projectModalStyle}>
          <InputLabel htmlFor="project-name-input">Project Name</InputLabel>
          <TextField
            id="project-name-input"
            {...projectRegister("projectNameInp", { required: "Please enter project's name" })}
            helperText={projectError.projectNameInp?.message}
            error={!!projectError.projectNameInp}
          />

          <InputLabel htmlFor="project-start-date">Project Start Date</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>

          <InputLabel htmlFor="clients-name">Client's Name</InputLabel>
          <TextField
            id="clients-name"
            {...projectRegister("clientsNameInp", { required: "Please enter client's name" })}
            helperText={projectError.clientsNameInp?.message}
            error={!!projectError.clientsNameInp}
          />

          <InputLabel htmlFor="clients-email">Client's Email</InputLabel>
          <TextField
            id="clients-email"
            {...projectRegister("clientsEmailInp", { required: "Please enter client's email", pattern: "/^[^@ ]+@[^@ ]+.[^@ .]{2,}$/" })}
            helperText={projectError.clientsEmailInp?.message}
            error={!!projectError.clientsEmailInp}
          />

          <Button type="submit" variant="contained">
            Add Project
          </Button>
        </Box>
      </form>
    </Modal>
  )
}
