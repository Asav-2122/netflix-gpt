import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    Cookies.remove("accessToken");

    navigate("/login");
  };
  return (
    <div>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
}

export default Home;
