import React from "react"
import { useState } from "react"
import "./Appbar.css"
import { AppBar, Button, Toolbar } from "@mui/material"
import AddTeamModal from "../../Components/AddTeamModal/AddTeamModal"
import SendReportModal from "../../Components/SendReportModal/SendReportModal"
import CheckReportModal from "../../Components/CheckReportModal/CheckReportModal"

export default function Appbar() {
  const [analyticModal, setAnalyticModal] = useState(false)
  const [sendReportModal, setSendReportModal] = useState(false)
  const [addTeamModal, setAddTeamModal] = useState(false)

  const openAnalytictModal = () => {
    setAnalyticModal(true)
  }

  const closeAnalyticModal = () => {
    setAnalyticModal(false)
  }

  const openAddTeamModal = () => {
    setAddTeamModal(true)
  }

  const closeAddTeamModal = () => {
    setAddTeamModal(false)
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
      <AppBar style={{ position: "fixed", width: "100%", maxWidth: 1092, right: 50, top: 30, borderRadius: 10 }}>
        <Toolbar>
          <Button
            variant="outlined"
            className="standardBtn"
            onClick={openAnalytictModal}
            style={{ width: 150, height: 50, color: "white", borderColor: "white", marginRight: "10px" }}
          >
            Check Report
          </Button>
          <Button
            variant="outlined"
            onClick={openSendReportModal}
            style={{ width: 150, height: 50, color: "white", borderColor: "white", marginRight: "10px" }}
          >
            Send Report
          </Button>
          <Button variant="outlined" style={{ width: 190, height: 50, color: "white", borderColor: "white", marginRight: "10px" }}>
            Download Report
          </Button>
          <Button
            variant="outlined"
            onClick={openAddTeamModal}
            style={{ width: 150, height: 50, color: "white", borderColor: "white", marginRight: "10px" }}
          >
            Add Team
          </Button>
        </Toolbar>
      </AppBar>

      {/* Check Report */}
      <CheckReportModal data={rows} analyticModal={analyticModal} closeAnalyticModal={closeAnalyticModal} />

      {/* Send Report */}
      <SendReportModal sendReportModal={sendReportModal} closeSendReportModal={closeSendReportModal} />

      {/* Add Team */}
      <AddTeamModal addTeamModal={addTeamModal} closeAddTeamModal={closeAddTeamModal} />
    </div>
  )
}
