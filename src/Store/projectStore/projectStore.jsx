import { createSlice } from "@reduxjs/toolkit";

const initialState = [{id:1, projectName:"Project 51", clientName:"Roshan"},{id:2, projectName:"Project 56", clientName:"Vikas"}]

const projectSlice = createSlice({
    name:"projectStore",
    initialState,
    reducers: {
        addProject(state,action){
            state.push(action.payload)            
        },
        removeProject(state,action){
            return state.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const {addProject, removeProject} = projectSlice.actions
export default projectSlice.reducer