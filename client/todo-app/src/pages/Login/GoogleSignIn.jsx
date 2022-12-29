import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
  const { othersAuthProviderPopup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignin = () => {
    const gProvider = new GoogleAuthProvider();
    othersAuthProviderPopup(gProvider)
      .then((result) => {
        if (result.user.uid) {
          navigate("/");
          toast.success("Signin with google succeed");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        toast.error(errorCode);
      });
  };

  return (
    <div
      onClick={handleGoogleSignin}
      className="mt-5 border py-2 rounded-md px-5 cursor-pointer hover:bg-slate-200 flex items-center"
    >
      <FcGoogle className="text-3xl mr-2" />
      Continue with google
    </div>
  );
};

export default GoogleSignIn;
