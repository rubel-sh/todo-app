import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardHeading from "../../components/CardHeading";
import LoadingSpinner from "../../components/LoadingSpinner";
import MyTaskCard from "../../components/MyTaskCard";
import Swal from "sweetalert2";
import { deleteTodo, fetchTodos, STATUSES } from "../../store/todoSlice";

const MyTasks = () => {
  // const [tasks, setTasks] = useState([]);
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
  return (
    <div className=" p-2 md:p-5 lg:p-10 bg-white rounded-md">
      <CardHeading>My Tasks</CardHeading>
      {/* each card */}
      <div className="grid md:grid-cols-2 gap-5">
        {tasks?.map((task) => (
          <MyTaskCard key={task._id} task={task} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
