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
    { id: 1, projectName: "Snow", clientName: "Jon", projectCost: 20, projectHours: 35 },
    { id: 2, projectName: "Lannister", clientName: "Cersei", projectCost: 20, projectHours: 42 },
    { id: 3, projectName: "Lannister", clientName: "Jaime", projectCost: 20, projectHours: 45 },
    { id: 4, projectName: "Stark", clientName: "Arya", projectCost: 20, projectHours: 16 },
  ]

  const [projectListData, setProjectListData] = useState(rows)

  const columns = [
    { field: "id", headerName: "Project ID", width: 90 },
    {
      field: "projectName",
      headerName: "Project Name",
      width: 150,
      editable: true,
    },
    {
      field: "projectHours",
      headerName: "Project Hours",
      width: 150,
      editable: false,
    },
    {
      field: "projectCost",
      headerName: "Project Cost",
      type: "number",
      width: 110,
      editable: false,
    },
    {
      field: "clientName",
      headerName: "Client Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      getActions: ({ id }) => {
        const isInEditMode = projectListData[id]?.mode === GridRowModes.Edit

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
            rows={projectListData}
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
