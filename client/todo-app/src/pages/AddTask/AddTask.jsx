import React from "react";
import { SlPlus } from "react-icons/sl";
import CardHeading from "../../components/CardHeading";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [creatingTask, setCreatingTask] = useState(false);
  const [creatingTaskError, setCreatingTaskError] = useState(false);
  const navigate = useNavigate();

  const handlePost = (e) => {
    setCreatingTask(true);
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const desc = form.desc.value;
    const COD = new Date();
    const status = "pending";
    let color = "";

    const imageField = form.image.files[0];
    let imageForm = new FormData();
    imageForm.append("image", imageField);

    /**
     * Upload image to imgBB
     *
     *
     * * */

    const uploadImageToBB = async () => {
      try {
        const IMGBB_API = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API
        }`;
        const response = await axios.post(IMGBB_API, imageForm);
        const imageLinks = response.data;

        // If image upload succeed
        if (imageLinks.success) {
          const image = imageLinks.data.thumb.url;
          const task = { title, desc, image, COD, status, color };

          // Upload data to DB
          console.log(task);
          const postAPI = `${import.meta.env.VITE_API}/todos`;
          axios.post(postAPI, task).then((r) => {
            // If post is successfull
            if (r.data.acknowledged) {
              navigate("/mytasks");
              toast.success("Todo added successfullt");
              form.reset();
              setCreatingTask(false);
            } else {
              toast.error("Something went wrong, Posting failed");
              setCreatingTask(false);
            }
          });
        }
        setCreatingTask(false);
      } catch (err) {
        setCreatingTask(false);
        setCreatingTaskError(true);
        console.log(err);
      }
    };

    const imageUploadResult = uploadImageToBB();
    console.log(imageUploadResult);
  };

  if (creatingTaskError) {
    return <div>Something went wrong pleace try again.</div>;
  }
  return (
    <div className=" p-10 bg-white rounded-md">
      <CardHeading>Create Task</CardHeading>
      <form onSubmit={handlePost}>
        <div className="grid gap-4 mb-8">
          {/* Add Title */}
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            className="w-full rounded-md py-2 px-4 outline-none bg-backgroundColor"
            required
          />
          <div className="flex flex-col md:flex-row gap-4">
            {/* Text Description */}
            <textarea
              name="desc"
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
                name="image"
                type="file"
                className=" absolute -z-10 top-1/2 w-1"
                required
              />
            </div>
          </div>
        </div>
        {/* Select color and add task btn */}
        <div className="flex w-full justify-between">
          {/* Colors kaj baki ase */}
          <div className="flex gap-2">
            <input
              type="radio"
              id="color-radio-1"
              value=""
              name="default-radio"
              className="peer w-10 h-10 rounded-full bg-selectColor1  cursor-pointer"
            />
            <input
              type="radio"
              id="color-radio-2"
              value=""
              name="default-radio"
              className="w-10 h-10 rounded-full bg-selectColor2 cursor-pointer"
            />
            <div className="w-10 h-10 rounded-full bg-selectColor3 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-selectColor4 cursor-pointer"></div>
          </div>
          {/* Add Task */}
          <button
            disabled={creatingTask}
            className="text-primaryColor bg-[#fcf0f2] text-lg font-medium px-4 rounded-md hover:bg-[#f7c8d2] flex items-center"
          >
            {creatingTask ? (
              <span className="inline-block animate-bounce">...</span>
            ) : (
              <>
                <SlPlus className="mr-2" />
                <span className="inline-block ">Task</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
