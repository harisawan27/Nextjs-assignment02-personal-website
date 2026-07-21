import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Muhammad Haris Awan's portfolio of 25+ projects including Morph OS, Boardroom AI, WEBXES LLC, and more — built with Next.js, FastAPI, Agentic AI, and OpenAI SDK.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Haris Awan — Full-Stack AI Engineer",
    description:
      "Explore Haris Awan's portfolio of AI-powered web apps, multi-agent systems, and full-stack projects built with Next.js, Python, and OpenAI.",
    url: "https://harisawan.vercel.app/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
