"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<string>("dark");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // initialize theme from localStorage or prefers-color-scheme
    const stored = typeof window !== "undefined" ? localStorage.getItem("site-theme") : null;
    const prefersLight = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial = stored || (prefersLight ? "light" : "dark");
    setTheme(initial);
    if (typeof document !== "undefined") document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof document !== "undefined") document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("site-theme", next);
    } catch (e) {}
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[var(--surface)]/95 backdrop-blur-xl border-b border-[var(--surface-border)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-12">
        {/* Logo */}
        <Link href="/" className="group flex items-center">
          <span className="text-xl font-bold text-[var(--foreground)] tracking-tight transition-opacity duration-300 group-hover:opacity-80">
            Haris Awan
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  isActive(link.href)
                    ? "text-[var(--foreground)]"
                    : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
                }`}
              >
                {isActive(link.href) && (
                  <span className="absolute inset-0 rounded-full bg-[var(--surface-strong)] border border-[var(--surface-border)] shadow-sm" />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            </li>
          ))}
          <li className="ml-3">
            <a
              href="https://github.com/harisawan27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:opacity-90 transition-opacity"
            >
              <i className="fab fa-github" />
              GitHub
            </a>
          </li>
          <li className="ml-2">
            <a
              href="/Muhammad%20Haris%20Awan%20(CV).pdf"
              download
              className="flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:opacity-90 transition-opacity"
              aria-label="Download CV (PDF)"
            >
              <i className="fas fa-download" />
              CV
            </a>
          </li>
          <li className="ml-2 flex items-center self-center">
            <ThemeToggle checked={theme === "dark"} onChange={toggleTheme} />
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-[var(--surface-strong)] border border-[var(--surface-border)] text-[var(--foreground)] shadow-sm transition-colors hover:bg-[var(--surface-soft)]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-[var(--foreground)] rounded-full transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-[var(--foreground)] rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-[var(--foreground)] rounded-full transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed left-0 w-full top-[4.25rem] z-40 bg-[var(--surface)]/95 backdrop-blur-xl border-b border-[var(--surface-border)] shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300 max-h-[calc(100vh-4.25rem)] overflow-y-auto ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <ul className="container mx-auto px-6 py-6 space-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? "text-[var(--foreground)] bg-[var(--surface-strong)]"
                    : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--surface-soft)]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 flex justify-center">
            <ThemeToggle checked={theme === "dark"} onChange={toggleTheme} />
          </li>
          <li className="pt-3">
            <a
              href="https://github.com/harisawan27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
              onClick={() => setIsOpen(false)}
            >
              <i className="fab fa-github" />
              View GitHub
            </a>
          </li>
          <li>
            <a
              href="/Muhammad%20Haris%20Awan%20(CV).pdf"
              download
              className="flex items-center justify-center gap-2 mt-3 px-5 py-3 rounded-full font-medium bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Download CV (PDF)"
            >
              <i className="fas fa-download" />
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
