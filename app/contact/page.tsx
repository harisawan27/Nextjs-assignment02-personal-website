import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12 text-center">
          Connect with me on social media or drop a message through any platform
          below.
        </p>

        <div className="flex flex-col items-center space-y-4 mb-12 text-center">
          <div className="flex items-center text-lg text-gray-300 hover:text-white transition duration-300">
            <i className="fas fa-envelope mr-2 text-xl"></i>
            <a href="mailto:111harisawan@gmail.com" className="hover:underline">
              111harisawan@gmail.com
            </a>
          </div>

          <div className="flex items-center text-lg text-gray-300 hover:text-white transition duration-300">
            <i className="fas fa-phone mr-2 text-xl"></i>
            <a href="tel:+92 3132003571" className="hover:underline">
              +92 313 2003571
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <a
            href="https://github.com/harisawan27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-gray-400 transition duration-300"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/m-haris-awan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-blue-600 transition duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://x.com/harisawan27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-white transition duration-300"
          >
            <i className="fab fa-x-twitter"></i>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61558545486623"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-blue-700 transition duration-300"
          >
            <i className="fab fa-facebook"></i>
          </a>

          <a
            href="https://instagram.com/mharisawan27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-pink-500 transition duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
