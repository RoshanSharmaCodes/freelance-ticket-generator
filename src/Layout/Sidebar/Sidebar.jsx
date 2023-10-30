import React, { useState } from "react"
import "./Sidebar.css"
import { Avatar, Typography, Select, MenuItem, InputLabel, Box, FormControl, Button, Modal,TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { useForm } from "react-hook-form";
import ProjectListModal from "../../Components/ProjectListModal/ProjectListModal";
import ClientListModal from "../../Components/ClientListModal/ClientListModal";

export default function Sidebar() {


  const clientModalStyle = {
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
    height:"250px",
    justifyContent: "space-evenly",
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
    height:"400px",
    justifyContent: "space-evenly",
  }


  var names = ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5"]
  const [projectName, setProjectName] = useState("Project 1")
  const [contactModal, setContactModal] = useState(false)
  const [projectModal, setProjectModal] = useState(false)
  const [clientListModal, setClientListModal] = useState(false)
  const [projectListModal, setProjectListModal] = useState(false)

  const openContactModal = () => {
    setContactModal(true)
  }

  const closeContactModal = () => {
    setContactModal(false)
  }
 
  const openProjectModal = () => {
    setProjectModal(true)
  }

  const closeProjectModal = () => {
    setProjectModal(false)
  }

  const openClientListModal = () => {
    setClientListModal(true)
  }

  const closeClientListModal = () => {
    setClientListModal(false)
  }

  const openProjectListModal = () => {
    setProjectListModal(true)
  }

  const closeProjectListModal = () => {
    setProjectListModal(false)
  }

  const handleProjectChange = (e) => {
    setProjectName(e.target.value)
  }

  const clientsForm = useForm({
    defaultValues: {
      name:"",
      email:"",
    }
  })

  const projectsForm = useForm({
    defaultValues: {
      projectNameInp:"",
      projectStartDateInp: "",
      clientsNameInp: "",
      clientsEmailInp: ""
    }
  })

  const { register: clientRegister, handleSubmit:handleClientSubmit, formState:clientFormState } = clientsForm;
  const { errors } = clientFormState;
  const submitClientsForm = (data)=>{
  
  }
  
  const { register: projectRegister, handleSubmit:handleProjectSubmit, formState:projectFormState } = projectsForm;
  const { errors: projectError } = projectFormState;
  const submitProjectForm = (data)=>{
    console.log(data)
  }

  return (
    <div className="sidebarContainer">
      <div className="sidebarProfile">
        <Avatar sx={{ width: 150, height: 150 }} />
        <Typography variant="h6">Roshan Sharma</Typography>
      </div>
      <div className="sidebarProjects">
        <FormControl>
          <InputLabel id="demo-multiple-name-label">Select Project</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={projectName}
            label="Project Name"
            style={{ minWidth: 200 }}
            onChange={(e) => handleProjectChange(e)}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="sidebarOptions">
        <Button variant="contained" className="standardBtn" onClick={openContactModal} style={{ width: 200, marginBottom: 10, height: 50 }}>
          Add Client
        </Button>
        <Button variant="contained" className="standardBtn" onClick={openProjectModal} style={{ width: 200, marginBottom: 10, height: 50 }}>
          Add Projects
        </Button>
        <Button variant="contained" className="standardBtn" onClick={openClientListModal} style={{ width: 200, marginBottom: 10, height: 50 }}>
          List Clients
        </Button>
        <Button variant="contained" className="standardBtn" onClick={openProjectListModal} style={{ width: 200, marginBottom: 30, height: 50 }}>
          List Projects
        </Button>

        <Button variant="outlined" style={{ width: 200, marginBottom: 10, height: 50, borderRadius:30, backgroundColor:"white", color: "#1976d2", borderColor: "#1976d2", borderWidth:3 }}>
          Logout
        </Button>
      </div>

      {/* Contact Modal */}
      <Modal open={contactModal} onClose={closeContactModal}>
        <form onSubmit={handleClientSubmit(submitClientsForm)}>
        <Box sx={clientModalStyle}>
          <InputLabel htmlFor="project-name-input">Client's Name</InputLabel>
          <TextField id="name" {...clientRegister("name",{required:"Please enter client's name"})} error={!!errors.projectName} helperText={errors.name?.message}/>
          <InputLabel htmlFor="project-name-input">Client's Email</InputLabel>
          <TextField type="email" id="email" {...clientRegister("email",{required:"Please enter Email",pattern: "/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/"})} error={!!errors.email} helperText={errors.email?.message}/>
          <Button type="submit" variant="contained">Add Client</Button>
        </Box>
        </form>
      </Modal>

      {/* Check Analytics */}


   
      {/* Add Project Modal */}
      <Modal open={projectModal} onClose={closeProjectModal}>
        <form onSubmit={handleProjectSubmit(submitProjectForm)}>
        <Box sx={projectModalStyle}>
          <InputLabel htmlFor="project-name-input">Project Name</InputLabel>
          <TextField id="project-name-input" {...projectRegister("projectNameInp",{required:"Please enter project's name"})} helperText={projectError.projectNameInp?.message} error={!!projectError.projectNameInp}/>

          <InputLabel htmlFor="project-start-date">Project Start Date</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>

          <InputLabel htmlFor="clients-name">Client's Name</InputLabel>
          <TextField id="clients-name" {...projectRegister("clientsNameInp",{required:"Please enter client's name"})} helperText={projectError.clientsNameInp?.message} error={!!projectError.clientsNameInp}/>

          <InputLabel htmlFor="clients-email">Client's Email</InputLabel>
          <TextField id="clients-email" {...projectRegister("clientsEmailInp",{required:"Please enter client's email", pattern: "/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/"})} helperText={projectError.clientsEmailInp?.message} error={!!projectError.clientsEmailInp}/>

          <Button type="submit" variant="contained">Add Project</Button>
        </Box>
        </form>
      </Modal>

      {/* Clients List */}
      <ClientListModal clientListModal={clientListModal} closeClientListModal={closeClientListModal}/>

      {/* Project List */}
      <ProjectListModal projectListModal={projectListModal} closeProjectListModal={closeProjectListModal} />
    </div>
  )
}
