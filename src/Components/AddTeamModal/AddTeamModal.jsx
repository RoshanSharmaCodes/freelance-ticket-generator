import React from "react"
import { Box, Button, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function AddTeamModal({ addTeamModal, closeAddTeamModal }) {
  const [addTeamAccess, setAddTeamAccess] = useState("Viewer")
  const sendReportForm = useForm({
    defaultValues: {
      senderName: "",
      senderMessage: "",
    },
  })
  const { register: sendReportRegister, handleSubmit: handleSendReport, formState: sendReportFormState } = sendReportForm
  const { errors } = sendReportFormState

  const handleAccessChange = (e) => {
    setAddTeamAccess(e.target.value)
  }

  const sendInviteRequrest = () => {}

  const addTeamModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
    display: "flex",
    flexDirection: "column",
    height: "250px",
    justifyContent: "space-evenly",
  }

  return (
    <Modal open={addTeamModal} onClose={closeAddTeamModal}>
      <form onSubmit={handleSendReport(sendInviteRequrest)}>
        <Box sx={addTeamModalStyle}>
          <InputLabel>Grant Access As:</InputLabel>
          <Select onChange={handleAccessChange} value={addTeamAccess}>
            <MenuItem value={"Admin"}>Admin</MenuItem>
            <MenuItem value={"Editor"}>Editor</MenuItem>
            <MenuItem value={"Viewer"}>Viewer</MenuItem>
          </Select>
          <InputLabel htmlFor="project-name-input">Email:</InputLabel>
          <TextField
            id="outlined-multiline-static"
            type="email"
            {...sendReportRegister("senderMessage", { required: "Please enter your message" })}
            error={!!errors.senderMessage}
            helperText={errors.senderMessage?.message}
          />
          <Button type="submit" variant="contained">
            Send Invite
          </Button>
        </Box>
      </form>
    </Modal>
  )
}
