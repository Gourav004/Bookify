import React from "react";
import BookPNG from "../../public/bookji.png"; // keep as you had
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const books = [
  {
    id: 1,
    title: "Beginner's Guide to React",
    desc: "Simple & practical examples to start building apps.",
    img: BookPNG,
  },
  {
    id: 2,
    title: "Advanced JS Patterns",
    desc: "Design patterns and best practices for production code.",
    img: BookPNG,
  },
  {
    id: 3,
    title: "Web Performance Tips",
    desc: "Small changes that massively improve UX and speed.",
    img: BookPNG,
  },
];

export default function FreeBooks() {
  return (
    <section className=" flex justify-around flex-col items-center py-10 px-20 bg-gradient-to-br bottom-0 from-[#1e293b] via-[#334155] to-[#0f172a]">
          {/* Blurry Background Circles */}
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-pink-400/30 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-60 h-60 bg-rose-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-40 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <h3 className="text-3xl font-semibold mb-6 text-center text-pink-600">Free Books</h3>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((b) => (
          <article
            key={b.id}
            className="group relative bg-base-100 rounded-xl overflow-hidden shadow-md transition-transform duration-500 motion-safe:transform-gpu motion-safe:will-change-transform
                       hover:shadow-2xl hover:scale-105"
            aria-labelledby={`book-${b.id}-title`}
          >
            
            {/* image area */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={b.img}
                alt={b.title}
                className="w-full h-full object-contain p-6 transition-transform duration-500 motion-safe:transform-gpu group-hover:scale-105"
              />
              {/* subtle gradient overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* content */}
            <div className="p-4">
              <h4 id={`book-${b.id}-title`} className="text-lg font-semibold mb-1">
                {b.title}
              </h4>
              <p className="text-sm text-white mb-4">{b.desc}</p>

              <div className="flex items-center justify-end gap-3">
                {/* small icon action (example) */}
                <button
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium border border-slate-200/0 transition-all duration-500
                             bg-transparent hover:bg-black transiton-all text-white"
                  aria-label={`More info about ${b.title}`}
                >
                  Details
                </button>

                {/* primary action */}
                <button
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-white
                             bg-gradient-to-r from-pink-500 to-rose-500 shadow-sm transform transition duration-200
                             motion-safe:will-change-transform motion-safe:transform-gpu hover:-translate-y-0.5 hover:shadow-lg"
                  aria-label={`Download ${b.title}`}
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* corner badge */}
            <span className="absolute top-3 left-3 bg-pink-500   backdrop-blur-sm text-xs px-2 py-1 rounded-full text-white/90">
              Free
            </span>
          </article>
        ))}
      </div>
    </section>  
  );
}
