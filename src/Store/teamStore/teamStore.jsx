import { createSlice } from "@reduxjs/toolkit";

const initialState = [{id:1, teamMemberName:"Roshan", teamMemberEmail:"abc@gmail.com", teamMemberStatus: "Accepted", teamMemberRole: "Admin"},{id:2, teamMemberName:"Vikas", teamMemberEmail:"vikas@gl.co", teamMemberStatus: "Requested", teamMemberRole: "Editor"}]

const teamSlice = createSlice({
    name:"clientStore",
    initialState,
    reducers: {
        addTeam(state,action){
            state.push(action.payload)            
        },
        removeTeam(state,action){
            return state.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const {addTeam, removeTeam} = teamSlice.actions
export default teamSlice.reducer