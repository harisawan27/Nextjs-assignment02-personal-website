"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-800 shadow-lg fixed top-0 w-full z-20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-3xl font-extrabold text-white tracking-wider">
          <Link href="/">Haris</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          <li>
            <Link
              href="/"
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-blue-400 transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-blue-800 shadow-lg text-center">
            <ul className="space-y-6 py-6 text-white font-medium">
              <li>
                <Link
                  href="/"
                  className="block hover:text-blue-400 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block hover:text-blue-400 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block hover:text-blue-400 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block hover:text-blue-400 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
