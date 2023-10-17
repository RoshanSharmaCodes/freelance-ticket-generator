import React from "react"
import "./TaskBoard.css"
import { Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

export default function TaskBoard() {
  return (
    <div className="taskboardContainer">
      <Fab color="primary" aria-label="add" sx={{position:"absolute",right:30,bottom:80}}>
        <AddIcon />
      </Fab>
    </div>
  )
}
