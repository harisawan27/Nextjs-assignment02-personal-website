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
    default: "Haris Awan | Full-Stack AI Engineer",
    template: "%s | Haris Awan",
  },

  // SEO-optimized description (158 chars)
  description:
    "Full-Stack AI Engineer building multi-agent systems in production, from intent routing and self-correcting agent loops to real-time streaming architectures.",

  // High-value keywords
  keywords: [
    "Full-Stack AI Engineer",
    "Agentic AI Engineer",
    "AI Solutions",
    "Multi-agent Systems",
    "Next.js Developer",
    "Python Developer",
    "FastAPI",
    "OpenAI SDK",
    "Haris Awan",
    "Muhammad Haris Awan",
    "M Haris Awan",
    "Haris Awan portfolio",
    "Haris Awan developer",
    "Haris Awan AI engineer",
    "Haris Awan Fiverr",
    "Haris Awan Karachi",
    "Haris Awan WEBXES",
    "Google ADK",
    "Freelance AI Engineer",
    "WEBXES LLC",
    "Morph OS",
    "Boardroom AI",
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
    title: "Haris Awan | Full-Stack AI Engineer",
    description:
      "Full-Stack AI Engineer building multi-agent systems in production, from intent routing and self-correcting agent loops to real-time streaming architectures.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Haris Awan - Full-Stack AI Engineer",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Haris Awan | Full-Stack AI Engineer",
    description:
      "Full-Stack AI Engineer building multi-agent systems in production, from intent routing and self-correcting agent loops to real-time streaming architectures.",
    images: ["/twitter-image"],
    creator: "@haris_awan07",
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
              jobTitle: ["Full-Stack AI Engineer"],
              description:
                "Full-Stack AI Engineer building multi-agent systems in production, from intent routing and self-correcting agent loops to real-time streaming architectures.",
              sameAs: [
                "https://github.com/harisawan27",
                "https://www.linkedin.com/in/m-haris-awan/",
                "https://x.com/haris_awan07",
                "https://www.facebook.com/profile.php?id=61558545486623",
                "https://instagram.com/haris.awan07",
                "https://www.fiverr.com/happy_haris",
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
                name: "WEBXES LLC",
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
