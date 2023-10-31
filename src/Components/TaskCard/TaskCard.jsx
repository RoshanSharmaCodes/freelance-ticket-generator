import React from "react"
import "./TaskCard.css"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import { Delete, Edit } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import TextField from '@mui/material/TextField';

export default function TaskCard() {
  const handleTaskStatusChange = () => {}

  return (
    <div>
      <Card sx={{ height: 250, width: 300 }}>
        <CardHeader
          sx={{ fontSize: 15, backgroundColor: "#e0e0e0" }}
          title={"Dashboard UI"}
          subheader={"Created On: 12/04/2023"}
          action={
            <IconButton>
              {" "}
              <Delete />{" "}
            </IconButton>
          }
        />
        <CardContent>          
          <span >Will have to create a Dashboard Component</span>
        <InputLabel id="demo-simple-select-label">Task Status:</InputLabel>
          <Select id="demo-simple-select" value={"Not Started"} onChange={handleTaskStatusChange} style={{ height: 35 }}>
            <MenuItem value={"Not Started"}>Not Started</MenuItem>
            <MenuItem value={"WIP"}>WIP</MenuItem>
            <MenuItem value={"Done"}>Done</MenuItem>
            <MenuItem value={"Problem Occured"}>Problem Occured</MenuItem>
          </Select>
        </CardContent>
      </Card>
    </div>
  )
}
