"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaTools, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const stats = [
    {
      num: 1,
      text: "Years of experience",
      icon: <FaBriefcase />,
      suffix: "+",
    },
    {
      num: 12,
      text: "Projects completed",
      icon: <FaCode />,
      suffix: "+",
    },
    {
      num: 8,
      text: "Technologies mastered",
      icon: <FaTools />,
      suffix: "+",
    },
    {
      num: 500,
      text: "Code commits",
      icon: <FaGithub />,
      suffix: "+",
    },
];

const socials = [
    {
      icon: <FaInstagram />,
      path: "https://www.instagram.com/rzidannn?igsh=bjc2ZXljcmRzOXI2",
      name: "Instagram",
      color: "hover:text-pink-500"
    },
    {
      icon: <FaLinkedin />,
      path: "https://www.linkedin.com/in/rajib-zidan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      name: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: <FaTwitter />,
      path: "https://x.com/rzidannn?t=12hBUaHUHeVPjF7WPyrIoA&s=09",
      name: "X (Twitter)",
      color: "hover:text-sky-400"
    },
];

const Stats = () => {
  return (
    <section className="pt-8 pb-12 xl:py-16">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-6 mb-12"
        >
          {stats.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="bg-[#232329] p-6 xl:p-8 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
                  
                  {/* Icon */}
                  <div className="relative mb-4 flex justify-center xl:justify-start">
                    <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl xl:text-2xl group-hover:bg-accent group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {item.icon}
                    </div>
                  </div>

                  {/* Number */}
                  <div className="relative flex items-baseline justify-center xl:justify-start gap-1 mb-2">
                    <CountUp
                      end={item.num}
                      duration={2}
                      delay={0.5}
                      className="text-4xl xl:text-5xl font-extrabold text-white group-hover:text-accent transition-colors duration-300"
                    />
                    <span className="text-3xl xl:text-4xl font-extrabold text-accent">
                      {item.suffix}
                    </span>
                  </div>

                  {/* Text */}
                  <p className="relative text-sm xl:text-base text-white/70 group-hover:text-white/90 transition-colors duration-300 text-center xl:text-left leading-tight">
                    {item.text}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-accent to-accent/50 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>


      </div>
    </section>
  );
};

export default Stats;
