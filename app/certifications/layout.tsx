import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "View professional certifications and credentials of Muhammad Haris Awan in web development, AI, and more.",
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
