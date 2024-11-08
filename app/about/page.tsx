import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-gray-900">
      <Navbar />

      <section className="flex flex-col items-center min-h-screen bg-gray-900 text-white text-center py-12 px-6">
        {/* About Section */}
        <h1 className="text-4xl md:text-5xl font-bold mt-10 mb-8">About Me</h1>

        <div className="flex flex-col items-center md:flex-row md:items-start mb-12 w-full md:w-3/4 lg:w-1/2">
          <div className="md:ml-8 text-left">
            <p className="mb-2 text-lg md:text-xl font-light text-gray-400">
              I&apos;m Haris Awan, a passionate Web Developer and Designer with
              a knack for crafting beautiful and functional digital experiences.
              I enjoy turning complex problems into simple, beautiful solutions
              and constantly seek new challenges to enhance my skill set.
            </p>
            <p className="text-lg md:text-xl font-light text-gray-400">
              Currently, I am expanding my expertise by studying AI, Web 3.0,
              and the Metaverse at GIAIC. This advanced education is equipping
              me with cutting-edge skills to navigate and shape the future of
              the web.
            </p>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              HTML 5
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              CSS 3
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              JavaScript
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              TypeScript
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              React
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              Next.js
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              Tailwind CSS
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              Python
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              Node.js
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              Adobe Illustrator
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              Adobe Photoshop
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              Canva
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              Figma
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              Wordpress
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              Github
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
              Vercel
            </span>
          </div>
        </div>

        {/* Education & Experience Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Education & Experience
          </h2>
          <div className="text-left text-gray-400 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="mb-2">
                Intermediate in Pre-Engineering (Continued)- [Govt. Degree Boys
                College Baldia Town]
              </p>
              <p>Student of GIAIC - [Governor House Karachi]</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Experience</h3>
              <p>Web Developer at WEBXES Tech - [2024]</p>
            </div>
          </div>
        </div>

        <Link
          href="/projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg shadow-md transform transition duration-300 hover:scale-105"
        >
          View My Projects
        </Link>
        
        <div className="flex flex-col items-center justify-center w-full bg-gray-800 py-4 mt-10">
          <p className="text-gray-400 text-base">Connect with me:</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://instagram.com/mharisawan27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/m-haris-awan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/harisawan27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
