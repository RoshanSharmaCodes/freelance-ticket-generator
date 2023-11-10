import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
    name:"clientStore",
    initialState: {
        data: [{id:1, clientName:"Vikas", clientEmail:"vm66353@gmail.com"},{id:2, clientName:"Roshan", clientEmail:"roshan.rks2812000@gmail.com"}]
    },
    reducers: {
        addClient: (state,action)=>{
            state.data.push(action.payload)
        },
        removeClient: (state,action)=>{
            return state.data.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const {addClient, removeClient} = clientSlice.actions
export default clientSlice.reducer