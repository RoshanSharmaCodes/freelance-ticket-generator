import { createSlice } from "@reduxjs/toolkit";

let initialState = [{id:1, clientName:"Vikas", clientEmail:"vm66353@gmail.com"},{id:2, clientName:"Roshan", clientEmail:"roshan.rks2812000@gmail.com"}]

const clientSlice = createSlice({
    name:"clientStore",
    initialState,
    reducers: {
        addClient(state,action){
            return  [...state, action.payload]
        },
        removeClient(state,action){
            return state.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const {addClient, removeClient} = clientSlice.actions
export default clientSlice.reducer