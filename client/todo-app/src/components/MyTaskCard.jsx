import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdDoneAll } from "react-icons/md";
import { useRelativeTime } from "../hooks/useRelativeTime";
import HoverTooltip from "./HoverTooltip";

const MyTaskCard = (props) => {
  const { _id, title, desc, image, COD, color, status } = props.task;
  const { handleDelete, handleComplete } = props;
  const relativeTime = useRelativeTime(COD);

  return (
    <div className={`border rounded-lg p-2 md:p-5  border-l-4 border-${color}`}>
      <div className="grid grid-cols-12">
        {/* Image */}
        <div className="col-span-4 my-auto">
          <img src={image} alt="" className="rounded-lg " />
          {/* COD */}
          <small className="inline-block my-3">Added: {relativeTime}</small>
          {/* Icons buttons */}
          <div className="flex items-center text-2xl gap-5  justify-center bg-backgroundColor py-2 rounded-md">
            {/* <HoverTooltip content="Mark as complete"> */}
            <MdDoneAll
              className="cursor-pointer hover:text-primaryColor"
              onClick={() => handleComplete(props.task)}
            />
            {/* </HoverTooltip> */}
            <FiEdit className="cursor-pointer hover:text-primaryColor" />
            <FiTrash2
              className="cursor-pointer hover:text-primaryColor"
              onClick={() => handleDelete(props.task)}
            />
          </div>
        </div>
        {/* Descriptions */}
        <div className="col-span-8 px-5 ">
          <input
            //   disabled
            type="text"
            className=" font-medium text-lg  outline-none bg-backgroundColor rounded-md py-1 px-4 mb-4"
            defaultValue={title}
          />
          <textarea
            //   disabled
            rows={7}
            className=" text-sm w-full outline-none  bg-backgroundColor rounded-md  p-4 "
            defaultValue={desc}
          />
          <button className="float-right bg-red-100 hover:bg-red-200 text-primaryColor font-bold px-2 py-1 rounded-md mt-2">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTaskCard;
