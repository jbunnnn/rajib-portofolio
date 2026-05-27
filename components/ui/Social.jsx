"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { 
    icon: <FaInstagram />, 
    path: 'https://www.instagram.com/rzidannn?igsh=bjc2ZXljcmRzOXI2',
    name: 'Instagram',
    color: 'hover:bg-pink-500 hover:border-pink-500'
  },
  { 
    icon: <FaLinkedinIn />, 
    path: 'https://www.linkedin.com/in/rajib-zidan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    name: 'LinkedIn',
    color: 'hover:bg-blue-500 hover:border-blue-500'
  },
  { 
    icon: <FaTwitter />, 
    path: 'https://x.com/rzidannn?t=12hBUaHUHeVPjF7WPyrIoA&s=09',
    name: 'X (Twitter)',
    color: 'hover:bg-sky-400 hover:border-sky-400'
  },
  { 
    icon: <FaYoutube />, 
    path: '#',
    name: 'YouTube',
    color: 'hover:bg-red-500 hover:border-red-500',
    comingSoon: true
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link 
            href={item.path}
            target={item.comingSoon ? undefined : "_blank"}
            rel={item.comingSoon ? undefined : "noopener noreferrer"}
            className={`${iconStyles} ${item.color} transition-all duration-500 relative group ${
              item.comingSoon ? 'cursor-not-allowed opacity-50' : ''
            }`}
            onClick={(e) => item.comingSoon && e.preventDefault()}
            aria-label={item.name}
          >
            {item.icon}
            
            {/* Glow effect on hover */}
            <span className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10 bg-current" />
            
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1c1c22] text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-accent/20">
              {item.comingSoon ? `${item.name} (Coming Soon)` : item.name}
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Social;