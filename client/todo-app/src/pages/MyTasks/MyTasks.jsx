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
  updateTodo,
} from "../../store/todoSlice";
import { useNavigate } from "react-router-dom";

const MyTasks = () => {
  const [editMode, setEditMode] = useState(false);
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
    Swal.fire({
      title: "Are you sure?",
      text: `Complete ${todo.title}?`,
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

  const handleUpdate = (updatedData) => {
    // set edit mode to true
    setEditMode(!editMode);
  };

  const handleSubmitUpdate = (e, task) => {
    e.preventDefault();
    setEditMode(!editMode);
    const form = e.target;
    const title = form.title.value;
    const desc = form.desc.value;
    dispatch(updateTodo({ ...task, title, desc }));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (status === STATUSES.LOADING) {
    return (
      <div className="text-center h-screen">
        <LoadingSpinner className="mx-auto mt-5" />
      </div>
    );
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
    <div className=" p-2 md:p-5 lg:p-10 bg-white dark:bg-slate-700 dark:text-white rounded-md ">
      <CardHeading>My Tasks</CardHeading>
      {/* each card */}
      <div className="grid md:grid-cols-2 gap-5">
        {myTasks?.map((task) => (
          <MyTaskCard
            key={task._id}
            task={task}
            editMode={editMode}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
            handleUpdate={handleUpdate}
            handleSubmitUpdate={handleSubmitUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
