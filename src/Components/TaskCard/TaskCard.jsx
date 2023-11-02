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

export default function TaskCard({data,handleTaskDelete}) {
  const [taskStatus, setTaskStatus] = useState(data.taskStatus)
  const [assignee, setAssignee] = useState(data.taskAssignedTo)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleTaskStatusChange = (e) => {
    setTaskStatus(e.target.value)
  }

  const handleAssigneeChange = (e) => {
    setAssignee(e.target.value)
  }
  const openTaskCardMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const closeTaskCardMenu = () => {
    setAnchorEl(null)
  }

  const handleEditTaskCard = () => {}

  const handleDeleteTaskCard = (e) => {
    handleTaskDelete(e.target.id)
  }

  return (
    <div>
      <Card sx={{ height: 260, width: 300 }}>
        <CardHeader
          sx={{ fontSize: 15, backgroundColor: "#e0e0e0" }}
          title={data.taskName}
          subheader={"Created On: "+ data.taskCreatedOn}
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
          <div className="taskDescription">{data.taskDescription}</div>
          <div className="dropdownSection">
            <div>
              <InputLabel id="demo-simple-select-label">Assigned To:</InputLabel>
              <Select id="demo-simple-select" value={assignee} onChange={handleAssigneeChange} style={{ height: 35, width: 130 }}>
                <MenuItem value={"Raj"}>Raj</MenuItem>
                <MenuItem value={"Vikas"}>Vikas</MenuItem>
                <MenuItem value={"Sushrut"}>Sushrut</MenuItem>
                <MenuItem value={"Sugam"}>Sugam</MenuItem>
              </Select>
            </div>
            <div>
              <InputLabel id="demo-simple-select-label">Task Status:</InputLabel>
              <Select id="demo-simple-select" value={taskStatus} onChange={handleTaskStatusChange} style={{ height: 35, width: 130 }}>
                <MenuItem value={"Not Started"}>Not Started</MenuItem>
                <MenuItem value={"WIP"}>WIP</MenuItem>
                <MenuItem value={"Done"}>Done</MenuItem>
                <MenuItem value={"Pending"}>Pending</MenuItem>
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
        <MenuItem id={data.taskId} onClick={handleEditTaskCard}>Edit</MenuItem>
        <MenuItem id={data.taskId} onClick={handleDeleteTaskCard}>Delete</MenuItem>
      </Menu>
    </div>
  )
}
