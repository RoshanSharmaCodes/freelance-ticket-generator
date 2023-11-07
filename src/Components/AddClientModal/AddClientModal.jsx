import React from 'react'
import { InputLabel, Box, Button, Modal, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { addClient } from '../../Store/clientStore/clientStore'
export default function AddClientModal({contactModal, closeContactModal}) {
    
  const clientList = useSelector(state => state.clientStore)
    const clientsForm = useForm({
        defaultValues: {
          id: clientList.length + 1,
          clientName: "",
          clientEmail: "",
        },
      })
    const { register: clientRegister, handleSubmit: handleClientSubmit, formState: clientFormState } = clientsForm
    const { errors } = clientFormState
    const clientDispatch = useDispatch()
    
    const submitClientsForm = (data) => {
      console.log("Client Added",data)
      clientDispatch(addClient(data))
      closeContactModal()
    }

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
          id="clientName"
          {...clientRegister("clientName", { required: "Please enter client's name" })}
          error={!!errors.projectName}
          helperText={errors.clientName?.message}
        />
        <InputLabel htmlFor="project-name-input">Client's Email</InputLabel>
        <TextField
          type="clientEmail"
          id="clientEmail"
          {...clientRegister("clientEmail", { required: "Please enter Email", pattern: "/^[^@ ]+@[^@ ]+.[^@ .]{2,}$/" })}
          error={!!errors.clientEmail}
          helperText={errors.clientEmail?.message}
        />
        <Button type="submit" variant="contained">
          Add Client
        </Button>
      </Box>
    </form>
  </Modal>
  )
}
