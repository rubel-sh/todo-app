import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import HoverTooltip from "./HoverTooltip";

const CompletedTaskCard = (props) => {
  const { _id, title, desc, image, COD, color, status } = props.task;
  return (
    <div className=" p-2 md:p-5 border">
      <div className="grid grid-cols-12  rounded-lg ">
        {/* Image */}
        <div className="col-span-4 my-auto">
          <img src={image} alt="" className="rounded-lg " />
          {/* Icons buttons */}
          <div className="flex items-center text-2xl gap-5 mt-4 justify-center">
            <FiTrash2 className="cursor-pointer hover:text-primaryColor" />
          </div>
        </div>
        {/* Descriptions */}
        <div className="col-span-8 px-5 ">
          <p className=" font-medium text-lg  outline-none  rounded-md px-4 py-1 mb-2">
            {title}
          </p>
          <p className=" text-sm w-full outline-none  rounded-md p-4">{desc}</p>
        </div>
      </div>
      {/* Comment section */}
      <hr className="my-5" />
      <div className="mt-5">
        <div className="p-2 text-sm text-slate-800 mb-5 flex items-center">
          <AiOutlineComment className="text-2xl mr-2" />
          Awesome work as always. Keep it going
        </div>
        {/* Add comment field */}
        <form className="flex items-center">
          <input
            type="text"
            placeholder="Add comment..."
            className="w-full rounded-l-md py-2 px-4 outline-none bg-backgroundColor"
          />
          <button className="px-6 py-2 bg-primaryColor text-white rounded-r-md ">
            <span className="inline-block ">ADD</span>
            {/* <span className="inline-block animate-bounce">...</span> */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompletedTaskCard;
