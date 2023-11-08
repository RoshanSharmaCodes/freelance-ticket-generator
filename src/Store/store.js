import { configureStore } from "@reduxjs/toolkit";
import clientStore from "./clientStore/clientStore";
import projectStore from "./projectStore/projectStore";
import teamStore from "./teamStore/teamStore";
import taskStore from "./taskStore/taskStore";

const store = configureStore({
    reducer: {
        clientStore: clientStore,
        projectStore: projectStore,
        teamStore: teamStore,
        taskStore: taskStore,
    }
})


export default store;