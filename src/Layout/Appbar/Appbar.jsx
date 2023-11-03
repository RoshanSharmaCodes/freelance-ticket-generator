import React from "react"
import { useState } from "react"
import "./Appbar.css"
import { AppBar, Button, Toolbar } from "@mui/material"
import AddTeamModal from "../../Components/AddTeamModal/AddTeamModal"
import SendReportModal from "../../Components/SendReportModal/SendReportModal"
import CheckReportModal from "../../Components/CheckReportModal/CheckReportModal"
import { TaskCardData } from "../../JSON/FakeData"

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

  const downloadReport = () => {
    
  }

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
          <Button onClick={downloadReport} variant="outlined" style={{ width: 190, height: 50, color: "white", borderColor: "white", marginRight: "10px" }}>
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
      <CheckReportModal data={TaskCardData} analyticModal={analyticModal} closeAnalyticModal={closeAnalyticModal} />

      {/* Send Report */}
      <SendReportModal sendReportModal={sendReportModal} closeSendReportModal={closeSendReportModal} />

      {/* Add Team */}
      <AddTeamModal addTeamModal={addTeamModal} closeAddTeamModal={closeAddTeamModal} />
    </div>
  )
}
