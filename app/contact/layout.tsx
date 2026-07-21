import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Muhammad Haris Awan for web development, AI projects, Agentic AI systems, or freelance opportunities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Haris Awan — Full-Stack AI Engineer",
    description:
      "Get in touch with Muhammad Haris Awan for web development, AI projects, Agentic AI systems, or freelance opportunities.",
    url: "https://harisawan.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
