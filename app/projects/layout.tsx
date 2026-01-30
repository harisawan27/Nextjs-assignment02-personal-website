import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the portfolio of Muhammad Haris Awan - web apps, tools, and AI-powered projects built with Next.js, React, and Python.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
