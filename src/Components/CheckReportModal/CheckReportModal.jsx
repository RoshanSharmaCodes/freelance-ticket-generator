import React, {useState, useEffect } from "react"
import Paper from "@mui/material/Paper"
import { Box, InputLabel, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@mui/material"
import { useSelector } from "react-redux"


export default function CheckReportModal({ analyticModal, closeAnalyticModal}) {

  const projectList = useSelector(state => state.projectStore)
  const activeData = useSelector(state => state.projectStore)
  const [data, setTaskData] = useState(projectList.data[0].projectTasks)

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

  useEffect(()=>{
    const data = projectList.data.find((data) => data.projectName === activeData["activeProject"])
    setTaskData(data.projectTasks)
  },[activeData])

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
                    {row.taskName}
                  </TableCell>
                  <TableCell align="center">{row.taskStatus}</TableCell>
                  <TableCell align="center">{row.taskDuration}</TableCell>
                  <TableCell align="center">{row.taskPerHourCost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="totalAnalyticsDiv">
          <InputLabel htmlFor="project-total-task">Total Tasks : <b>{data.length}</b></InputLabel>
          <InputLabel htmlFor="project-total-hours">Total Hours : <b>{data.reduce((total, task) => total + parseInt(task.taskDuration), 0)}H</b></InputLabel>
          <InputLabel htmlFor="project-name-input">Total Cost : <b> ${data.reduce((total, task) => total + parseInt(task.taskPerHourCost), 0)}</b></InputLabel>
        </div>
      </Box>
    </Modal>
  )
}
