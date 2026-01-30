"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web-app", label: "Web Apps" },
  { id: "websites", label: "Websites" },
  { id: "tools", label: "Tools" },
  { id: "games", label: "Games" },
];

const projects = [
  {
    title: "WEBXES LLC - High-Performance US-Based Agency",
    description:
      "WEBXES is a modern web design & development partner that build scalable websites, ecommerce platforms, and apps.",
    image: "/images/webxes.png",
    link: "https://www.webxes.com/",
    category: "websites",
    tags: ["Next.js", "React", "Tailwind"],
    featured: true,
  },
  {
    title: "DoneKaro - AI Powered Todo App",
    description:
      "An AI powered full-stack task management application designed for individual productivity. Powered with DoneKaro AI chatbot that serves as your AI Assistant. Available as both a web app and Android app built with Capacitor.",
    image: "/images/donekaro.png",
    link: "https://q4-todo-hackathon.vercel.app/",
    category: "web-app",
    tags: ["Next.js", "FastAPI", "PostgreSQL (Neon)", "Capacitor"],
    featured: true,
  },
  {
    title: "Physical AI & Humanoid Robotics - Capstone Book",
    description:
      "This project is built with Docusaurus and serves as a comprehensive guide for engineering students and professionals venturing into the world of humanoid robotics, physical AI, and robot learning. With a RAG Chatbot (Retrieval-Augmented Generation) Built with FastAPI, Google Gemini, Neon Serverless Postgres, and Qdrant Cloud, this chatbot understands the book's full context.",
    image: "/images/book.png",
    link: "https://q4-book-hackathon-1.vercel.app/",
    category: "websites",
    tags: ["Docusaurus", "FastAPI", "Qdrant Cloud"],
    featured: true,
  },
  {
    title: "RehnumaAI - Your Smart Study Guide",
    description:
      "RehnumaAI is a web app built with Next.js, TypeScript, Gemini, and Firebase. It gives students a friendly chat space where they can ask study questions, upload documents or images, and get answers instantly with streaming replies.",
    image: "/images/rehnuma_ai.png",
    link: "https://rehnumaai-7f4c1.web.app/",
    category: "web-app",
    tags: ["Next.js", "Agentic AI", "Firebase"],
    featured: true,
  },
  {
    title: "LibasG - A Clothing Store",
    description:
      "The LibasG platform integrates Sanity CMS with a custom API to manage products seamlessly. It allows for product CRUD operations, fetching product data from Sanity CMS, and displaying it within a Next.js application.",
    image: "/images/libasg.png",
    link: "https://frontend-hackathon-3-q2.vercel.app/",
    category: "websites",
    tags: ["Next.js", "Sanity CMS", "Tailwind CSS"],
  },
  {
    title: "DevHaven - A Blog Website",
    description:
      "DevHaven, a place where technology, design, and creativity collide. We aim to deliver valuable content on web development, UI/UX, coding practices, and much more.",
    image: "/images/devhaven.png",
    link: "https://devhaven-nextjs-assignment03.vercel.app/",
    category: "websites",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Universal Unit Converter",
    description: "Universal Unit Converter built with Streamlit",
    image: "/images/unit_converter.png",
    link: "https://unit-converter-haris.streamlit.app/",
    category: "tools",
    tags: ["Python", "Streamlit"],
  },
  {
    title: "Password Strength Checker",
    description: "Password Strength Checker built with Streamlit",
    image: "/images/password_checker.png",
    link: "https://password-strength-meter-haris.streamlit.app/",
    category: "tools",
    tags: ["Python", "Streamlit"],
  },
  {
    title: "My Library Manager",
    description: "My Library Manager built with Streamlit",
    image: "/images/library_manager.png",
    link: "https://personal-library-manager-haris.streamlit.app/",
    category: "tools",
    tags: ["Python", "Streamlit"],
  },
  {
    title: "Interactive Resume Builder",
    description:
      "A fully dynamic, editable, and shareable online resume builder with real-time preview and multiple templates.",
    image: "/images/project_1.png",
    link: "https://my-interactive-resume.vercel.app/",
    category: "web-app",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    featured: true,
  },
  {
    title: "Weather Widget App",
    description:
      "A beautiful weather widget displaying current conditions and forecasts with location-based data.",
    image: "/images/project_2.png",
    link: "https://day2weatherwidget.vercel.app/",
    category: "web-app",
    tags: ["React", "Weather API", "CSS"],
  },
  {
    title: "Random Joke Generator",
    description:
      "An entertaining app that fetches and displays random jokes with a sleek interface.",
    image: "/images/project_3.png",
    link: "https://day7randomjokegenerator.vercel.app/",
    category: "web-app",
    tags: ["React", "API", "CSS"],
  },
  {
    title: "Password Generator",
    description:
      "A secure tool to generate random passwords with customizable length and character options.",
    image: "/images/project_4.png",
    link: "https://day10passwordgenerator.vercel.app/",
    category: "tools",
    tags: ["React", "Security", "Tailwind"],
  },
  {
    title: "Unit Converter",
    description:
      "Convert values between 19 different units including length, weight, temperature, and more.",
    image: "/images/project_5.png",
    link: "https://day12unitconverter.vercel.app/",
    category: "tools",
    tags: ["React", "TypeScript", "Math"],
  },
  {
    title: "Expense Tracker",
    description:
      "Track daily expenses with features to add, edit, and delete expense items with visual insights.",
    image: "/images/project_6.png",
    link: "https://day15expensetracker.vercel.app/",
    category: "web-app",
    tags: ["React", "LocalStorage", "Charts"],
  },
  {
    title: "Movie Search",
    description:
      "Search for movies and discover detailed information including ratings, cast, and plot.",
    image: "/images/project_7.png",
    link: "https://day16moviesearch.vercel.app/",
    category: "web-app",
    tags: ["React", "OMDB API", "Tailwind"],
    featured: true,
  },
  {
    title: "Notes Taker App",
    description:
      "A minimalist note-taking app with markdown support and local storage persistence.",
    image: "/images/project_8.png",
    link: "https://day20notesapp.vercel.app/",
    category: "tools",
    tags: ["React", "LocalStorage", "Markdown"],
  },
  {
    title: "Recipe Search App",
    description:
      "Search for recipes by ingredient and discover new culinary ideas with detailed instructions.",
    image: "/images/project_9.png",
    link: "https://day21recipesearch.vercel.app/",
    category: "web-app",
    tags: ["React", "Recipe API", "CSS"],
  },
  {
    title: "Quiz App",
    description:
      "An interactive quiz application with multiple categories, timer, and score tracking.",
    image: "/images/project_10.png",
    link: "https://day24quizapp.vercel.app/",
    category: "web-app",
    tags: ["React", "Trivia API", "State"],
  },
  {
    title: "Snake Game",
    description:
      "A classic snake game with modern visuals, score tracking, and increasing difficulty.",
    image: "/images/project_11.png",
    link: "https://day26snakegame.vercel.app/",
    category: "games",
    tags: ["React", "Canvas", "Game Logic"],
  },
  {
    title: "Todo List",
    description:
      "A clean and minimal to-do list application with drag-and-drop reordering and filters.",
    image: "/images/project_12.png",
    link: "https://day28todolist.vercel.app/",
    category: "tools",
    tags: ["React", "LocalStorage", "DnD"],
  },
  {
    title: "Random User Generator",
    description:
      "Generate random user profiles with detailed information and avatar images.",
    image: "/images/project_13.png",
    link: "https://day29randomusergenerator.vercel.app/",
    category: "tools",
    tags: ["React", "RandomUser API", "CSS"],
  },
  {
    title: "Audio Player",
    description:
      "A sleek music player for local files with playlist support and visualizations.",
    image: "/images/project_14.png",
    link: "https://day30audioplayer.vercel.app/",
    category: "web-app",
    tags: ["React", "Web Audio", "CSS"],
  },
];

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  tags: string[];
  featured?: boolean;
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sort projects: featured first, then non-featured (maintains original order within each group)
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const filteredProjects =
    activeCategory === "all"
      ? sortedProjects
      : sortedProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="relative bg-[#030014] overflow-hidden">
      {/* Background elements */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="bg-grid absolute inset-0" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <i className="fas fa-folder-open text-indigo-400" />
              <span className="text-sm text-gray-300">Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore my collection of web development projects, from interactive
              tools to full-stack applications.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-12 max-w-4xl mx-auto">
              <div className="text-center p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">23+</div>
                <div className="text-xs text-gray-400">Total Projects</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">10</div>
                <div className="text-xs text-gray-400">Web Apps</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">4</div>
                <div className="text-xs text-gray-400">Websites</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">8</div>
                <div className="text-xs text-gray-400">Tools</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">1</div>
                <div className="text-xs text-gray-400">Games</div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedProject(project)}
              >
                <div
                  className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                    hoveredIndex === index ? "scale-[1.02]" : ""
                  }`}
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-xs font-semibold flex items-center gap-1">
                      <i className="fas fa-star text-[10px]" />
                      Featured
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Hover overlay with icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <i className="fas fa-eye text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 bg-gradient-to-t from-[#0a0a1f] to-[#030014]/80 border border-white/5 border-t-0 rounded-b-2xl">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* View link */}
                    <div className="flex items-center gap-2 mt-4 text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      View Details
                      <i className="fas fa-arrow-right text-xs" />
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <i className="fas fa-folder-open text-5xl text-gray-600 mb-4" />
              <p className="text-gray-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative p-6 sm:p-12 rounded-2xl sm:rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
            <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-xl" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Let&apos;s collaborate and bring your ideas to life. I&apos;m
                always excited to work on new and challenging projects.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition-opacity"
              >
                Start a Conversation
                <i className="fas fa-arrow-right" />
              </a>
            </div>

            {/* Decorative */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-[#0a0a1f] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <i className="fas fa-times text-white text-sm sm:text-base" />
            </button>

            {/* Modal Image */}
            <div className="relative h-48 sm:h-64 md:h-80">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover rounded-t-2xl sm:rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] via-transparent to-transparent" />

              {/* Featured badge */}
              {selectedProject.featured && (
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-[10px] sm:text-xs font-semibold flex items-center gap-1">
                  <i className="fas fa-star text-[8px] sm:text-[10px]" />
                  Featured
                </div>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 md:p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {selectedProject.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                {selectedProject.title}
              </h2>

              {/* Full Description */}
              <p className="text-gray-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                {selectedProject.description}
              </p>

              {/* Action Button */}
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                Visit Project
                <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
