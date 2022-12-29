import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import { useRelativeTime } from "../hooks/useRelativeTime";

const CompletedTaskCard = (props) => {
  const { _id, title, desc, image, COD, color, status } = props.task;
  const { handleDelete } = props;
  const relativeTime = useRelativeTime(COD);

  return (
    <div className={`border rounded-lg p-2 md:p-5  border-l-4 border-${color}`}>
      <div className="grid grid-cols-12  rounded-lg ">
        {/* Image */}
        <div className="col-span-4 my-auto">
          <img src={image} alt="" className="rounded-lg " />
          {/* COD */}
          <small className="inline-block my-3">Added: {relativeTime}</small>
          {/* Icons buttons */}
          <div className="flex items-center text-2xl gap-5  justify-center bg-backgroundColor py-2 rounded-md">
            <FiTrash2
              className="cursor-pointer hover:text-primaryColor"
              onClick={() => handleDelete(props.task)}
            />
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
