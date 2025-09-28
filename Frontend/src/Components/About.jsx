import React from "react";

// Example images (replace with your own images or links)
import bookShelf from "../../public/shelf.png";
import readingCorner from "../../public/booksPile.png";

function AboutSection() {
  return (
    <section className="bg-[#1D232A] py-16 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          About Our Book Store
        </h2>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h3 className="text-2xl font-semibold text-pink-600 mb-4">
              A Paradise for Book Lovers
            </h3>
            <p className="text-white mb-4">
              Welcome to our bookstore, where stories come alive! We bring you a
              wide range of books from classics to contemporary bestsellers.
            </p>
            <p className="text-white mb-6">
              Whether you're looking for fiction, non-fiction, or a cozy spot to
              read, our store offers a unique experience for every reader.
            </p>
            <button className="bg-pink-600 cursor-pointer text-white py-2 px-6 rounded-lg hover:bg-pink-700 transition duration-300 shadow-md">
              <a href="/">Explore Now</a>
            </button>
          </div>

          {/* Image gallery */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={bookShelf}
              alt="Bookshelf"
              className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300"
            />
            <img
              src={readingCorner}
              alt="Reading corner"
              className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
