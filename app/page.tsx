import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-white text-center py-12 px-6">
        <div className="relative mb-8 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mt-10">
          <Image
            src="/images/haris.jpg"
            alt="Haris Awan's Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi 👋, I&apos;m Haris Awan
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-400 mb-6 max-w-2xl">
          Passionate Web Developer & Designer creating impactful digital
          experiences
        </p>

        <Link
          href="/projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg shadow-md transform transition duration-300 hover:scale-105"
        >
          View My Projects
        </Link>

        {/* About Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 mb-16 mt-16">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-400 mb-10">
            I&apos;m a dedicated web developer with a passion for creating
            visually appealing and user-friendly digital experiences. I
            specialize in front-end development, crafting responsive, engaging
            websites that bring ideas to life.
          </p>
          <Link
            href="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-lg shadow-md transform transition duration-300 hover:scale-105"
          >
            View More
          </Link>
        </div>

        <section className="py-16 px-4 bg-gray-800 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">
            Skills & Services
          </h2>

          <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-300">
                Building responsive and interactive websites using HTML, CSS,
                JavaScript, and frameworks like Next.js.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-300">
                Creating intuitive and visually appealing user interfaces that
                enhance the user experience.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
              <p className="text-gray-300">
                I excel in crafting cohesive visual identities that reflect the
                essence of your brand and resonate with your target audience.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Video Editing</h3>
              <p className="text-gray-300">
                I can transform raw footage into polished, professional videos
                that captivate and engage your audience.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                Wordpress Development
              </h3>
              <p className="text-gray-300">
                Develop dynamic, customizable websites using WordPress, with the
                flexibility of additional CSS for enhanced styling and
                functionality.
              </p>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Content Writing</h3>
              <p className="text-gray-300">
                I am a versatile content writer with a passion for crafting
                engaging, informative, and impactful content that resonates with
                your brand&apos;s audience.
              </p>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}
