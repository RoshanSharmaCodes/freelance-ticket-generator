import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: []
}

export const fetchTeam = createAsyncThunk("/fetchTeam",async ()=>{
    let response = await fetch("http://localhost:5000/team/teamDetails",{headers: {"content-type": "application/json"}})
    response = await response.json()
    return response.data
})

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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTeam.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchTeam.fulfilled, (state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(fetchTeam.rejected, (state)=>{
            state.loading = false
        })
    }
})

export const {addTeam, removeTeam} = teamSlice.actions
export default teamSlice.reducer