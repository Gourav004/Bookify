import React from "react";
import photo from "../../public/photo.png";

function Hero() {
  return (
    <section className="relative b-0 bg-gradient-to-br bottom-0 from-[#1e293b] via-[#334155] to-[#0f172a] mt-1 text-white overflow-hidden h-full">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-center gap-12">
          
          {/* Image (hidden on small screens) */}
          <div className="hidden md:flex w-full md:w-1/2 justify-center md:justify-start">
            <img
              src={photo}
              alt="Book"
              className="w-64 sm:w-80 md:w-[420px] drop-shadow-xl rounded-md"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-full text-center md:text-left ml-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Discover Your Next{" "}
              <span className="text-pink-500">Favorite Book</span>
            </h1>
            <p className="text-base sm:text-md md:text-xl max-w-2xl mx-auto md:mx-0 opacity-90 mb-8">
              Explore a world of stories, knowledge, and adventures at{" "}
              <span className="font-semibold text-pink-500">Bookify</span>.  
              Buy, read, and collect books that inspire you every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <input
  type="text"
  placeholder="Type here..."
  className="
    md:w-64 w-full
    px-4 py-2
    rounded-md
    bg-slate-800 text-white
    placeholder:text-slate-400
    border border-slate-700
    shadow-sm
    focus:border-pink-400
    focus:ring-2 focus:ring-pink-400/50
    outline-none
    transition-all duration-300 ease-in-out
    hover:shadow-[0_0_8px_rgba(255,192,203,0.4)]
  "
/>

              <button className="px-6 py-3 rounded-md bg-pink-500 text-white font-semibold shadow hover:bg-pink-600 transition">
                Shop Now    
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-pink-400/30 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-60 h-60 bg-rose-500/20 rounded-full blur-3xl"></div>
    </section>
  );
}

export default Hero;
