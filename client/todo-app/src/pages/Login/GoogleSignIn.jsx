import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleSignIn = () => {
  return (
    <div className="mt-5 border py-2 rounded-md px-5 cursor-pointer hover:bg-slate-200 flex items-center">
      <FcGoogle className="text-3xl mr-2" />
      Continue with google
    </div>
  );
};

export default GoogleSignIn;
