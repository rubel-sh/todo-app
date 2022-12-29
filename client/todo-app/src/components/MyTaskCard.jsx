import React from "react";
import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdDoneAll } from "react-icons/md";
import { useRelativeTime } from "../hooks/useRelativeTime";
import HoverTooltip from "./HoverTooltip";

const MyTaskCard = (props) => {
  const { _id, title, desc, image, COD, color, status } = props.task;

  const {
    handleDelete,
    handleComplete,
    handleUpdate,
    editMode,
    handleSubmitUpdate,
  } = props;
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
          <div className="flex items-center text-2xl gap-5  justify-center bg-backgroundColor dark:bg-slate-800 py-2 rounded-md">
            {/* <HoverTooltip content="Mark as complete"> */}
            <MdDoneAll
              className="cursor-pointer hover:text-primaryColor"
              onClick={() => handleComplete(props.task)}
            />
            {/* </HoverTooltip> */}
            <FiEdit
              className="cursor-pointer hover:text-primaryColor"
              onClick={() => handleUpdate(props.task)}
            />
            <FiTrash2
              className="cursor-pointer hover:text-primaryColor"
              onClick={() => handleDelete(props.task)}
            />
          </div>
        </div>
        {/* Descriptions */}
        {editMode ? (
          <form
            onSubmit={(e) => handleSubmitUpdate(e, props.task)}
            className="col-span-8 px-5 "
          >
            <input
              disabled={!editMode}
              type="text"
              name="title"
              className={`font-medium text-lg  outline-none bg-backgroundColor dark:bg-slate-700 border rounded-md py-1 px-4 mb-4`}
              defaultValue={title}
            />
            <textarea
              disabled={!editMode}
              rows={7}
              name="desc"
              className={`text-sm w-full outline-none bg-backgroundColor dark:bg-slate-700 border rounded-md p-4 `}
              defaultValue={desc}
            />

            <button className="reveal_update_btn float-right bg-red-100 dark:bg-slate-800 hover:bg-red-200 dark:hover:bg-slate-900 text-primaryColor font-medium px-2 py-1 rounded-md mt-2">
              Update
            </button>
          </form>
        ) : (
          <form
            onSubmit={(e) => handleSubmitUpdate(e, props.task)}
            className="col-span-8 px-5 "
          >
            <p
              className={`font-medium text-lg  outline-none bg-white dark:bg-slate-700 rounded-md py-1 px-4 mb-4`}
            >
              {title}
            </p>
            <p
              className={`text-sm w-full outline-none bg-white dark:bg-slate-700 rounded-md  p-4 `}
            >
              {desc}
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyTaskCard;
