import React from "react";
import Logo from "../../assets/Netflix_Logo.png";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Cookies.remove("accessToken");
        navigate("/login");
        toast.success("Sign Out Successfully!");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error);
        console.log(error);
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={Logo} alt="logo" />
      <button onClick={handleSignOut} className="font-bold text-white ">
        (Sign Out)
      </button>
    </div>
  );
};

export default Navbar;
