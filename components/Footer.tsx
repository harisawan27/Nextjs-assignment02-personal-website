import Link from "next/link";

const socialLinks = [
  {
    icon: "fab fa-github",
    href: "https://github.com/harisawan27",
    label: "GitHub",
    hoverColor: "hover:text-white",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/in/m-haris-awan/",
    label: "LinkedIn",
    hoverColor: "hover:text-blue-500",
  },
  {
    icon: "fab fa-x-twitter",
    href: "https://x.com/harisawan27",
    label: "X (Twitter)",
    hoverColor: "hover:text-white",
  },
  {
    icon: "fab fa-instagram",
    href: "https://instagram.com/haris.awan07",
    label: "Instagram",
    hoverColor: "hover:text-pink-500",
  },
  {
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/profile.php?id=61558545486623",
    label: "Facebook",
    hoverColor: "hover:text-blue-600",
  },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030014] border-t border-white/5">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <span className="text-2xl font-mono font-bold transition-transform duration-300 group-hover:scale-110">
                <span className="text-indigo-400">{"{"}</span>
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">H</span>
                <span className="text-purple-500">{"}"}</span>
              </span>
              <span className="text-xl font-bold">
                <span className="gradient-text">Haris</span>
                <span className="text-gray-500 font-light">.dev</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Full-Stack Developer & Agentic AI Engineer building intelligent,
              scalable digital solutions. Let&apos;s create something amazing together.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 ${social.hoverColor}`}
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-indigo-500 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:111harisawan@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-3"
                >
                  <i className="fas fa-envelope text-indigo-500" />
                  111harisawan@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923361232724"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-3"
                >
                  <i className="fas fa-phone text-indigo-500" />
                  +92 336 1232724
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <i className="fas fa-map-marker-alt text-indigo-500" />
                Karachi, Pakistan
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Haris Awan. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Built with{" "}
            <i className="fas fa-heart text-red-500 animate-pulse text-xs" />{" "}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}
