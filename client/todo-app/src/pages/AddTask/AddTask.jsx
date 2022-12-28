import React from "react";
import { SlPlus } from "react-icons/sl";

const AddTask = () => {
  return (
    <div className=" p-10 bg-white rounded-md">
      <h2 className="text-3xl text-primaryColor font-medium mb-6">
        Create Task
      </h2>
      <form>
        <div className="grid gap-4 mb-8">
          {/* Add Title */}
          <input
            type="text"
            placeholder="Task Title"
            className="w-full rounded-md py-2 px-4 outline-none bg-backgroundColor"
          />
          <div className="flex gap-4">
            {/* Text Description */}
            <textarea
              name=""
              id=""
              className="w-full outline-none rounded-md py-2 px-4 bg-backgroundColor"
              placeholder="Task Descriptions..."
              rows="6"
            ></textarea>
            {/* Upload Image */}
            <input
              type="file"
              className="h-full bg-backgroundColor outline-none rounded-md py-2 px-4 flex justify-center items-center cursor-pointer "
            />
          </div>
        </div>
        {/* Select color and add task btn */}
        <div className="flex w-full justify-between">
          {/* Colors */}
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full bg-selectColor1 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-selectColor2 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-selectColor3 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-selectColor4 cursor-pointer"></div>
          </div>
          {/* Add Task */}
          <button className="text-primaryColor bg-[#ffbecc] text-lg font-medium px-4 rounded-md hover:bg-[#f7adbd] flex items-center">
            <SlPlus className="mr-2" />
            Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
