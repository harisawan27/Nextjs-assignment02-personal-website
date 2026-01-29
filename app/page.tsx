import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: "fas fa-code",
    title: "Full-Stack Development",
    description:
      "Building responsive, high-performance web applications using Next.js, TypeScript, and modern backend technologies with scalable architecture.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "fas fa-robot",
    title: "Agentic AI Development",
    description:
      "Creating intelligent AI agents using OpenAI SDK and Python that can reason, plan, and act autonomously to solve complex problems.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "fas fa-palette",
    title: "UI/UX Design",
    description:
      "Designing intuitive, visually appealing interfaces that prioritize user experience and drive engagement with modern design principles.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: "fas fa-shopping-cart",
    title: "eCommerce Solutions",
    description:
      "Developing high-performance eCommerce websites with seamless checkout experiences, payment integration, and inventory management.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: "fas fa-server",
    title: "Backend Development",
    description:
      "Building scalable backend systems with RESTful APIs, database design, and server-side logic using Node.js and Python.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: "fas fa-brain",
    title: "AI Integration",
    description:
      "Integrating AI capabilities into existing applications, from chatbots to intelligent automation and data processing pipelines.",
    gradient: "from-pink-500 to-rose-500",
  },
];

const featuredProjects = [
  {
    title: "Interactive Resume Builder",
    description:
      "A fully dynamic, editable, and shareable online resume builder with real-time preview.",
    image: "/images/project_1.png",
    link: "https://my-interactive-resume.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Weather Widget App",
    description:
      "A beautiful widget to display current weather with location-based forecasts.",
    image: "/images/project_2.png",
    link: "https://day2weatherwidget.vercel.app/",
    tags: ["React", "API", "CSS"],
  },
  {
    title: "Movie Search App",
    description:
      "Search for movies and discover detailed information with a modern interface.",
    image: "/images/project_7.png",
    link: "https://day16moviesearch.vercel.app/",
    tags: ["React", "OMDB API", "Tailwind"],
  },
];

const stats = [
  { value: "30+", label: "Projects Completed" },
  { value: "6+", label: "Years Experience" },
  { value: "20+", label: "Technologies" },
  { value: "AI", label: "Powered Solutions" },
];

const highlights = [
  {
    icon: "fas fa-laptop-code",
    text: "Build responsive, user-friendly websites using Next.js, TypeScript, and Tailwind CSS",
  },
  {
    icon: "fas fa-robot",
    text: "Create AI agents using OpenAI tools and Python",
  },
  {
    icon: "fas fa-paint-brush",
    text: "Design intuitive and visually appealing UI/UX interfaces",
  },
  {
    icon: "fas fa-database",
    text: "Develop interactive frontends and scalable backend systems",
  },
];

export default function Home() {
  return (
    <div className="relative bg-[#030014] overflow-hidden">
      {/* Background elements */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
        <div className="bg-grid absolute inset-0" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-gray-300">
                  Available for freelance & collaborations
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
                Hi, I&apos;m{" "}
                <span className="gradient-text">Haris Awan</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed animate-fade-in-up stagger-2">
                A passionate{" "}
                <span className="text-white font-medium">
                  Full-Stack Developer
                </span>{" "}
                &{" "}
                <span className="text-white font-medium">Agentic AI Engineer</span>{" "}
                building intelligent digital solutions
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in-up stagger-3">
                <Link href="/projects" className="btn-primary group">
                  <span className="flex items-center gap-2">
                    View My Work
                    <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link href="/contact" className="btn-secondary">
                  <span className="flex items-center gap-2">
                    <i className="fas fa-envelope" />
                    Get in Touch
                  </span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 animate-fade-in-up stagger-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative animate-fade-in stagger-2">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-[#030014]" />
                </div>

                {/* Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-[#030014]">
                  <Image
                    src="/images/pfp.png"
                    alt="Muhammad Haris Awan"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-sm font-medium shadow-lg animate-float">
                  <i className="fab fa-react mr-2" />
                  Next.js
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-sm font-medium shadow-lg animate-float-delayed">
                  <i className="fab fa-python mr-2" />
                  Python
                </div>
                <div className="absolute top-1/2 -right-8 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-sm font-medium shadow-lg animate-float">
                  <i className="fas fa-robot mr-2" />
                  Agentic AI
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-white/50" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="relative py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Blending <span className="gradient-text">Creativity</span> with{" "}
                <span className="gradient-text">Technology</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I&apos;m Muhammad Haris Awan, a passionate developer and designer who
                blends creativity with technology to craft meaningful digital
                experiences. With a strong foundation in full-stack web development
                and UI/UX design, I build modern, responsive, and visually engaging
                websites and applications.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Currently advancing my skills through the GIAIC program, where I&apos;m
                learning Cloud Native Development. I&apos;ve completed Agentic AI and
                Spec-Driven Development, building intelligent agents using the
                OpenAI SDK in Python that can reason, plan, and act autonomously.
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className={`${highlight.icon} text-indigo-400 text-sm`} />
                    </div>
                    <p className="text-gray-300">{highlight.text}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors group"
              >
                Learn more about me
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors">
                      <i className="fas fa-graduation-cap text-3xl text-indigo-500 mb-4" />
                      <h3 className="font-semibold mb-2">GIAIC Student</h3>
                      <p className="text-sm text-gray-400">
                        Agentic AI & Cloud Native
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors">
                      <i className="fas fa-briefcase text-3xl text-purple-500 mb-4" />
                      <h3 className="font-semibold mb-2">Web Developer</h3>
                      <p className="text-sm text-gray-400">WEBXES Tech 2024</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors">
                      <i className="fas fa-robot text-3xl text-cyan-500 mb-4" />
                      <h3 className="font-semibold mb-2">AI Engineer</h3>
                      <p className="text-sm text-gray-400">
                        OpenAI SDK & Python
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-colors">
                      <i className="fas fa-layer-group text-3xl text-pink-500 mb-4" />
                      <h3 className="font-semibold mb-2">20+ Skills</h3>
                      <p className="text-sm text-gray-400">
                        Full-stack & AI expertise
                      </p>
                    </div>
                  </div>
                </div>
                {/* Background glow */}
                <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">
              What I <span className="gradient-text">Do</span>
            </h2>
            <p className="section-subtitle">
              From full-stack development to AI-powered solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <i className={`${service.icon} text-xl text-white`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div>
              <h2 className="section-title mb-2">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Some of my recent work that I&apos;m proud of
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-medium"
            >
              View All Projects
              <i className="fas fa-arrow-right" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group project-card card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
                </div>
                <div className="relative p-6">
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
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project
                    <i className="fas fa-external-link-alt" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
            <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-xl" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl" />

            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Let&apos;s Build Something <span className="gradient-text">Intelligent</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Whether you need a stunning website, a scalable application, or an
                AI-powered solution, I&apos;m here to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  <span className="flex items-center gap-2">
                    <i className="fas fa-paper-plane" />
                    Start a Conversation
                  </span>
                </Link>
                <a
                  href="mailto:111harisawan@gmail.com"
                  className="btn-secondary"
                >
                  <span className="flex items-center gap-2">
                    <i className="fas fa-envelope" />
                    111harisawan@gmail.com
                  </span>
                </a>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
