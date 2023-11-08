import React, { useState } from "react"
import "./Sidebar.css"
import { Avatar, Typography, Select, MenuItem, InputLabel,FormControl, Button } from "@mui/material"
import ProjectListModal from "../../Components/ProjectListModal/ProjectListModal"
import ClientListModal from "../../Components/ClientListModal/ClientListModal"
import Edit from "@mui/icons-material/Edit"
import TeamListModal from "../../Components/TeamListModal/TeamListModal"
import AddClientModal from "../../Components/AddClientModal/AddClientModal"
import AddProjectModal from "../../Components/AddProjectModal/AddProjectModal"
import { useDispatch, useSelector } from "react-redux"
import { changeActiveTask, changeActiveProject } from "../../Store/taskStore/taskStore"

export default function Sidebar() {
  
  const clientList = useSelector(state => state.clientStore)
  const projectList = useSelector(state => state.projectStore)
  const teamList = useSelector(state => state.teamStore)
  const taskDispatch = useDispatch()
  const [projectName, setProjectName] = useState(projectList[0].projectName)
  const [contactModal, setContactModal] = useState(false)
  const [projectModal, setProjectModal] = useState(false)
  const [clientListModal, setClientListModal] = useState(false)
  const [projectListModal, setProjectListModal] = useState(false)
  const [teamListModal, setTeamListModal] = useState(false)
  const [imageUrl, setImageUrl] = useState(null);
  

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
  
  const openTeamListModal = () => {
    setTeamListModal(true)
  }

  const closeTeamListModal = () => {
    setTeamListModal(false)
  }
  const handleProjectChange = (e) => {
    setProjectName(e.target.value)
    taskDispatch(changeActiveProject(e.target.value))
  }

  const openProfilePicWindow = () => {
    document.getElementById('upload-profile-pic-window').click();
  }

  const handleUploadProfilePic = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    const url = reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImageUrl(reader.result)
    }
  }

  return (
    <div className="sidebarContainer">
      <div className="sidebarProfile">
        <div style={{position:"relative"}}>
        <input id="upload-profile-pic-window" onChange={handleUploadProfilePic} style={{display:"none"}} accept="image/*" type="file" />
            <Edit
              onClick={openProfilePicWindow}
              style={{
                position: "absolute",
                right: 0,
                bottom: 20,
                border: "2px solid white",
                padding: "7px",
                borderRadius: "50%",
                backgroundColor: "#d4d4d4",
                cursor: "pointer",
                zIndex:100,
              }}
            />
        <Avatar src={imageUrl} sx={{ width: 150, height: 150 }}>
        </Avatar>
        </div>
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
            {projectList.map((data) => (
              <MenuItem key={data.projectName} value={data.projectName}>
                {data.projectName}
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
        <Button variant="contained" className="standardBtn" onClick={openProjectListModal} style={{ width: 200, marginBottom: 10, height: 50 }}>
          List Projects
        </Button>
        <Button variant="contained" className="standardBtn" onClick={openTeamListModal} style={{ width: 200, marginBottom: 30, height: 50 }}>
          List Team
        </Button>
        <Button
          variant="outlined"
          style={{
            width: 200,
            marginBottom: 10,
            height: 50,
            borderRadius: 30,
            backgroundColor: "white",
            color: "#1976d2",
            borderColor: "#1976d2",
            borderWidth: 3,
          }}
        >
          Logout
        </Button>
      </div>

      {/* Client Modal */}
     <AddClientModal contactModal={contactModal} closeContactModal={closeContactModal} />

      {/* Add Project Modal */}
      <AddProjectModal projectModal={projectModal} closeProjectModal={closeProjectModal} />

      {/* Clients List */}
      <ClientListModal clientListModal={clientListModal} closeClientListModal={closeClientListModal} data={clientList}/>

      {/* Project List */}
      <ProjectListModal projectListModal={projectListModal} closeProjectListModal={closeProjectListModal} data={projectList}/>

      {/* Team List */}
      <TeamListModal TeamListModal={teamListModal} openTeamModal={openTeamListModal} closeTeamListModal={closeTeamListModal} data={teamList} />
    </div>
  )
}
