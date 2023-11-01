import React, { useState } from "react"
import "./TaskCard.css"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import { MoreVertRounded } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import Select from "@mui/material/Select"

export default function TaskCard() {
  const [taskStatus, setTaskStatus] = useState("Not Started")
  const [assignee, setAssignee] = useState("Sugam")

  const [anchorEl, setAnchorEl] = useState(null)

  const handleTaskStatusChange = (e) => {
    setTaskStatus(e.target.value)
  }
  
  const handleAssigneeChange = (e) => {
    setAssignee(e.target.value)
  }
  const openTaskCardMenu = (event) => {
    console.log("HEllo")
    setAnchorEl(event.currentTarget)
  }

  const closeTaskCardMenu = () => {
    setAnchorEl(null)
  }

  const handleEditTaskCard = () => {}

  const handleDeleteTaskCard = () => {}

  return (
    <div>
      <Card sx={{ height: 260, width: 300 }}>
        <CardHeader
          sx={{ fontSize: 15, backgroundColor: "#e0e0e0" }}
          title={"Dashboard UI"}
          subheader={"Created On: 12/04/2023"}
          action={
            <IconButton
              onClick={openTaskCardMenu}
              id="task-menu-button"
              aria-haspopup="true"
              aria-expanded={Boolean(anchorEl) ? "true" : undefined}
              aria-controls={Boolean(anchorEl) ? "task-menu" : undefined}
            >
              <MoreVertRounded />
            </IconButton>
          }
        />
        <CardContent>
          <div className="taskDescription">Will have to create a Dashboard to show all tasks</div>
          <div className="dropdownSection">
            <div>
              <InputLabel id="demo-simple-select-label">Task Status:</InputLabel>
              <Select id="demo-simple-select" value={taskStatus} onChange={handleTaskStatusChange} style={{ height: 35, width:130 }}>
                <MenuItem value={"Not Started"}>Not Started</MenuItem>
                <MenuItem value={"WIP"}>WIP</MenuItem>
                <MenuItem value={"Done"}>Done</MenuItem>
                <MenuItem value={"Problem Occured"}>Problem Occured</MenuItem>
              </Select>
            </div>
            <div>
              <InputLabel id="demo-simple-select-label">Assigned To:</InputLabel>
              <Select id="demo-simple-select" value={assignee} onChange={handleAssigneeChange} style={{ height: 35, width:130 }}>
                <MenuItem value={"Raj"}>Raj</MenuItem>
                <MenuItem value={"Vikas"}>Vikas</MenuItem>
                <MenuItem value={"Sushrut"}>Sushrut</MenuItem>
                <MenuItem value={"Sugam"}>Sugam</MenuItem>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      <Menu
        id="task-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeTaskCardMenu}
        keepMounted
        MenuListProps={{
          "aria-labelledby": "task-menu-button",
        }}
      >
        <MenuItem onClick={handleEditTaskCard}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteTaskCard}>Delete</MenuItem>
      </Menu>
    </div>
  )
}
