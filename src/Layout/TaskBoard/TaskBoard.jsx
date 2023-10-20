import React from "react"
import "./TaskBoard.css"
import { AppBar, Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import Appbar from "../Appbar/Appbar";

export default function TaskBoard() {
  return (
    <div className="taskboardContainer">
      <Appbar/>

      
      <Fab color="primary" aria-label="add" sx={{position:"absolute",right:30,bottom:80}}>
        <AddIcon />
      </Fab>
    </div>
  )
}
