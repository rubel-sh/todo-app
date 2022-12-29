import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddTask from "../pages/AddTask/AddTask";
import CompletedTasks from "../pages/CompletedTasks/CompletedTasks";
import Login from "../pages/Login/Login";
import MyTasks from "../pages/MyTasks/MyTasks";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/mytasks",
        element: (
          <PrivateRoute>
            <MyTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "/completedtasks",
        element: (
          <PrivateRoute>
            <CompletedTasks />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
