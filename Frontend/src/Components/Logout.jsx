import React from "react";
import { useAuth } from "../Context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({ ...authUser, user: null });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");

      window.location.reload();
    } catch (error) {
      console.log("Problem in Logout");
      toast.error("Logout failed");
    }
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="bg-pink-600 cursor-pointer hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out focus:outline-none active:scale-95"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
