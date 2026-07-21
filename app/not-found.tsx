import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="relative bg-[#030014] overflow-hidden min-h-screen">
      {/* Background elements */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      <Navbar />

      <section className="relative flex items-center justify-center min-h-[80vh] px-4 sm:px-6">
        <div className="bg-grid absolute inset-0" />
        <div className="container mx-auto max-w-4xl relative text-center">
          {/* Glowing 404 */}
          <div className="relative mb-8">
            <h1 className="text-[8rem] sm:text-[12rem] md:text-[16rem] font-black leading-none gradient-text select-none">
              404
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10" />
          </div>

          {/* Message */}
          <div className="space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Page <span className="gradient-text">Not Found</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let&apos;s get you back on track.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link href="/" className="btn-primary group">
              <span className="flex items-center gap-2">
                <i className="fas fa-home" />
                Back to Home
              </span>
            </Link>
            <Link href="/projects" className="btn-secondary">
              <span className="flex items-center gap-2">
                <i className="fas fa-folder-open" />
                View Projects
              </span>
            </Link>
            <Link href="/contact" className="btn-secondary">
              <span className="flex items-center gap-2">
                <i className="fas fa-envelope" />
                Contact Me
              </span>
            </Link>
          </div>

          {/* Decorative floating elements */}
          <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-indigo-500 animate-float opacity-50" />
          <div className="absolute top-1/3 right-16 w-3 h-3 rounded-full bg-purple-500 animate-float-delayed opacity-40" />
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-pink-500 animate-float opacity-30" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
