import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardHeading from "../../components/CardHeading";
import LoadingSpinner from "../../components/LoadingSpinner";
import MyTaskCard from "../../components/MyTaskCard";
import Swal from "sweetalert2";
import {
  completeTodo,
  deleteTodo,
  fetchTodos,
  STATUSES,
} from "../../store/todoSlice";
import { useNavigate } from "react-router-dom";

const MyTasks = () => {
  // const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();
  const { data: tasks, status } = useSelector((state) => state.todos);
  const navigate = useNavigate();

  // Handlers
  const handleDelete = ({ _id, title }) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Delete ${title}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3d84c7",
      cancelButtonColor: "#D9465A",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Dispatch Delete
        dispatch(deleteTodo(_id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handleComplete = (todo) => {
    console.log(todo);
    Swal.fire({
      title: "Are you sure?",
      text: `Completed ${todo.title}?`,
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3dc73d",
      cancelButtonColor: "#D9465A",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        // Dispatch Delete
        dispatch(completeTodo(todo));
        Swal.fire(
          "Completed!",
          "Your todo has been marked as completed.",
          "success"
        );
        // After successfully changing status to completed foto completedtasks route
        navigate("/completedtasks");
      }
    });
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (status === STATUSES.LOADING) {
    return <LoadingSpinner className="mx-auto mt-5 " />;
  }
  // Filter only My Tasks {status:"pending"}
  const myTasks = tasks.filter((task) => task.status === "pending");

  // If no tasks found then show empty message
  if (!myTasks.length) {
    return (
      <h1 className="text-2xl text-secondaryColor text-center h-screen">
        No Tasks found, Please Add Task
      </h1>
    );
  }

  return (
    <div className=" p-2 md:p-5 lg:p-10 bg-white rounded-md ">
      <CardHeading>My Tasks</CardHeading>
      {/* each card */}
      <div className="grid md:grid-cols-2 gap-5">
        {myTasks?.map((task) => (
          <MyTaskCard
            key={task._id}
            task={task}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
