"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Dynamically import PdfThumbnail with no SSR to avoid server-side rendering issues
const PdfThumbnail = dynamic(() => import("@/components/PdfThumbnail"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-800/50">
      <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: string;
  file: string;
  type: "image" | "pdf";
  color: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "5-Day AI Agents Intensive Course",
    issuer: "Google",
    date: "December 2025",
    category: "Agentic AI",
    file: "/my-certificates/5-Day AI Agents Intensive Course with Google (1).png",
    type: "image",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Letter of Recommendation",
    issuer: "Code Alpha",
    date: "September 2024",
    category: "Web Development",
    file: "/my-certificates/Muhammad Haris Awan (1).pdf",
    type: "pdf",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 3,
    title: "Frontend Development Internship",
    issuer: "Code Alpha",
    date: "July 2024",
    category: "Frontend Developement",
    file: "/my-certificates/Muhammad Haris Awan.pdf",
    type: "pdf",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    title: "TypeScript Operators Certificate",
    issuer: "Coursera",
    date: "May 2024",
    category: "Programming",
    file: "/my-certificates/Coursera TWUTZW67NQU7.pdf",
    type: "pdf",
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 5,
    title: "AutoCAD Certificate",
    issuer: "DigiSkills Training Program",
    date: "May 2022",
    category: "Design & Engineering",
    file: "/my-certificates/DSTP AutoCAD Certificate.pdf",
    type: "pdf",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 6,
    title: "Digital Marketing Certificate",
    issuer: "DigiSkills Training Program",
    date: "May 2022",
    category: "Marketing",
    file: "/my-certificates/DSTP Digital Marketing Certificate.pdf",
    type: "pdf",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 7,
    title: "Freelancing Certificate",
    issuer: "DigiSkills Training Program",
    date: "August 2020",
    category: "Professional Development",
    file: "/my-certificates/DSTP Freelancing Certificate.pdf",
    type: "pdf",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 8,
    title: "Graphic Design Certificate",
    issuer: "DigiSkills Training Program",
    date: "August 2020",
    category: "Design",
    file: "/my-certificates/DSTP Graphic Design Certificate.pdf",
    type: "pdf",
    color: "from-pink-500 to-rose-500",
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const openModal = (cert: Certificate) => {
    setSelectedCert(cert);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = "unset";
  };

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
              <i className="fas fa-certificate text-indigo-400" />
              <span className="text-sm text-gray-300">Professional Credentials</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="gradient-text">Certifications</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A collection of professional certifications and courses that demonstrate my commitment to continuous learning and skill development.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16">
            <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">{certificates.length}</div>
              <div className="text-xs sm:text-sm text-gray-400">Certifications</div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">5+</div>
              <div className="text-xs sm:text-sm text-gray-400">Skill Areas</div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">4+</div>
              <div className="text-xs sm:text-sm text-gray-400">Issuers</div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <div className="text-xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">2023-24</div>
              <div className="text-xs sm:text-sm text-gray-400">Years Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="relative py-6 sm:py-10 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => openModal(cert)}
                className="group relative rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Certificate Preview */}
                <div className="relative h-56 overflow-hidden bg-gray-900">
                  {cert.type === "image" ? (
                    <Image
                      src={cert.file}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <PdfThumbnail
                      url={cert.file}
                      alt={cert.title}
                      className="w-full h-full"
                    />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} text-white shadow-lg`}>
                      {cert.category}
                    </span>
                  </div>

                  {/* Preview Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <i className="fas fa-expand text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                    <i className="fas fa-building" />
                    <span className="truncate">{cert.issuer}</span>
                    <span className="text-gray-700">•</span>
                    <i className="fas fa-calendar" />
                    <span>{cert.date}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-indigo-400">
                    <span>Click to Preview</span>
                    <i className="fas fa-arrow-right text-xs" />
                  </div>
                </div>
              </div>
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
                Interested in my qualifications?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                These certifications back up my skills. Let&apos;s discuss how I can bring this expertise to your project.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  <span className="flex items-center gap-2">
                    Get in Touch
                    <i className="fas fa-arrow-right" />
                  </span>
                </Link>
                <Link href="/projects" className="btn-secondary">
                  <span className="flex items-center gap-2">
                    <i className="fas fa-folder-open" />
                    View Projects
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal for Full Certificate Preview */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-6xl h-[95vh] sm:h-[90vh] bg-[#0a0a1a] rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start sm:items-center justify-between p-3 sm:p-4 border-b border-white/10 bg-black/50 gap-2">
              <div className="min-w-0 flex-1">
                <h3 className="text-sm sm:text-lg font-semibold truncate">{selectedCert.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 truncate">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <a
                  href={selectedCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm hover:bg-white/10 transition-colors flex items-center gap-1 sm:gap-2"
                >
                  <i className="fas fa-external-link-alt" />
                  <span className="hidden sm:inline">Open in New Tab</span>
                </a>
                <a
                  href={selectedCert.file}
                  download
                  className="px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm hover:bg-white/10 transition-colors flex items-center gap-1 sm:gap-2"
                >
                  <i className="fas fa-download" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/50 transition-colors"
                >
                  <i className="fas fa-times text-sm sm:text-base" />
                </button>
              </div>
            </div>

            {/* Preview Area */}
            <div className="flex-1 overflow-auto bg-gray-900/50">
              {selectedCert.type === "image" ? (
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[500px] p-2 sm:p-4">
                  <Image
                    src={selectedCert.file}
                    alt={selectedCert.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </div>
              ) : (
                <iframe
                  src={selectedCert.file}
                  className="w-full h-full min-h-[400px] sm:min-h-[600px]"
                  title={selectedCert.title}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
