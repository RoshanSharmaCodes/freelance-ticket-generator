import React, { useRef, useState } from "react"
import { Box, Button, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser';
import { useSelector } from "react-redux";

export default function SendReportModal({ sendReportModal, closeSendReportModal }) {

  const clientList = useSelector(state => state.clientStore)
  const [senderNameState, setSenderName] = useState(clientList[0].clientName)
  const sendReportFormRef = useRef()

  const handleSenderNameChange = (e)=> {
    setSenderName(e.target.value)
  }

  const sendReportForm = useForm({
    defaultValues: {
      senderName: senderNameState,
      senderMessage: "",
    },
  })

  const { register: sendReportRegister, handleSubmit: handleSendReport, formState: sendReportFormState } = sendReportForm
  const { errors } = sendReportFormState


  const sendReportSubmit = (e) => {
    var EmailInfo = {
      senderName: e.senderName,
      senderEmail: clientList.find(item=> item.clientName === e.senderName).clientEmail,
      senderMessage: e.senderMessage
    };
    emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, EmailInfo, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    })
  }
  const sendReportModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    height: "400px",
    justifyContent: "space-evenly",
  }
  return (
    <Modal open={sendReportModal} onClose={closeSendReportModal}>
      <form ref={sendReportFormRef} onSubmit={handleSendReport(sendReportSubmit)}>
        <Box sx={sendReportModalStyle}>
          <InputLabel>Client's Name</InputLabel>
          <Select
            {...sendReportRegister("senderName")}
            error={!!errors.senderName}
            helperText={errors.senderName?.message}
            value={senderNameState}
            onChange={handleSenderNameChange}
            name="senderName"
          > 
            {
              clientList.map(item=> (<MenuItem value={item.clientName}>{item.clientName}</MenuItem>))
            } 
          </Select>
          <InputLabel htmlFor="project-name-input">Message</InputLabel>
          <TextField
            id="outlined-multiline-static"
            {...sendReportRegister("senderMessage", { required: "Please enter your message" })}
            error={!!errors.senderMessage}
            helperText={errors.senderMessage?.message}
            multiline
            rows={4}
            name="senderMessage"
          />
          <Button type="submit" variant="contained">
            Send
          </Button>
        </Box>
      </form>
    </Modal>
  )
}
