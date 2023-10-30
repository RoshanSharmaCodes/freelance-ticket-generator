import React from "react"
import { useState } from "react"
import "./Appbar.css"
import Paper from "@mui/material/Paper"
import {
  AppBar,
  Box,
  Button,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
} from "@mui/material"
import { useForm } from "react-hook-form"

export default function Appbar() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    maxWidth: "700px",
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

  const [analyticModal, setAnalyticModal] = useState(false)
  const [sendReportModal, setSendReportModal] = useState(false)
  
  const sendReportForm = useForm({
    defaultValues: {
      senderName: "",
      senderMessage: "",
    }
  })

  const { register: sendReportRegister, handleSubmit:handleSendReport, formState:sendReportFormState } = sendReportForm;
  const { errors } = sendReportFormState;

  const sendReportSubmit = () => {
    console.log("Report Send")
  }

  const openAnalytictModal = () => {
    setAnalyticModal(true)
  }

  const closeAnalyticModal = () => {
    setAnalyticModal(false)
  }

  const openSendReportModal = () => {
    setSendReportModal(true)
  }

  const closeSendReportModal = () => {
    setSendReportModal(false)
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }

  const rows = [
    createData("Creating Layout", "Done", 6.0, 24),
    createData("Login Form", "WIP", 9.0, 37),
    createData("Registration Form", "Done", 16.0, 24),
    createData("State Management", "Done", 3.7, 67),
    createData("Creating Modal", "Done", 16.0, 49),
  ]

  return (
    <div className="appbarContainer">
      <AppBar position="static">
        <Toolbar>
          <Button
            variant="outlined"
            className="standardBtn"
            onClick={openAnalytictModal}
            style={{ width: 170, height: 50, color: "white", borderColor: "white", marginRight:"10px" }}
          >
            Check Report
          </Button>
          <Button
            variant="outlined"
            onClick={openSendReportModal}
            style={{ width: 170, height: 50, color: "white", borderColor: "white",  marginRight:"10px" }}
          >
            Send Report
          </Button>
          <Button variant="outlined" style={{ width: 200, height: 50, color: "white", borderColor: "white" }}>
            Download Report
          </Button>
        </Toolbar>
      </AppBar>

      <Modal open={analyticModal} onClose={closeAnalyticModal}>
        <Box sx={style}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Task Name</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Hours</TableCell>
                  <TableCell align="center">Cost&nbsp;($)</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="totalAnalyticsDiv">
            <InputLabel htmlFor="project-total-task">Total Tasks :</InputLabel>
            <InputLabel htmlFor="project-total-hours">Total Hours :</InputLabel>
            <InputLabel htmlFor="project-name-input">Total Cost :</InputLabel>
          </div>
        </Box>
      </Modal>

      {/* Send Report */}
      <Modal open={sendReportModal} onClose={closeSendReportModal}>
        <form onSubmit={handleSendReport(sendReportSubmit)}>
        <Box sx={sendReportModalStyle}>
          <InputLabel id="demo-simple-select-label">Client's Name</InputLabel>
          <Select labelId="demo-simple-select-label" {...sendReportRegister("senderName")} error={!!errors.senderName} helperText={errors.senderName?.message} id="demo-simple-select" value="Harshil" label="Age">
            <MenuItem value={"Harshil"}>Harshil</MenuItem>
            <MenuItem value={"Vipul"}>Vipul</MenuItem>
            <MenuItem value={"Harman"}>Harman</MenuItem>
          </Select>
          <InputLabel htmlFor="project-name-input">Message</InputLabel>
          <TextField id="outlined-multiline-static" {...sendReportRegister("senderMessage", {required:"Please enter your message"})} error={!!errors.senderMessage} helperText={errors.senderMessage?.message} multiline rows={4} />
          <Button type="submit" variant="contained">Send</Button>
        </Box>
        </form>
      </Modal>
    </div>
  )
}
