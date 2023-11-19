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
import AddTaskModal from "../AddTaskModal/AddTaskModal"
import { useSelector } from "react-redux"

export default function TaskCard({data,handleTaskDelete,handleTaskEdit}) {
  const [taskStatus, setTaskStatus] = useState(data.taskStatus)
  const [assignee, setAssignee] = useState(data.taskAssignedTo)
  const [anchorEl, setAnchorEl] = useState(null)
  const [prefillTaskModal, setPrefillTaskModal] = useState(false)
  const teamList = useSelector(state=>state.teamStore)
  let headerColor = taskStatus === "WIP"? "#ffc830" : taskStatus === "Done"? "#66ff47": taskStatus === "Not Started"? "lightblue": "#ff6e42";

  const closePrefillTaskModal = () => {
    setPrefillTaskModal(false)
  }

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

  const handleEditTaskCard = (e) => {
    setAnchorEl(null)
    setPrefillTaskModal(true)
  }

  const handleDeleteTaskCard = (e) => {
    setAnchorEl(null)
    handleTaskDelete(e.target.id)
  }

  return (
    <div>
      <Card sx={{ height: 260, width: 300 }}>
        <CardHeader
          sx={{backgroundColor: headerColor}}
          title={data.taskName.length> 25?data.taskName.slice(0,19)+"...":data.taskName}
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
                {
                  teamList.data.map(item=> <MenuItem value={item.teamMemberName}>{item.teamMemberName}</MenuItem>)
                }
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

      {/* Open Prefill Task Modal */}
      <AddTaskModal taskModal={prefillTaskModal} closeTaskModal={closePrefillTaskModal} prefillMode={true} data={data}/>
    </div>
  )
}
