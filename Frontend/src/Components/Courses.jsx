import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Courses() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    };
    getBooks();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading + paragraph + back button */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Our Courses</h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          We provide a variety of courses that you can buy at affordable prices.
        </p>
        <div className="mt-6">
          <button className="px-4 cursor-pointer py-2 text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-300">
            <a href="/">Back</a>
          </button>
        </div>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((c) => (
          <div
            key={c._id}
            className="bg-gray-800 rounded-xl shadow-sm border border-slate-100 p-6 text-center transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <img
                src={c.image}
                alt={c.title}
                className="h-40 w-40 object-contain rounded"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-2">{c.name}</h3>
            <p className="text-white text-sm mb-2">{c.title}</p>
            <p className="text-pink-400 font-semibold mb-2">
              Category: {c.category}
            </p>
            <p className="text-green-400 font-bold mb-4">₹{c.price}</p>
            <button className="px-4 cursor-pointer py-2 text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-300">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
