var clientList = [
    {
        id: 1,
        clientName: "Roshan",
        clientEmail:"roshan@gmail.com",
        clientProject: [],
        clientEarning:"340",
    },
    {
        id: 2,
        clientName: "Vikas",
        clientEmail:"vikas@gmail.com",
        clientProject: [],
        clientEarning:"1500",
    },
    {
        id: 3,
        clientName: "Raj",
        clientEmail:"raj@gmail.com",
        clientProject: [],
        clientEarning:"1700",
    },
]

var TaskCardData = [
    {
        taskId:1,
        taskName: "Dashboard UI",
        taskDescription: "Creating the Dashboard Layout Including Sidebar and Appbar",
        taskCreatedOn: "12/12/2023",
        taskStatus: "WIP",
        taskAssignedTo: "Sugam",
        taskDuration:"4",
        taskPerHourCost:"20"
    },
    {
        taskId:2,
        taskName: "Appbar Options",
        taskDescription: "Revamping the UI of Sidebar and Appbar",
        taskCreatedOn: "10/12/2023",
        taskStatus: "Done",
        taskAssignedTo: "Vikas",
        taskDuration:"6",
        taskPerHourCost:"80"
    },
    {
        taskId:3,
        taskName: "Create Login Page",
        taskDescription: "Creating Login Form and JWT Authentication",
        taskCreatedOn: "10/10/2023",
        taskStatus: "Not Started",
        taskAssignedTo: "Raj",
        taskDuration:"4",
        taskPerHourCost:"50"
    },
]

module.exports = {TaskCardData,clientList}