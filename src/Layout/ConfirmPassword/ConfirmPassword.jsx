import React, { useState } from "react"
import "./ConfirmPassword.css"
import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function ConfirmPasswordForm() {
  const navigate = useNavigate()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const handleConfirmPassword = () => {
    if((password === confirmPassword)&&password!=""){
      navigate("/")
    }else{
      alert("Wrong Password")
    }
  }

  return (
    <div className="confirmPasswordContainer">
      <div className="confirmPasswordMainForm">
        <div className="confirmPasswordMain">
          <TextField id="standard-basic" onChange={(e)=>setPassword(e.target.value)} type="password" label="New Password" variant="outlined" />
          <TextField id="standard-basic" onChange={(e)=>setConfirmPassword(e.target.value)} type="password" label="Confirm Password" variant="outlined" />
          <Button variant="contained" onClick={handleConfirmPassword} color="success" style={{marginBottom: 20}}> 
            Change Password
          </Button>
        </div>
      </div>
    </div>
  )
}
