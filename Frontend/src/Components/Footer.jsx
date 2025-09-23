import React from "react";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-slate-200 overflow-hidden">
      {/* Blurry Background Circles */}
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-pink-400/30 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-60 h-60 bg-rose-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-40 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>

      {/* Top Section */}
      <div className="relative max-w-6xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-3 z-10">
        {/* Services */}
        <div>
          <h6 className="text-lg font-semibold mb-4 border-b border-slate-600 pb-2">
            Services
          </h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Branding</a></li>
            <li><a href="#" className="hover:text-white transition">Design</a></li>
            <li><a href="#" className="hover:text-white transition">Marketing</a></li>
            <li><a href="#" className="hover:text-white transition">Advertisement</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-semibold mb-4 border-b border-slate-600 pb-2">
            Company
          </h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Jobs</a></li>
            <li><a href="#" className="hover:text-white transition">Press Kit</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-lg font-semibold mb-4 border-b border-slate-600 pb-2">
            Legal
          </h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-700 py-4 text-center text-sm text-slate-400 z-10">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
