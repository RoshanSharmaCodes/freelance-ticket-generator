import React, { useState } from "react"
import "./Sidebar.css"
import { Avatar, Typography, Select, MenuItem, Input, InputLabel, Box, FormControl, Button, Modal, FormHelperText, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { DeleteOutline, EditNoteOutlined } from "@mui/icons-material"

export default function Sidebar() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    maxWidth:"700px"
  }


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
    height:"200px",
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



  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }

  const rows = [
    createData("Creating Layout", "Done", 6.0, 24),
    createData("Login Form", "WIP", 9.0, 37),
    createData("Registration Form", "Done", 16.0, 24),
    createData("State Management", "Done", 3.7, 67),
    createData("Creating Modal", "Done", 16.0, 49),
  ]

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
        <Button variant="contained" className="standardBtn" onClick={openProjectListModal} style={{ width: 200, marginBottom: 10, height: 50 }}>
          List Projects
        </Button>
      </div>

      {/* Contact Modal */}
      <Modal open={contactModal} onClose={closeContactModal}>
        <Box sx={clientModalStyle}>
          <InputLabel htmlFor="project-name-input">Client's Name</InputLabel>
          <Input id="project-name-input" />
          <InputLabel htmlFor="project-name-input">Client's Email</InputLabel>
          <Input id="project-name-input" />
          <Button variant="contained">Add Client</Button>
        </Box>
      </Modal>

      {/* Check Analytics */}


   
      {/* Add Project Modal */}
      <Modal open={projectModal} onClose={closeProjectModal}>
        <Box sx={projectModalStyle}>
          <InputLabel htmlFor="project-name-input">Project Name</InputLabel>
          <Input id="project-name-input" />

          <InputLabel htmlFor="project-start-date">Project Start Date</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>

          <InputLabel htmlFor="clients-name">Client's Name</InputLabel>
          <Input id="clients-name" />

          <InputLabel htmlFor="clients-email">Client's Email</InputLabel>
          <Input id="clients-email" />

          <Button variant="contained">Add Project</Button>
        </Box>
      </Modal>

      {/* Clients List */}
      <Modal open={clientListModal} onClose={closeClientListModal}>
        <Box sx={style}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Client's Name</TableCell>
                  <TableCell align="center">Client's Email</TableCell>
                  <TableCell align="center">Project Name</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center"> <DeleteOutline/> <EditNoteOutlined/> </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>

      {/* Project List */}
      <Modal open={projectListModal} onClose={closeProjectListModal}>
        <Box sx={style}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Project Name</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Client's Name</TableCell>
                  <TableCell align="center">Client's Email</TableCell>
                  <TableCell align="center">Start Date</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}  </TableCell>
                    <TableCell align="center"> 24/01/2000  </TableCell>
                    <TableCell align="center"> <DeleteOutline/> <EditNoteOutlined/> </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  )
}
