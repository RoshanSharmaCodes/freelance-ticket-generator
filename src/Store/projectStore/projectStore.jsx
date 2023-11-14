import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  activeProject: "Project 51",
  activeTask: "1",
  data: [
    {
      id: 1,
      projectName: "Project 51",
      clientName: "Roshan",
      projectTasks: [
        {
          taskId: 1,
          taskName: "Dashboard UI",
          taskDescription: "Creating the Dashboard Layout Including Sidebar and Appbar",
          taskCreatedOn: "12/12/2023",
          taskStatus: "WIP",
          taskAssignedTo: "Sugam",
          taskDuration: "4",
          taskPerHourCost: "20",
        },
        {
          taskId: 2,
          taskName: "Appbar Options",
          taskDescription: "Revamping the UI of Sidebar and Appbar",
          taskCreatedOn: "10/12/2023",
          taskStatus: "Done",
          taskAssignedTo: "Vikas",
          taskDuration: "6",
          taskPerHourCost: "80",
        },
        {
          taskId: 3,
          taskName: "Create Login Page",
          taskDescription: "Creating Login Form and JWT Authentication",
          taskCreatedOn: "10/10/2023",
          taskStatus: "Not Started",
          taskAssignedTo: "Raj",
          taskDuration: "4",
          taskPerHourCost: "50",
        },
      ],
    },
    {
      id: 2,
      projectName: "Project 56",
      clientName: "Vikas",
      projectTasks: [
        {
          taskId: 1,
          taskName: "Registration Form UI",
          taskDescription: "Creating the Dashboard Layout Increment",
          taskCreatedOn: "12/12/2023",
          taskStatus: "WIP",
          taskAssignedTo: "Sugam",
          taskDuration: "4",
          taskPerHourCost: "20",
        },
        {
          taskId: 2,
          taskName: "JWT Authentication",
          taskDescription: "Revamping the UI of Sidebar and Appbar",
          taskCreatedOn: "10/12/2023",
          taskStatus: "Done",
          taskAssignedTo: "Vikas",
          taskDuration: "6",
          taskPerHourCost: "80",
        },
      ],
    },
    {
      id: 3,
      projectName: "Project 53",
      clientName: "Vikas",
      projectTasks: [
        {
          taskId: 1,
          taskName: "Taskboard UI",
          taskDescription: "Creating the Dashboard Layout Including Sidebar and Appbar",
          taskCreatedOn: "12/12/2023",
          taskStatus: "WIP",
          taskAssignedTo: "Sugam",
          taskDuration: "4",
          taskPerHourCost: "20",
        },
        {
          taskId: 2,
          taskName: "Registration Form Validation",
          taskDescription: "Revamping the UI of Sidebar and Appbar",
          taskCreatedOn: "10/12/2023",
          taskStatus: "Done",
          taskAssignedTo: "Vikas",
          taskDuration: "6",
          taskPerHourCost: "80",
        },
      ],
    },
  ],
}

const projectSlice = createSlice({
  name: "projectStore",
  initialState,
  reducers: {
    addProject(state, action) {
      state.data.push(action.payload)
    },
    removeProject(state, action) {
      return state.data.filter((item) => item.id !== action.payload.id)
    },
    addTaskToProject(state, action) {
      const selectedProject = state.data.find((item) => item.projectName === state["activeProject"])
      action.payload.taskId = selectedProject.projectTasks.length + 1
      console.log("Action Payload: ", action.payload)
      selectedProject.projectTasks.push(action.payload)
    },
    changeActiveProject(state, action) {
      state["activeProject"] = action.payload
    },
  },
})

export const { addProject, removeProject, addTaskToProject, changeActiveProject } = projectSlice.actions
export default projectSlice.reducer
