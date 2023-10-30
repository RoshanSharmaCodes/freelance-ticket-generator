import { DataGrid, GridActionsCell, GridRowModes, GridActionsCellItem, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import { Box, Modal} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/DeleteOutlined"
import SaveIcon from "@mui/icons-material/Save"
import CancelIcon from "@mui/icons-material/Close"
import React, { useState } from "react"

export default function ClientListModal({clientListModal,closeClientListModal,openClientListModal}) {
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
    maxWidth: "800px",
  }

  const rows = [
    { id: 1, clientName: "Snow", clientProject: "Project 1", clientEmail: "abc@gmail.com", clientEarning: 35 },
    { id: 2, clientName: "Lannister", clientProject: "Project 2", clientEmail: "abc@gmail.com", clientEarning: 42 },
    { id: 3, clientName: "Lannister", clientProject: "Project 3", clientEmail: "abc@gmail.com", clientEarning: 45 },
    { id: 4, clientName: "Stark", clientProject: "Project 4", clientEmail: "abc@gmail.com", clientEarning: 16 },
  ]

  const [clientListData, setClientListData] = useState(rows)

  const columns = [
    {
      field: "clientName",
      headerName: "Client's Name",
      width: 150,
      editable: true,
      align: "left",

    },
    {
      field: "clientProject",
      headerName: "Client's Project",
      width: 130,
      editable: false,
      align:"center"
    },
    {
      field: "clientEmail",
      headerName: "Client's Email",
      type: "email",
      width: 200,
      editable: false,
      align:"left"
    },
    {
      field: "clientEarning",
      headerName: "Earnings",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
      align:"center"
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      getActions: ({ id }) => {
        const isInEditMode = clientListData[id]?.mode === GridRowModes.Edit

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem icon={<CancelIcon />} label="Cancel" className="textPrimary" onClick={handleCancelClick(id)} color="inherit" />,
          ]
        }

        return [
          <GridActionsCellItem icon={<EditIcon />} label="Edit" className="textPrimary" onClick={handleEditClick(id)} color="inherit" />,
          <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={handleDeleteClick(id)} color="inherit" />,
        ]
      },
    },
  ]

  const handleCancelClick = () => {}

  const handleDeleteClick = () => {}

  const handleEditClick = () => {}

  const handleSaveClick = () => {}

  return (
    <div>
      {" "}
      <Modal open={clientListModal} onClose={closeClientListModal}>
        <Box sx={style}>
          <DataGrid
            rows={clientListData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Modal>
    </div>
  )
}
