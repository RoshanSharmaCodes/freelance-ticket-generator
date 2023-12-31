import React, { useEffect, useState } from "react"
import "./ForgotPassword.css"
import { Avatar, Button, Chip, Divider, TextField } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { Label } from "@mui/icons-material"

export default function ForgotPasswordForm() {
  const navigate = useNavigate()
  const [elementState, setElementState] = useState(true)
  const [timer, setTimer] = useState(60)
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [verifyOtp, setVerifyOtp] = useState("")
  
  const handleSendOTP = () => {
    setElementState(false)
    document.getElementsByClassName("resendOTPDiv")[0].style.display = "block"
    let tempOtp = Math.floor(100000 + Math.random() * 900000)
    console.log(JSON.stringify(tempOtp))
    setOtp(tempOtp)
  }


  const handleVerifyOTP = () =>{
    if(otp == verifyOtp){
      navigate("/ConfirmPassword")
    }else{
      console.log(otp)
      console.log(verifyOtp)
     alert("Wrong Password")
    }
  }

  const handleResendOTP = () => {
    setTimer(60)
  }

  useEffect(()=>{
    let timeInterval = setTimeout(()=>{
      if(timer<=0) return
      setTimer(timer-1)
    },1000)
    return ()=> clearInterval(timeInterval)
  },[timer])

  useEffect(()=>{
    console.log(email)
  },[email])

  return (
    <div className="forgotContainer">
      <div className="forgotMainForm">
        <div className="forgotMain">
          <TextField id="standard-basic" label="Type Your Email" variant="outlined" style={{marginBottom: 10}} onChange={(e)=>setEmail(e.target.value)}/>
          <Button variant="contained" onClick={handleSendOTP} color="success"> 
            Sent OTP
          </Button>
          <div className="resendOTPDiv" style={{marginBottom: 20, display:"none"}}>
          {timer<=0? <span onClick={handleResendOTP} style={{ fontSize: 13, color: "#199be6", marginTop: "30px", cursor: "pointer"}}>
            Resend OTP
          </span>: <span style={{ fontSize: 13, color: "grey", marginTop: "30px" }}>
            Resend OTP? ({timer})
          </span>}
        </div>
          <TextField id="standard-basic" label="OTP" variant="outlined"style={{marginBottom: 10}} disabled={elementState} onChange={(e)=>setVerifyOtp(e.target.value)}/>
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
