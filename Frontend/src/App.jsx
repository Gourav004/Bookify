import React from "react";
import Home from "../src/Home/Home.jsx";
import Courses from "./Components/Courses.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Contact from "./Components/Contact.jsx";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./Context/AuthProvider.jsx";
import AboutSection from "./Components/About.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/courses"
            element={authUser ? <Courses /> : <Navigate to={"/"} />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<AboutSection />}></Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
