"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-8 py-5">
      <div className="flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          AI Career Advisor
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-6 text-gray-700">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/quiz" className="hover:text-blue-600">Quiz</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Login</Link>
          <Link href="/" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">Sign Up</Link>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700 pb-4 border-t pt-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">About</Link>
          <Link href="/quiz" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Quiz</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contact</Link>
       <div className="flex flex-col gap-3 mt-2">
  <Link href="/" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-center">Login</Link>
  <Link href="/" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-center">Sign Up</Link>
</div>
        </div>
      )}

    </nav>
  );
}