import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Muhammad Haris Awan - Full Stack Developer & Agentic AI Engineer specializing in Next.js, Python, and AI solutions.",
};

const techStack = [
  { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
  { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500" },
  { name: "TypeScript", svg: "/icons/typescript.svg" },
  { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
  { name: "Next.js", icon: "fas fa-n", color: "text-white" },
  { name: "Tailwind CSS", icon: "fas fa-wind", color: "text-teal-400" },
  { name: "Python", icon: "fab fa-python", color: "text-yellow-300" },
  { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
  { name: "OpenAI SDK", icon: "fas fa-robot", color: "text-emerald-400" },
  { name: "Figma", icon: "fab fa-figma", color: "text-pink-400" },
  { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-400" },
  { name: "WordPress", icon: "fab fa-wordpress", color: "text-blue-400" },
  { name: "Git", icon: "fab fa-git-alt", color: "text-orange-500" },
  { name: "GitHub", icon: "fab fa-github", color: "text-gray-300" },
  { name: "Vercel", svg: "/vercel.svg" },
  { name: "Docker", icon: "fab fa-docker", color: "text-blue-500" },
  { name: "REST APIs", icon: "fas fa-plug", color: "text-purple-400" },
  { name: "Firebase", svg: "/icons/firebase.svg" },
  { name: "Sanity", svg: "/icons/sanity.svg" },
];

const timeline = [
  {
    year: "2024 - Present",
    title: "Full-Stack Developer & AI Engineer",
    description:
      "Building intelligent web applications and AI agents using Next.js, Python, and OpenAI SDK. Developing scalable solutions that combine modern web technologies with AI capabilities.",
    type: "work",
    icon: "fas fa-rocket",
  },
  {
    year: "2024",
    title: "Web Developer at WEBXES Tech",
    description:
      "Built modern web applications and contributed to client projects using React, Next.js, and various frontend technologies. Gained hands-on experience in production environments.",
    type: "work",
    icon: "fas fa-briefcase",
  },
  {
    year: "2024 - Present",
    title: "GIAIC - Agentic AI Program",
    description:
      "Advancing skills in Agentic AI, developing intelligent agents using OpenAI SDK in Python. Learning to build systems that can reason, plan, and act autonomously for scalable digital solutions.",
    type: "education",
    icon: "fas fa-brain",
  },
  {
    year: "Continuing",
    title: "Humanities",
    description:
      "Pursuing Intermediate in Humanities at Govt. Degree Boys College Baldia Town, building a strong foundation in arts and social sciences.",
    type: "education",
    icon: "fas fa-graduation-cap",
  },
];

const skills = [
  { name: "Frontend Development", level: 92 },
  { name: "Backend Development", level: 85 },
  { name: "Spec-Driven Development", level: 88 },
  { name: "AI/ML & OpenAI SDK", level: 80 },
  { name: "UI/UX Design", level: 88 },
  { name: "Python Programming", level: 82 },
  { name: "Database Management", level: 78 },
];

const whatIDo = [
  {
    icon: "fas fa-laptop-code",
    title: "Full-Stack Web Development",
    description: "Build responsive, user-friendly websites using Next.js, TypeScript, and Tailwind CSS",
  },
  {
    icon: "fas fa-robot",
    title: "Agentic AI Development",
    description: "Create AI agents using OpenAI tools and Python that can reason and act autonomously",
  },
  {
    icon: "fas fa-palette",
    title: "UI/UX Design",
    description: "Design intuitive and visually appealing interfaces that enhance user experience",
  },
  {
    icon: "fas fa-server",
    title: "Backend Systems",
    description: "Develop interactive frontends and scalable backend systems with modern architecture",
  },
  {
    icon: "fas fa-shopping-cart",
    title: "eCommerce Solutions",
    description: "Deliver high-performance eCommerce and portfolio websites with seamless experiences",
  },
  {
    icon: "fas fa-clipboard-check",
    title: "Spec-Driven Development",
    description: "Design and build software from detailed specifications using Speckit/SpecifyPlus for precise implementations",
  },
];

const socialLinks = [
  {
    icon: "fab fa-github",
    href: "https://github.com/harisawan27",
    label: "GitHub",
    username: "@harisawan27",
    color: "hover:border-gray-400",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/in/m-haris-awan/",
    label: "LinkedIn",
    username: "m-haris-awan",
    color: "hover:border-blue-500",
  },
  {
    icon: "fab fa-instagram",
    href: "https://instagram.com/haris.awan07",
    label: "Instagram",
    username: "@haris.awan07",
    color: "hover:border-pink-500",
  },
  {
    icon: "fab fa-x-twitter",
    href: "https://x.com/harisawan27",
    label: "X (Twitter)",
    username: "@harisawan27",
    color: "hover:border-white",
  },
];

export default function About() {
  return (
    <div className="relative bg-[#030014] overflow-hidden">
      {/* Background elements */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="bg-grid absolute inset-0" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <i className="fas fa-user text-indigo-400" />
              <span className="text-sm text-gray-300">Get to know me</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Full-Stack Developer & Agentic AI Engineer building intelligent digital solutions
            </p>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image */}
            <div className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden">
                <Image
                  src="/images/haris.jpg"
                  alt="Muhammad Haris Awan"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/50 to-transparent" />
              </div>
              {/* Decorative border */}
              <div className="absolute -inset-2 rounded-3xl border-2 border-indigo-500/30 -z-10" />
              <div className="absolute -inset-4 rounded-3xl border border-purple-500/20 -z-20" />
              {/* Background glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl -z-30" />
            </div>

            {/* Bio */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Muhammad Haris Awan
              </h2>
              <p className="text-indigo-400 font-medium mb-6">
                Full-Stack Developer & Agentic AI Engineer
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I&apos;m a passionate developer and designer who blends creativity
                with technology to craft meaningful digital experiences. With a
                strong foundation in full-stack web development and UI/UX design,
                I build modern, responsive, and visually engaging websites and
                applications.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Currently, I&apos;m advancing my skills through the GIAIC program,
                where I&apos;m learning Cloud Native Development. Having completed
                Agentic AI and Spec-Driven Development, I&apos;ve developed intelligent
                agents using the OpenAI SDK in Python, gaining hands-on experience
                in building systems that can reason, plan, and act autonomously.
                This future-ready training helps me create scalable and intelligent
                digital solutions.
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-map-marker-alt text-indigo-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm font-medium">Karachi, Pakistan</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-envelope text-indigo-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="text-sm font-medium truncate">111harisawan@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                <Link href="/projects" className="btn-primary">
                  <span>View My Work</span>
                </Link>
                <a
                  href="/Muhammad%20Haris%20Awan%20(CV).pdf"
                  download
                  className="btn-secondary"
                >
                  <span className="flex items-center gap-2">
                    <i className="fas fa-download" />
                    Download CV
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">
              What I <span className="gradient-text">Do</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive skills from web development to AI engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatIDo.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className={`${item.icon} text-xl text-indigo-400`} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subtitle">
              Proficiency levels in various technologies and domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-indigo-400">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="section-subtitle">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="tech-icon group flex flex-col items-center gap-3"
              >
                {tech.svg ? (
                  <Image
                    src={tech.svg}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="transition-transform group-hover:scale-110"
                  />
                ) : (
                  <i
                    className={`${tech.icon} text-3xl ${tech.color} transition-transform group-hover:scale-110`}
                  />
                )}
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="section-title">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subtitle">
              Education and professional experience
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#030014] z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      item.type === "work"
                        ? "bg-indigo-500/20 text-indigo-300"
                        : "bg-purple-500/20 text-purple-300"
                    }`}
                  >
                    <i className={item.icon} />
                    {item.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="section-subtitle">
              Find me on social media and let&apos;s start a conversation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 rounded-2xl bg-white/[0.02] border border-white/10 transition-all duration-300 hover:-translate-y-2 ${social.color}`}
              >
                <i
                  className={`${social.icon} text-3xl mb-4 block text-gray-400 group-hover:text-white transition-colors`}
                />
                <h3 className="font-semibold mb-1">{social.label}</h3>
                <p className="text-sm text-gray-500">{social.username}</p>
              </a>
            ))}
          </div>
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
                Ready to build something intelligent?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to bring AI-powered solutions to life.
              </p>
              <Link href="/contact" className="btn-primary">
                <span className="flex items-center gap-2">
                  Get in Touch
                  <i className="fas fa-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
