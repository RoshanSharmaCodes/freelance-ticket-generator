import React, { useState } from "react"
import "./Sidebar.css"
import { Avatar, Typography, Select, MenuItem, Input, InputLabel, Box, FormControl, Button, Modal, FormHelperText } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"

export default function Sidebar() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  }

  var names = ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5"]
  const [projectName, setProjectName] = useState("Project 1")
  const [contactModal, setContactModal] = useState(false)
  const [analyticModal, setAnalyticModal] = useState(false)
  const [sendReportModal, setSendReportModal] = useState(false)
  const [projectModal, setProjectModal] = useState(false)

  const openContactModal = () => {
    setContactModal(true)
  }

  const closeContactModal = () => {
    setContactModal(false)
  }
  const openAnalytictModal = () => {
    setAnalyticModal(true)
  }

  const closeAnalyticModal = () => {
    setAnalyticModal(false)
  }
  const openSendReportModal = () => {
    setSendReportModal(true)
  }

  const closeSendReportModal = () => {
    setSendReportModal(false)
  }

  const openProjectModal = () => {
    setProjectModal(true)
  }

  const closeProjectModal = () => {
    setProjectModal(false)
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
        <Button variant="contained" className="standardBtn" onClick={openAnalytictModal} style={{ width: 200, marginBottom: 10, height: 50 }}>
          Check Analytics
        </Button>
        <Button variant="contained" className="standardBtn" style={{ width: 200, marginBottom: 10, height: 50 }}>
          Download Report
        </Button>
        <Button variant="contained" className="standardBtn" onClick={openSendReportModal} style={{ width: 200, marginBottom: 10, height: 50 }}>
          Send Report
        </Button>
        <Button variant="contained" className="standardBtn" onClick={openContactModal} style={{ width: 200, marginBottom: 10, height: 50 }}>
          Add Contacts
        </Button>
        <Button variant="contained" className="standardBtn" onClick={openProjectModal} style={{ width: 200, marginBottom: 10, height: 50 }}>
          Add Projects
        </Button>
      </div>

      {/* Contact Modal */}
      <Modal open={contactModal} onClose={closeContactModal}>
        <Box sx={style}>
          <InputLabel htmlFor="project-name-input">Client's Name</InputLabel>
          <Input id="project-name-input" />
          <InputLabel htmlFor="project-name-input">Client's Email</InputLabel>
          <Input id="project-name-input" />
        </Box>
      </Modal>

      {/* Check Analytics */}
      <Modal open={analyticModal} onClose={closeAnalyticModal}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

      {/* Send Report */}
      <Modal open={sendReportModal} onClose={closeSendReportModal}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

      {/* Add Project Modal */}
      <Modal open={projectModal} onClose={closeProjectModal}>
        <Box sx={style}>
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
        </Box>
      </Modal>
    </div>
  )
}
