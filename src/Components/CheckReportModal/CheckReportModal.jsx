import React from "react"
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

export default function CheckReportModal({ analyticModal, closeAnalyticModal, data }) {
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
  return (
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
              {data.map((row) => (
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
  )
}
