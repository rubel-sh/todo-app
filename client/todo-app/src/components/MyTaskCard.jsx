import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdDoneAll } from "react-icons/md";
import HoverTooltip from "./HoverTooltip";

const MyTaskCard = (props) => {
  const { _id, title, desc, image, COD, color, status } = props.task;
  return (
    <div className="grid grid-cols-12 border rounded-lg p-2 md:p-5">
      {/* Image */}
      <div className="col-span-4 my-auto">
        <img src={image} alt="" className="rounded-lg " />
      </div>
      {/* Descriptions */}
      <div className="col-span-7 px-5 ">
        <input
          //   disabled
          type="text"
          className=" font-medium text-lg  outline-none bg-backgroundColor rounded-md p-1 mb-2"
          defaultValue={title}
        />
        <textarea
          //   disabled
          rows={7}
          className=" text-sm w-full outline-none  bg-backgroundColor rounded-md p-1"
          defaultValue={desc}
        />
        <button className="float-right bg-red-100 hover:bg-red-200 text-primaryColor font-bold px-2 py-1 rounded-md">
          Done
        </button>
      </div>
      {/* Icons buttons */}
      <div className="col-span-1 flex flex-col justify-center text-2xl gap-5">
        <HoverTooltip content="Mark as complete">
          <MdDoneAll className="cursor-pointer hover:text-primaryColor" />
        </HoverTooltip>
        <FiEdit className="cursor-pointer hover:text-primaryColor" />
        <FiTrash2 className="cursor-pointer hover:text-primaryColor" />
      </div>
    </div>
  );
};

export default MyTaskCard;
