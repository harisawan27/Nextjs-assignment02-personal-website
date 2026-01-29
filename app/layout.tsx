import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  // Base URL for canonical and OG
  metadataBase: new URL("https://harisawan.vercel.app"),

  // Title with template for child pages
  title: {
    default: "Haris Awan | Full Stack Developer & Agentic AI Engineer",
    template: "%s | Haris Awan",
  },

  // SEO-optimized description (158 chars)
  description:
    "Full Stack Developer & Agentic AI Engineer specializing in Next.js, Python & AI solutions. Building intelligent, scalable web applications. Hire me today!",

  // High-value keywords
  keywords: [
    "Full Stack Developer",
    "Agentic AI Engineer",
    "AI Solutions",
    "Web Development Expert",
    "Next.js Developer",
    "Python Developer",
    "React Developer",
    "OpenAI Integration",
    "Haris Awan",
    "Hire Developer Pakistan",
    "Freelance AI Developer",
  ],

  // Author info
  authors: [{ name: "Muhammad Haris Awan", url: "https://harisawan.vercel.app" }],
  creator: "Muhammad Haris Awan",
  publisher: "Muhammad Haris Awan",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical
  alternates: {
    canonical: "/",
  },

  // Open Graph (LinkedIn, WhatsApp, Facebook)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harisawan.vercel.app",
    siteName: "Haris Awan Portfolio",
    title: "Haris Awan | Full Stack Developer & Agentic AI Engineer",
    description:
      "Building intelligent web solutions with Next.js, Python & AI. Let's create something amazing together!",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Haris Awan - Full Stack Developer & Agentic AI Engineer",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Haris Awan | Full Stack Developer & Agentic AI Engineer",
    description:
      "Building intelligent web solutions with Next.js, Python & AI. Let's create something amazing together!",
    images: ["/twitter-image"],
    creator: "@harisawan27",
  },

  // Additional meta
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Haris Awan",
              alternateName: "Haris Awan",
              url: "https://harisawan.vercel.app",
              image: "https://harisawan.vercel.app/opengraph-image",
              jobTitle: ["Full Stack Developer", "Agentic AI Engineer"],
              description:
                "Full Stack Developer & Agentic AI Engineer specializing in Next.js, Python, and AI solutions.",
              sameAs: [
                "https://github.com/harisawan27",
                "https://www.linkedin.com/in/m-haris-awan/",
                "https://x.com/harisawan27",
                "https://www.facebook.com/profile.php?id=61558545486623",
                "https://instagram.com/haris.awan07",
              ],
              knowsAbout: [
                "Full Stack Development",
                "Agentic AI",
                "Next.js",
                "React",
                "Python",
                "TypeScript",
                "OpenAI",
                "Web Development",
              ],
              worksFor: {
                "@type": "Organization",
                name: "WEBXES Tech",
              },
            }),
          }}
        />
      </head>
      <Analytics/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] text-white min-h-screen`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
