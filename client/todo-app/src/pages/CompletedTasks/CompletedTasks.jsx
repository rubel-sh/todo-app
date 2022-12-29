import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import CardHeading from "../../components/CardHeading";
import CompletedTaskCard from "../../components/CompletedTaskCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import { fetchComments, postComment } from "../../store/commentSlice";
import { deleteTodo, fetchTodos, STATUSES } from "../../store/todoSlice";

const CompletedTasks = () => {
  const dispatch = useDispatch();
  const { data: tasks, status } = useSelector((state) => state.todos);
  const { data: comments, status: commentStatus } = useSelector(
    (state) => state.comments
  );
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

  const handleComment = (e, id) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const todoId = id;
    console.log(comment, todoId);

    // Dispatch comment to add
    dispatch(postComment(todoId, { comment }));
  };

  useEffect(() => {
    dispatch(fetchTodos());
    dispatch(fetchComments());
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
        {comments &&
          completedTasks.map((task) => {
            // Filter comments for each task
            console.log(comments);
            const selectedComments = comments?.filter(
              (c) => c.todoId === task._id
            );
            return (
              <CompletedTaskCard
                key={task._id}
                task={task}
                handleDelete={handleDelete}
                handleComment={handleComment}
                comments={selectedComments}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CompletedTasks;
