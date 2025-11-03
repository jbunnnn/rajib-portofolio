"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FiMail />,
    title: "Email",
    value: "rajibzidan22@gmail.com",
    href: "mailto:rajibzidan22@gmail.com",
  },
  {
    icon: <FiPhone />,
    title: "Phone",
    value: "(+62) 896-0318-2662",
    href: "tel:+6289603182662",
  },
  {
    icon: <FiMapPin />,
    title: "Location",
    value: "Depok, West Java, Indonesia",
    href: "https://maps.google.com/?q=Depok,Indonesia",
  },
];

const socials = [
  {
    icon: <FaInstagram />,
    name: "Instagram",
    href: "https://www.instagram.com/rzidannn?igsh=bjc2ZXljcmRzOXI2",
    color: "hover:text-pink-500 hover:border-pink-500",
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rajib-zidan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: "hover:text-blue-500 hover:border-blue-500",
  },
  {
    icon: <FaTwitter />,
    name: "X (Twitter)",
    href: "https://x.com/rzidannn?t=12hBUaHUHeVPjF7WPyrIoA&s=09",
    color: "hover:text-sky-400 hover:border-sky-400",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    href: "https://github.com/jbunnnn",
    color: "hover:text-white hover:border-white",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call (replace with actual backend later)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <section className="min-h-screen py-12 xl:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 xl:mb-16"
        >
          <h2 className="h2 mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/70 text-base xl:text-lg">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#232329] border rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-all duration-300 ${
                      errors.name ? "border-red-500" : "border-white/10"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Your Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#232329] border rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-all duration-300 ${
                      errors.email ? "border-red-500" : "border-white/10"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Subject <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#232329] border rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-all duration-300 ${
                    errors.subject ? "border-red-500" : "border-white/10"
                  }`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-[#232329] border rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-all duration-300 resize-none ${
                    errors.message ? "border-red-500" : "border-white/10"
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold text-primary flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitting
                    ? "bg-accent/50 cursor-not-allowed"
                    : submitStatus === "success"
                    ? "bg-green-500"
                    : "bg-accent hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <FiCheck className="text-xl" />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <FiSend className="text-lg" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-sm"
                >
                  Thank you for reaching out! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.title === "Location" ? "_blank" : undefined}
                  rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-5 bg-[#232329] rounded-xl border border-white/5 hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-xl group-hover:bg-accent group-hover:text-primary transition-all duration-300 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-white/60 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-white group-hover:text-accent transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-2 gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 p-4 bg-[#232329] rounded-xl border-2 border-white/10 transition-all duration-300 group ${social.color}`}
                  >
                    <div className="text-2xl">{social.icon}</div>
                    <span className="text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h4 className="text-lg font-bold text-accent">Available for Work</h4>
              </div>
              <p className="text-sm text-white/70">
                Currently open to freelance projects and full-time opportunities in 
                Cybersecurity, Cloud Infrastructure, and DevOps roles.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact
