import { DataGrid, GridActionsCell, GridRowModes, GridActionsCellItem, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import { Box, Modal } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/DeleteOutlined"
import SaveIcon from "@mui/icons-material/Save"
import CancelIcon from "@mui/icons-material/Close"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function ProjectListModal({ projectListModal, closeProjectListModal, openProjectModal, data}) {
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


  const projectList = useSelector(state => state.projectStore)
  const [projectListData, setProjectListData] = useState(data.data)

  const handleCancelClick = () => {}

  const handleDeleteClick = (id) => {
    setProjectListData(projectListData.filter((row) => row.id !== id))
  }

  const handleEditClick = () => {}

  const handleSaveClick = () => {}

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
      width: 100,
      editable: false,
      align: "center",
    },
    {
      field: "projectCost",
      headerName: "Project Cost",
      type: "number",
      width: 100,
      editable: false,
      align: "center",
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
              onClick={()=>handleSaveClick(id)}
            />,
            <GridActionsCellItem icon={<CancelIcon />} label="Cancel" className="textPrimary" onClick={()=>handleCancelClick(id)} color="inherit" />,
          ]
        }

        return [
          <GridActionsCellItem icon={<EditIcon />} label="Edit" className="textPrimary" onClick={()=>handleEditClick(id)} color="inherit" />,
          <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={()=>handleDeleteClick(id)} color="inherit" />,
        ]
      },
    },
  ]

    useEffect(()=>{
      setProjectListData(data.data)
    },[data])

  return (
    <div>
      {" "}
      <Modal open={projectListModal} onClose={closeProjectListModal}>
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
