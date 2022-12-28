import axios from "axios";
import React, { useEffect, useState } from "react";
import CardHeading from "../../components/CardHeading";
import CompletedTaskCard from "../../components/CompletedTaskCard";

const CompletedTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("todos.json").then((data) => setTasks(data.data));
  }, []);

  return (
    <div className=" p-2 md:p-5 lg:p-10 bg-white rounded-md">
      <CardHeading>Completed Tasks</CardHeading>
      {/* each card */}
      <div className="grid md:grid-cols-2 gap-5">
        {tasks.map((task) => (
          <CompletedTaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default CompletedTasks;
