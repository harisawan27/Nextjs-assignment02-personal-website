import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Interactive Resume Builder",
      description:
        "This app will make fully dynamic, editable, and shareable online resume.",
      image: "/images/project_1.png",
      link: "https://my-interactive-resume.vercel.app/",
    },
    {
      title: "Weather Widget App",
      description: "A widget to display the current weather of a location.",
      image: "/images/project_2.png",
      link: "https://day2weatherwidget.vercel.app/",
    },
    {
      title: "Random Joke Generator",
      description: "An app that fetches and displays random jokes.",
      image: "/images/project_3.png",
      link: "https://day7randomjokegenerator.vercel.app/",
    },
    {
      title: "Password Generator",
      description: "A tool to generate random passwords.",
      image: "/images/project_4.png",
      link: "https://day10passwordgenerator.vercel.app/",
    },
    {
      title: "Unit Converter",
      description:
        "Convert values between different 19 units (e.g. length, weight).",
      image: "/images/project_5.png",
      link: "https://day12unitconverter.vercel.app/",
    },
    {
      title: "Expense Tracker",
      description:
        "Track daily expenses. You can Add, Edit, and Delete expense items",
      image: "/images/project_6.png",
      link: "https://day15expensetracker.vercel.app/",
    },
    {
      title: "Movie Search",
      description: "Search for movies and display details.",
      image: "/images/project_7.png",
      link: "https://day16moviesearch.vercel.app/",
    },
    {
      title: "Notes Taker App",
      description: "A simple app to take and manage notes.",
      image: "/images/project_8.png",
      link: "https://day20notesapp.vercel.app/",
    },
    {
      title: "Recipe Search App",
      description: "A simple app to search for recipes by ingredient.",
      image: "/images/project_9.png",
      link: "https://day21recipesearch.vercel.app/",
    },
    {
      title: "Quiz App",
      description:
        "A simple quiz application that track and display the score.",
      image: "/images/project_10.png",
      link: "https://day24quizapp.vercel.app/",
    },
    {
      title: "Snake Game",
      description: "A simple and interactive snake game.",
      image: "/images/project_11.png",
      link: "https://day26snakegame.vercel.app/",
    },
    {
      title: "Todo List",
      description: "A minimal to-do list application.",
      image: "/images/project_12.png",
      link: "https://day28todolist.vercel.app/",
    },
    {
      title: "Random User Generator",
      description: "Generate random user profiles.",
      image: "/images/project_13.png",
      link: "https://day29randomusergenerator.vercel.app/",
    },
    {
      title: "Audio Player",
      description: "A simple music player for local files.",
      image: "/images/project_14.png",
      link: "https://day30audioplayer.vercel.app/",
    },
  ];

  return (
    <div>
      <Navbar />

      <section className="flex flex-col items-center min-h-screen bg-gray-900 text-white text-center py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mt-10 mb-6">
          My Projects
        </h1>
        <p className="text-lg text-gray-400 mb-12">
          Explore the collection of my recent web development projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <div className="relative w-full h-40 overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                View Live Demo
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
