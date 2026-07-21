import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "View Muhammad Haris Awan's professional certifications — from Google AI Agents, DigiSkills Data Analytics, Coursera TypeScript, to Digital Marketing and Graphic Design credentials.",
  alternates: {
    canonical: "/certifications",
  },
  openGraph: {
    title: "Certifications | Haris Awan — Full-Stack AI Engineer",
    description:
      "View Haris Awan's professional certifications in AI, Data Analytics, TypeScript, Digital Marketing, and more.",
    url: "https://harisawan.vercel.app/certifications",
  },
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
