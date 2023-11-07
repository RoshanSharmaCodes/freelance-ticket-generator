import { configureStore } from "@reduxjs/toolkit";
import clientStore from "./clientStore/clientStore";

const store = configureStore({
    reducer: {
        clientStore: clientStore
    }
})


export default store;