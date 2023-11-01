import React, { useState } from "react"
import { Box, Button, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material"
import { useForm } from "react-hook-form"

export default function SendReportModal({ sendReportModal, closeSendReportModal }) {

  const [senderNameState, setSenderName] = useState("Harshil")

  const handleSenderNameChange = (e)=> {
    setSenderName(e.target.value)
  }

  const sendReportForm = useForm({
    defaultValues: {
      senderName: "",
      senderMessage: "",
    },
  })

  const { register: sendReportRegister, handleSubmit: handleSendReport, formState: sendReportFormState } = sendReportForm
  const { errors } = sendReportFormState

  const sendReportSubmit = () => {
    console.log("Report Send")
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
      <form onSubmit={handleSendReport(sendReportSubmit)}>
        <Box sx={sendReportModalStyle}>
          <InputLabel>Client's Name</InputLabel>
          <Select
            {...sendReportRegister("senderName")}
            error={!!errors.senderName}
            helperText={errors.senderName?.message}
            value={senderNameState}
            onChange={handleSenderNameChange}
          >
            <MenuItem value={"Harshil"}>Harshil</MenuItem>
            <MenuItem value={"Vipul"}>Vipul</MenuItem>
            <MenuItem value={"Harman"}>Harman</MenuItem>
          </Select>
          <InputLabel htmlFor="project-name-input">Message</InputLabel>
          <TextField
            id="outlined-multiline-static"
            {...sendReportRegister("senderMessage", { required: "Please enter your message" })}
            error={!!errors.senderMessage}
            helperText={errors.senderMessage?.message}
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained">
            Send
          </Button>
        </Box>
      </form>
    </Modal>
  )
}
