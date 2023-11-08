import { createSlice } from "@reduxjs/toolkit"

const initialState = { activeProject: "Project 51", activeTask: "" }

const taskSlice = createSlice({
  name: "taskStore",
  initialState,
  reducers: {
    changeActiveProject(state, action) {
      state["activeProject"] = action.payload
    },
    changeActiveTask(state, action) {
      state["activeTask"] = action.payload
    },
  },
})

export const { changeActiveTask, changeActiveProject} = taskSlice.actions
export default taskSlice.reducer