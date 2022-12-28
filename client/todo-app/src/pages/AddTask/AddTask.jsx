import React from "react";
import { SlPlus } from "react-icons/sl";
import CardHeading from "../../components/CardHeading";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const AddTask = () => {
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
  };
  return (
    <div className=" p-10 bg-white rounded-md">
      <CardHeading>Create Task</CardHeading>
      <form onSubmit={handlePost}>
        <div className="grid gap-4 mb-8">
          {/* Add Title */}
          <input
            type="text"
            placeholder="Task Title"
            className="w-full rounded-md py-2 px-4 outline-none bg-backgroundColor"
            required
          />
          <div className="flex flex-col md:flex-row gap-4">
            {/* Text Description */}
            <textarea
              name=""
              id=""
              className="w-full outline-none rounded-md py-2 px-4 bg-backgroundColor"
              placeholder="Task Descriptions..."
              rows="6"
              required
            ></textarea>
            {/* Upload Image */}
            <div className="relative">
              <label
                htmlFor="uploadImage"
                className="h-full bg-backgroundColor hover:bg-red-100 hover:text-primaryColor transition-all outline-none rounded-md py-2 px-16 flex justify-center items-center cursor-pointer "
              >
                <MdOutlineAddPhotoAlternate className="text-6xl " />
              </label>
              <input
                id="uploadImage"
                type="file"
                className=" absolute -z-10 top-1/2 w-1"
                required
              />
            </div>
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
          <button className="text-primaryColor bg-[#fcf0f2] text-lg font-medium px-4 rounded-md hover:bg-[#f7c8d2] flex items-center">
            <SlPlus className="mr-2" />
            Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
