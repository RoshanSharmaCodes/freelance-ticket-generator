import React, { useState } from "react"
import "./Sidebar.css"
import { Avatar, Typography, Select, MenuItem, InputLabel, FormControl, Button } from "@mui/material"

export default function Sidebar() {
  var names = ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5"]
  const [projectName, setProjectName] = useState("Project 1")

  const handleProjectChange=(e)=>{
    console.log("EHl")
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
          <Select labelId="demo-multiple-name-label" id="demo-multiple-name" value={projectName} label="Project Name" style={{ minWidth: 200 }} onChange={(e)=>handleProjectChange(e)}>
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="sidebarOptions">
      <Button variant="contained" className="standardBtn" style={{width:200,marginBottom:10,height:50}}>Check Analytics</Button>
      <Button variant="contained" className="standardBtn" style={{width:200,marginBottom:10,height:50}}>Download Report</Button>
      <Button variant="contained" className="standardBtn" style={{width:200,marginBottom:10,height:50}}>Send Report</Button>
      <Button variant="contained" className="standardBtn" style={{width:200,marginBottom:10,height:50}}>Add Contacts</Button>
      </div>
    </div>
  )
}
