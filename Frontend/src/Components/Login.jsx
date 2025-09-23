import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const [isSignUp, setSignUp] = useState(false);
  const [userName, setUserName] = useState(""); // use empty string not null
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [isAlert, setAlert] = useState(false);

  const timeoutRef = useRef(null);

  // cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleSignUp = (e) => {
    e.preventDefault();
    setSignUp((prev) => !prev);
  };

  const showTimedAlert = (duration = 3000) => {
    // clear previous timer if any
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setAlert(true);
    timeoutRef.current = setTimeout(() => {
      setAlert(false);
      timeoutRef.current = null;
    }, duration);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log({
    //   name: userName,
    //   email: userEmail,
    //   password: userPass,
    // });

    // validation: check required fields (name only for signup)
    if (
      (isSignUp && (!userName || userName.trim() === "")) ||
      !userEmail ||
      userEmail.trim() === "" ||
      !userPass ||
      userPass.trim() === ""
    ) {
      // show alert for 3 seconds
      showTimedAlert(3000);
      console.log("Enter required fields");
      return;
    }

    // proceed — for demo just log
    console.log("Submitting:", { userName, userEmail, userPass, isSignUp });
    // reset or close modal as needed
  };

  return (
    <div>
      {/* Top-level alert so it shows above modal */}

      {/* Button to open the modal */}
      <button
        className="px-4 cursor-pointer py-1.5 rounded-md font-medium transition bg-pink-600 text-white hover:bg-pink-700 focus:outline-none"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Login
      </button>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal z-50">
        <div className="modal-box">
          <form method="dialog">
            {/* Close button */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 focus:outline-none"
              onClick={() => {
                // clear alert when closing if you want
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                  timeoutRef.current = null;
                }
                setAlert(false);
                document.getElementById("my_modal_3").close();
              }}
            >
              ✕
            </button>
          </form>
          {isAlert && (
            <div
              role="alert"
              className="fixed top-4 left-1/2 transform -translate-x-1/2
               bg-red-600 text-white px-4 py-2 rounded-md shadow-lg flex items-center space-x-2 z-[9999]"
            >
              {/* SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01M4.062 17h15.876c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L2.33 14c-.77 1.333.192 3 1.732 3z"
                />
              </svg>

              {/* Alert text */}
              <span>All fields are required!</span>
            </div>
          )}

          <h3 className="font-bold text-lg text-center mb-4">
            {isSignUp ? "Sign Up" : "Login"}
          </h3>
          {/* Login form */}
          <form className="space-y-4" onSubmit={handleLogin}>
            {isSignUp && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full focus:outline-none focus:ring-0"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-none focus:ring-0"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                value={userPass}
                onChange={(e) => setUserPass(e.target.value)}
                id="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full focus:outline-none focus:ring-0"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm mr-2 focus:outline-none focus:ring-0"
                />
                <span className="text-sm">Remember me</span>
              </label>

              <a href="#" className="text-sm text-pink-600 hover:underline">
                {!isSignUp && "Forgot password?"}
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-2 rounded-md bg-pink-600 text-white font-medium hover:bg-pink-700 transition focus:outline-none"
            >
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            {isSignUp ? "Already have an account?" : `Don’t have an account?`}
            <button
              onClick={handleSignUp}
              className="text-pink-600 ml-1 hover:underline cursor-pointer"
            >
              {isSignUp ? "Login" : "Sign up"}
            </button>
          </p>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
