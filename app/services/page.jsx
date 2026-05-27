"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { FaShieldAlt, FaBug, FaNetworkWired, FaLock } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Vulnerable Web Application Lab",
    description:
      "Building a deliberately vulnerable web application to simulate real-world security flaws such as XSS, SQL Injection, and Broken Authentication. Includes both exploitation techniques and secure mitigation strategies.",
    href: "/projects/vulnerable-web-app",
    icon: <FaBug />,
    status: "In Progress",
  },
  {
    num: "02",
    title: "Web Pentesting Simulation",
    description:
      "Performing structured penetration testing on custom-built applications, covering reconnaissance, vulnerability discovery, exploitation, and reporting based on real-world methodologies.",
    href: "/projects/pentesting-simulation",
    icon: <FaShieldAlt />,
    status: "Planned",
  },
  {
    num: "03",
    title: "Network Traffic Analysis Tool",
    description:
      "Developing a tool to monitor and analyze network traffic, capable of detecting suspicious patterns such as port scanning and abnormal connections during simulated attacks.",
    href: "/projects/network-monitor",
    icon: <FaNetworkWired />,
    status: "Planned",
  },
  {
    num: "04",
    title: "Secure Authentication System (2FA)",
    description:
      "Designing a secure login system with modern authentication practices including password hashing, session protection, rate limiting, and two-factor authentication.",
    href: "/projects/secure-auth",
    icon: <FaLock />,
    status: "In Progress",
  },
];

const Projects = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-6">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center xl:text-left mb-12 xl:mb-16"
        >
          <h2 className="h2 mb-4">
            Security <span className="text-accent">Projects</span>
          </h2>
          <p className="max-w-2xl text-white/70 text-base xl:text-lg mx-auto xl:mx-0">
            Hands-on cybersecurity projects focused on web application security,
            exploitation techniques, and defensive strategies.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Link href={project.href}>
                <div className="relative flex flex-col justify-between h-full p-8 xl:p-10 bg-[#232329] rounded-2xl border border-white/5 group hover:bg-[#2b2b32] hover:border-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:scale-[1.02] cursor-pointer overflow-hidden">

                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    
                    {/* Top */}
                    <div className="flex items-start justify-between mb-6">
                      
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-2xl xl:text-3xl group-hover:bg-accent group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                          {project.icon}
                        </div>

                        <div className="text-4xl xl:text-5xl font-extrabold text-white/10 group-hover:text-accent/30 transition-all duration-500">
                          {project.num}
                        </div>
                      </div>

                      <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-white/5 group-hover:bg-accent flex justify-center items-center transition-all duration-300 group-hover:rotate-[-45deg] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/50">
                        <BsArrowDownRight className="text-xl xl:text-2xl text-white group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Status */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20">
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl xl:text-3xl font-bold leading-tight text-white group-hover:text-accent transition-all duration-300 mb-4">
                      {project.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 text-sm xl:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="relative mt-6 pt-6 border-t border-white/10 group-hover:border-accent/30 transition-colors duration-300">
                    <div className="absolute bottom-0 left-0 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-500 ease-out" />
                    <span className="text-sm text-white/50 group-hover:text-accent/80 transition-colors duration-300 font-medium">
                      View Details →
                    </span>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;