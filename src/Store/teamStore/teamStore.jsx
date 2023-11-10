import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [{id:1, teamMemberName:"Roshan", teamMemberEmail:"abc@gmail.com", teamMemberStatus: "Accepted", teamMemberRole: "Admin"},{id:2, teamMemberName:"Vikas", teamMemberEmail:"vikas@gl.co", teamMemberStatus: "Requested", teamMemberRole: "Editor"}]
}

const teamSlice = createSlice({
    name:"clientStore",
    initialState,
    reducers: {
        addTeam(state,action){
            state.data.push(action.payload)            
        },
        removeTeam(state,action){
            return state.data.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const {addTeam, removeTeam} = teamSlice.actions
export default teamSlice.reducer