import React from "react"
import "./ConfirmPassword.css"
import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function ConfirmPasswordForm() {
  const navigate = useNavigate()
  const handleLoginForm = () => {
    navigate("/")
  }

  return (
    <div className="confirmPasswordContainer">
      <div className="confirmPasswordMainForm">
        <div className="confirmPasswordMain">
          <TextField id="standard-basic" type="password" label="New Password" variant="outlined" />
          <TextField id="standard-basic" type="password" label="Confirm Password" variant="outlined" />
          <Button variant="contained" onClick={handleLoginForm} color="success" style={{marginBottom: 20}}> 
            Change Password
          </Button>
        </div>
      </div>
    </div>
  )
}
