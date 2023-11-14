import React from "react"
import "./RegisterForm.css"
import { Button, Avatar, TextField } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

export default function RegisterForm() {
  const navigate = useNavigate()
  const handleRegisterForm = () =>{
    navigate("/")
  }


  return (
    <div className="RegisterContainer">
      <div className="RegisterFormPaper">
        <div className="RegisterMainDisplay"></div>
        <div className="RegisterMainForm">
          <div className="RegisterMain">
            <TextField id="standard-basic" label="Name" variant="standard" />
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField id="standard-basic" type="password" label="Password" variant="standard" />
            <TextField id="standard-basic" type="password" label="Confirm Password" variant="standard" />
            <Button variant="contained" onClick={handleRegisterForm} color="success">
              Register
            </Button>
          </div>
          <div className="RegisterFooter">
            <span style={{ fontSize: 13, color: "grey" }}>
              Already have an account ? <Link to="/">Login</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
