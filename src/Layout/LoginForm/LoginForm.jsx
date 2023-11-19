import React from "react"
import "./LoginForm.css"
import { Avatar, Button, Chip, Divider, TextField } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

export default function LoginForm() {
  const navigate = useNavigate()
  const loginForm = useForm({
    defaultValues: {
      loginEmail: "",
      loginPass: "",
    }
  })

  const { register: loginRegister, handleSubmit: handleLogin, formState: loginFormState } = loginForm
  const { errors } = loginFormState

  const handleLoginForm = () => {
    console.log("Logged In")
    navigate("/Dashboard")
  }

  return (
    <form onSubmit={handleLogin(handleLoginForm)}>
      <div className="loginContainer">
        <div className="loginMainForm">
          <div className="loginHead">
            <Avatar style={{ width: 80, height: 80 }} />
            <span style={{ color: "grey", marginTop: 10 }}>Simon, Welcome You!</span>
          </div>
          <div className="loginMain">
            <TextField
              id="standard-basic"
              {...loginRegister("loginEmail", { required: "Please enter username" })}
              error={!!errors.loginEmail}
              helperText={errors.loginEmail?.message}
              label="Email"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              {...loginRegister("loginPass", { required: "Please enter password" })}
              error={!!errors.loginPass}
              helperText={errors.loginPass?.message}
              type="password"
              label="Password"
              variant="standard"
            />
            <Button variant="contained" type="submit" color="success">
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
            <br />
            <span style={{ fontSize: 13, color: "grey" }}>
              Forgot Password? <Link to="/ForgotPassword">Click Here</Link>
            </span>
          </div>
        </div>
      </div>
    </form>
  )
}
