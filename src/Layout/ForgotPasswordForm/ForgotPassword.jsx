import React, { useState } from "react"
import "./ForgotPassword.css"
import { Avatar, Button, Chip, Divider, TextField } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { Label } from "@mui/icons-material"

export default function ForgotPasswordForm() {
  const navigate = useNavigate()
  const [elementState, setElementState] = useState(true)
  
  const handleSendOTP = () => {
    setElementState(false)
  }

  const handleVerifyOTP = () =>{

  }

  return (
    <div className="forgotContainer">
      <div className="forgotMainForm">
        <div className="forgotMain">
          <TextField id="standard-basic" label="Type Your Email" variant="outlined" style={{marginBottom: 10}} />
          <Button variant="contained" onClick={handleSendOTP} color="success" style={{marginBottom: 20}}> 
            Sent OTP
          </Button>
          <TextField id="standard-basic" label="OTP" variant="outlined"style={{marginBottom: 10}} disabled={elementState}/>
          <Button variant="contained" onClick={handleVerifyOTP} color="success" style={{marginBottom: 20}} disabled={elementState}> 
            Verify
          </Button>
        </div>
        <div className="forgotFooter">
          <span style={{ fontSize: 13, color: "grey", marginTop: "30px" }}>
            Go back to Login Page? <Link to="/">Click Here</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
