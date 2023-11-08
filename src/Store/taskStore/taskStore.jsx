import { createSlice } from "@reduxjs/toolkit";


const initialState = {activeProject: "Project 51"}

const teamSlice = createSlice({
    name:"taskStore",
    initialState,
    reducers: {
        changeActiveTask(state,action){
          state["activeProject"] = action.payload
        },
    }
})

export const {changeActiveTask} = teamSlice.actions
export default teamSlice.reducer