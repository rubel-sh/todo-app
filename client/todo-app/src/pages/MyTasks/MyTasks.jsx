import axios from "axios";
import React, { useEffect, useState } from "react";
import { SlPlus } from "react-icons/sl";
import MyTaskCard from "../../components/MyTaskCard";

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("todos.json").then((data) => setTasks(data.data));
  }, []);

  {
    /* "_id": "01",
    "title": "Homework",
    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "image": "https://www.pngkey.com/png/full/895-8951628_student-learning-writing-boy-doing-homework-drawing.png",
    "COD": "2020-05-11T20:14:14.796Z",
    "color": "#ffffff",
    "status": "pending" */
  }

  console.log(tasks);
  return (
    <div className=" p-2 md:p-5 lg:p-10 bg-white rounded-md">
      <h2 className="text-3xl text-primaryColor font-medium mb-6">My Tasks</h2>
      {/* each card */}
      <div className="grid md:grid-cols-2 gap-5">
        {tasks.map((task) => (
          <MyTaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
