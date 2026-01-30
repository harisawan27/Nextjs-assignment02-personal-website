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

      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-xl font-bold text-white tracking-tight transition-opacity duration-300 group-hover:opacity-80">
                Haris Awan
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
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-3 text-sm sm:text-base"
                >
                  <i className="fas fa-envelope text-indigo-500 flex-shrink-0" />
                  <span className="truncate">111harisawan@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923361232724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-3 text-sm sm:text-base"
                >
                  <i className="fab fa-whatsapp text-indigo-500 flex-shrink-0" />
                  +92 336 1232724
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm sm:text-base">
                <i className="fas fa-map-marker-alt text-indigo-500 flex-shrink-0" />
                Karachi, Pakistan
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5 flex justify-center items-center text-center">
          <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-2">
            &copy; {currentYear} Haris Awan • Made with{" "}
            <i className="fas fa-heart text-red-500 animate-pulse text-[10px] sm:text-xs" />
          </p>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}
