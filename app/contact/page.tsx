"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: "111harisawan@gmail.com",
    href: "mailto:111harisawan@gmail.com",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: "fas fa-phone",
    label: "Phone",
    value: "+92 336 1232724",
    href: "tel:+923361232724",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: "fas fa-map-marker-alt",
    label: "Location",
    value: "Karachi, Pakistan",
    href: null,
    gradient: "from-orange-500 to-red-500",
  },
];

const socialLinks = [
  {
    icon: "fab fa-github",
    href: "https://github.com/harisawan27",
    label: "GitHub",
    color: "hover:text-white hover:border-white",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/in/m-haris-awan/",
    label: "LinkedIn",
    color: "hover:text-blue-500 hover:border-blue-500",
  },
  {
    icon: "fab fa-x-twitter",
    href: "https://x.com/harisawan27",
    label: "X (Twitter)",
    color: "hover:text-white hover:border-white",
  },
  {
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/profile.php?id=61558545486623",
    label: "Facebook",
    color: "hover:text-blue-600 hover:border-blue-600",
  },
  {
    icon: "fab fa-instagram",
    href: "https://instagram.com/haris.awan07",
    label: "Instagram",
    color: "hover:text-pink-500 hover:border-pink-500",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-[#030014] overflow-hidden min-h-screen">
      {/* Background elements */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="bg-grid absolute inset-0" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <i className="fas fa-paper-plane text-indigo-400" />
              <span className="text-sm text-gray-300">Get in touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have a project in mind or need an AI-powered solution? I&apos;d love to
              hear from you. Let&apos;s build something intelligent together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <i className="fas fa-check text-2xl text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400">
                      Thank you for reaching out. I&apos;ll get back to you
                      soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-3">
                        <i className="fas fa-exclamation-circle" />
                        <span>{error}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 transition-colors"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <i className="fas fa-paper-plane" />
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Decorative gradient */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur -z-10" />
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-5">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <i className={`${info.icon} text-xl text-white`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-lg font-medium hover:text-indigo-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Connect on Social Media
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 text-xl transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                    >
                      <i className={social.icon} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Card */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium">Available for freelance</span>
                </div>
                <p className="text-gray-400 text-sm">
                  I&apos;m currently accepting web development and AI projects.
                  Let&apos;s discuss how I can help bring your intelligent solutions to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Frequently <span className="gradient-text">Asked</span>
            </h2>
            <p className="section-subtitle">Common questions about working with me</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What services do you offer?",
                a: "I offer full-stack web development, Agentic AI development, UI/UX design, eCommerce solutions, backend development, and AI integration services.",
              },
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on complexity. A simple website may take 1-2 weeks, while more complex applications can take 4-8 weeks or more.",
              },
              {
                q: "Do you offer ongoing maintenance?",
                a: "Yes, I offer ongoing maintenance and support packages to ensure your project stays up-to-date and running smoothly.",
              },
              {
                q: "How do we get started?",
                a: "Simply send me a message through the contact form or email me directly. We'll schedule a call to discuss your project requirements.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold list-none">
                  {faq.q}
                  <i className="fas fa-chevron-down text-gray-500 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
            <div className="absolute inset-0 bg-[#030014]/50 backdrop-blur-xl" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl" />

            <div className="relative">
              <i className="fas fa-map-marker-alt text-4xl text-indigo-400 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Based in Karachi, Pakistan
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Available for remote work worldwide. Let&apos;s connect
                regardless of where you are located.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
