import React from "react"
import "./LoginForm.css"
import { Avatar, Button, Chip, Divider, TextField } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

export default function LoginForm() {
  const navigate = useNavigate()
  const handleLoginForm = () => {
    navigate("/Dashboard")
  }

  return (
    <div className="loginContainer">
      <div className="loginMainForm">
        <div className="loginHead">
          <Avatar style={{ width: 80, height: 80 }} />
          <span style={{ color: "grey", marginTop: 10 }}>Simon, Welcome You!</span>
        </div>
        <div className="loginMain">
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" type="password" label="Password" variant="standard" />
          <Button variant="contained" onClick={handleLoginForm} color="success">
            Login
          </Button>
        </div>
        <div className="loginOAuth">
          <Divider style={{ width: "100%" }}>
            <Chip label="OR" />
          </Divider>
          <div className="loginOAuthIcons">
            <Avatar src="assets/googleauth.png" />
            <Avatar src="assets/facebookauth.png" />
            <Avatar src="assets/githubauth.png" />
          </div>
        </div>
        <div className="loginFooter">
          <span style={{ fontSize: 13, color: "grey" }}>
            Don't have an account? <Link to="/Register">Click Here</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
