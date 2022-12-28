import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddTask from "../pages/AddTask/AddTask";
import CompletedTasks from "../pages/CompletedTasks/CompletedTasks";
import MyTasks from "../pages/MyTasks/MyTasks";

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
