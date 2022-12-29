import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddTask from "../pages/AddTask/AddTask";
import CompletedTasks from "../pages/CompletedTasks/CompletedTasks";
import Login from "../pages/Login/Login";
import MyTasks from "../pages/MyTasks/MyTasks";
import Register from "../pages/Register/Register";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <AddTask />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addtask",
        element: <AddTask />,
      },
      {
        path: "/mytasks",
        element: <MyTasks />,
      },
      {
        path: "/completedtasks",
        element: <CompletedTasks />,
      },
    ],
  },
]);
