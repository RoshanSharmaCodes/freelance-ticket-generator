import React from "react"
import "./RegisterForm.css"
import { Button, Avatar, TextField } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

export default function RegisterForm() {
  const navigate = useNavigate()
  const registerForm = useForm({
    defaultValues: {
      registerName: "",
      registerEmail: "",
      registerPassword: "",
      registerConfirmPassword: "",
    },
  })

  const { register: regRegister, handleSubmit: handleRegisterSummit, formState: registerFormState, watch } = registerForm
  const { errors } = registerFormState
  const handleRegisterForm = () => {
    navigate("/")
  }

  return (
    <form onSubmit={handleRegisterSummit(handleRegisterForm)}>
      <div className="RegisterContainer">
        <div className="RegisterFormPaper">
          <div className="RegisterMainDisplay"></div>
          <div className="RegisterMainForm">
            <div className="RegisterMain">
              <TextField
                id="standard-basic"
                {...regRegister("registerName", { required: "Please enter your name..." })}
                error={!!errors.registerName}
                helperText={errors.registerName?.message}
                label="Name"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                {...regRegister("registerEmail", { required: "Please enter your email..." })}
                error={!!errors.registerEmail}
                helperText={errors.registerEmail?.message}
                label="Email"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                {...regRegister("registerPass", { required: "Please enter your password..." })}
                error={!!errors.registerPass}
                helperText={errors.registerPass?.message}
                type="password"
                label="Password"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                {...regRegister("registerConfirmPass", { required: "Please confirm your password...", validate: (val)=> {if(watch("registerPass")!=val){return "Password is not same"}} })}
                error={!!errors.registerConfirmPass}
                helperText={errors.registerConfirmPass?.message}
                type="password"
                label="Confirm Password"
                variant="standard"
              />
              <Button variant="contained" type="submit" color="success">
                Register
              </Button>
            </div>
            <div className="RegisterFooter">
              <span style={{ fontSize: 13, color: "grey" }}>
                Already have an account ? <Link to="/">Click Here</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
