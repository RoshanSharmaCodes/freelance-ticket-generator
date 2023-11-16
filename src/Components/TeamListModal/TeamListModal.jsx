import { DataGrid, GridActionsCell, GridRowModes, GridActionsCellItem, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import { Box, Modal} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/DeleteOutlined"
import SaveIcon from "@mui/icons-material/Save"
import CancelIcon from "@mui/icons-material/Close"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTeam } from "../../Store/teamStore/teamStore"

export default function TeamListModal({TeamListModal,closeTeamListModal,openTeamModal}) {
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
  const dispatch = useDispatch()
  const teamList = useSelector(state => state.teamStore)
  const [teamListData, setTeamListData] = useState(teamList.data)

  const handleCancelClick = () => {}

  const handleDeleteClick = (id) => {
    setTeamListData(teamListData.filter((row) => row.id !== id));
  }

  const handleEditClick = () => {}

  const handleSaveClick = () => {}

  const columns = [
    {
      field: "teamMemberName",
      headerName: "Member Name",
      width: 150,
      editable: true,
    },
    {
      field: "teamMemberEmail",
      headerName: "Email Id",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
        field: "teamMemberRole",
        headerName: "Role",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 100,
      },
      {
        field: "teamMemberStatus",
        headerName: "Status",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 100,
      },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      getActions: ({ id }) => {
        const isInEditMode = teamListData[id]?.mode === GridRowModes.Edit

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
    dispatch(fetchTeam())
    setTeamListData(teamList.data)
  },[teamList.data])

  return (
    <div>
      {" "}
      <Modal open={TeamListModal} onClose={closeTeamListModal}>
        <Box sx={style}>
          <DataGrid
            rows={teamListData}
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
