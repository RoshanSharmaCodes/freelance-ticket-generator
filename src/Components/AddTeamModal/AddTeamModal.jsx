import React from "react"
import { Box, Button, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { addTeam } from "../../Store/teamStore/teamStore"
import { useDispatch } from "react-redux"

export default function AddTeamModal({ addTeamModal, closeAddTeamModal }) {
  const [addTeamAccess, setAddTeamAccess] = useState("Viewer")
  const dispatch = useDispatch()
  const addTeamForm = useForm({
    defaultValues: {
      teamMemberEmail: "",
      teamMemberName: "",
      teamMemberRole: "",
    },
  })
  const { register: addTeamRegister, handleSubmit: handleAddTeam, formState: addTeamFormState } = addTeamForm
  const { errors } = addTeamFormState

  const handleAccessChange = (e) => {
    setAddTeamAccess(e.target.value)
  }

  const sendInviteRequrest = (data) => {
    dispatch(addTeam(data))
    closeAddTeamModal()
  }

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
    height: "350px",
    justifyContent: "space-evenly",
  }

  return (
    <Modal open={addTeamModal} onClose={closeAddTeamModal}>
      <form onSubmit={handleAddTeam(sendInviteRequrest)}>
        <Box sx={addTeamModalStyle}>
          <InputLabel>Grant Access As:</InputLabel>
          <Select onChange={handleAccessChange}  {...addTeamRegister("teamMemberRole", { required: "Please enter role" })}
            error={!!errors.teamMemberRole}
            helperText={errors.teamMemberRole?.message} value={addTeamAccess}>
            <MenuItem value={"Admin"}>Admin</MenuItem>
            <MenuItem value={"Editor"}>Editor</MenuItem>
            <MenuItem value={"Viewer"}>Viewer</MenuItem>
          </Select>
          <InputLabel htmlFor="project-name-input">Name:</InputLabel>
          <TextField
            id="outlined-multiline-static"
            type="text"
            {...addTeamRegister("teamMemberName", { required: "Please enter name" })}
            error={!!errors.teamMemberName}
            helperText={errors.teamMemberName?.message}
          />
          <InputLabel htmlFor="project-name-input">Email:</InputLabel>
          <TextField
            id="outlined-multiline-static"
            type="email"
            {...addTeamRegister("teamMemberEmail", { required: "Please enter email" })}
            error={!!errors.teamMemberEmail}
            helperText={errors.teamMemberEmail?.message}
          />
          <Button type="submit" variant="contained">
            Send Invite
          </Button>
        </Box>
      </form>
    </Modal>
  )
}
