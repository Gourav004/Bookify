import React from "react";
import Course from "../../public/course.png"; // imported asset

const courses = [
  {
    id: 1,
    title: "Web Development",
    desc: "Learn HTML, CSS, JavaScript and build amazing websites from scratch.",
    icon: Course,
  },
  {
    id: 2,
    title: "JavaScript Mastery",
    desc: "Deep dive into JS concepts, ES6+, and real-world projects.",
    icon: Course,
  },
  {
    id: 3,
    title: "UI/UX Design Basics",
    desc: "Understand design principles and create visually appealing layouts.",
    icon: Course,
  },
];

export default function Courses() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading + paragraph + back button centered */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Our Courses</h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          We provide a variety of courses that you can buy in affordable prices.
        </p>
        <div className="mt-6">
          <button
           className="px-4 cursor-pointer py-2 text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-300">
            <a href="/">Back</a>
          </button>
        </div>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <div
            key={c.id}
            className="bg-gray-800 rounded-xl shadow-sm border border-slate-100 p-6 text-center
                       transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <img
                src={c.icon}
                alt={c.title}
                className="h-40 w-40 object-contain"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-2">{c.title}</h3>
            <p className="text-white text-sm mb-5">{c.desc}</p>
            <button className="px-4 cursor-pointer py-2 text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-300">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
