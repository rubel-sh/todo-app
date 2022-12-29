import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import CardHeading from "../../components/CardHeading";
import CompletedTaskCard from "../../components/CompletedTaskCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import { deleteTodo, fetchTodos, STATUSES } from "../../store/todoSlice";

const CompletedTasks = () => {
  const dispatch = useDispatch();
  const { data: tasks, status } = useSelector((state) => state.todos);

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

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (status === STATUSES.LOADING) {
    return <LoadingSpinner className="mx-auto mt-5" />;
  }

  // Filter only My Tasks {status:"pending"}
  const completedTasks = tasks.filter((task) => task.status === "completed");

  // If no tasks found then show empty message
  if (!completedTasks.length) {
    return (
      <h1 className="text-2xl text-secondaryColor text-center h-screen">
        No Tasks found, Please Add Task
      </h1>
    );
  }
  return (
    <div className=" p-2 md:p-5 lg:p-10 bg-white rounded-md">
      <CardHeading>Completed Tasks</CardHeading>
      {/* each card */}
      <div className="grid md:grid-cols-2 gap-5">
        {completedTasks.map((task) => (
          <CompletedTaskCard
            key={task._id}
            task={task}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default CompletedTasks;
