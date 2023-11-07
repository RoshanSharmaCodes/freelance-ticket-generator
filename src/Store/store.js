import { configureStore } from "@reduxjs/toolkit";
import clientStore from "./clientStore/clientStore";
import projectStore from "./projectStore/projectStore";

const store = configureStore({
    reducer: {
        clientStore: clientStore,
        projectStore: projectStore
    }
})


export default store;