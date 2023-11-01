import React from 'react'
import { InputLabel, Box, Button, Modal, TextField } from "@mui/material"
import { useForm } from "react-hook-form"

export default function AddClientModal({contactModal, closeContactModal}) {
    
    const clientsForm = useForm({
        defaultValues: {
          name: "",
          email: "",
        },
      })
    const { register: clientRegister, handleSubmit: handleClientSubmit, formState: clientFormState } = clientsForm
    const { errors } = clientFormState
    
    const submitClientsForm = (data) => {}

    const clientModalStyle = {
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
        height: "250px",
        justifyContent: "space-evenly",
      }
    

  return (
    <Modal open={contactModal} onClose={closeContactModal}>
    <form onSubmit={handleClientSubmit(submitClientsForm)}>
      <Box sx={clientModalStyle}>
        <InputLabel htmlFor="project-name-input">Client's Name</InputLabel>
        <TextField
          id="name"
          {...clientRegister("name", { required: "Please enter client's name" })}
          error={!!errors.projectName}
          helperText={errors.name?.message}
        />
        <InputLabel htmlFor="project-name-input">Client's Email</InputLabel>
        <TextField
          type="email"
          id="email"
          {...clientRegister("email", { required: "Please enter Email", pattern: "/^[^@ ]+@[^@ ]+.[^@ .]{2,}$/" })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <Button type="submit" variant="contained">
          Add Client
        </Button>
      </Box>
    </form>
  </Modal>
  )
}
