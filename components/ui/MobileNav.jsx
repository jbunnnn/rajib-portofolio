"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

const socials = [
    { icon: <FaGithub />, path: "https://github.com/rajibzidan" },
    { icon: <FaLinkedin />, path: "https://linkedin.com/in/rajibzidan" },
    { icon: <FaTwitter />, path: "https://twitter.com/rajibzidan" },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center" onClick={() => setIsOpen(true)}>
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                >
                    <CiMenuFries className="text-[32px] text-accent hover:text-accent/80 transition-colors" />
                </motion.div>
            </SheetTrigger>

            <SheetContent className="flex flex-col border-l border-accent/10 bg-primary/95 backdrop-blur-xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 255, 153, 0.15) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                {/* Close Button */}
                <SheetClose className="absolute right-6 top-6 z-50">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent flex items-center justify-center transition-colors duration-300 group"
                    >
                        <IoClose className="text-2xl text-accent group-hover:text-primary transition-colors" />
                    </motion.div>
                </SheetClose>

                {/* Logo Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-16 mb-8 text-center relative z-10"
                >
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h1 className="text-5xl font-bold mb-2">
                                Rajib<span className="text-accent">.</span>
                            </h1>
                            <p className="text-sm text-white/60 tracking-wider uppercase">
                                Cybersecurity & Cloud
                            </p>
                        </motion.div>
                    </Link>
                </motion.div>

                {/* Divider */}
                <div className="w-20 h-1 bg-accent/30 mx-auto mb-8 rounded-full relative z-10" />

                {/* Navigation Links */}
                <nav className="flex flex-col justify-center items-center gap-4 flex-1 relative z-10">
                    {links.map((link, index) => {
                        const isActive = link.path === pathname;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                                className="w-full max-w-[250px]"
                            >
                                <Link 
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, x: 10 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`
                                            relative px-8 py-4 rounded-xl text-center text-xl capitalize font-medium
                                            transition-all duration-300 overflow-hidden
                                            ${isActive 
                                                ? 'bg-accent text-primary shadow-lg shadow-accent/50' 
                                                : 'bg-white/5 text-white hover:bg-white/10 hover:text-accent'
                                            }
                                        `}
                                    >
                                        {/* Hover Gradient */}
                                        {!isActive && (
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0"
                                                initial={{ x: '-100%' }}
                                                whileHover={{ x: '100%' }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        )}
                                        
                                        {/* Text */}
                                        <span className="relative z-10">{link.name}</span>

                                        {/* Active Indicator */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeNav"
                                                className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                                            />
                                        )}
                                    </motion.div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </nav>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="pb-8 space-y-6 relative z-10"
                >
                    {/* Social Links */}
                    <div className="flex justify-center gap-4">
                        {socials.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-12 h-12 rounded-full border-2 border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-white/10" />

                    {/* Contact Info */}
                    <div className="space-y-3 text-center">
                        <a 
                            href="mailto:rajibzidan22@gmail.com"
                            className="flex items-center justify-center gap-2 text-sm text-white/70 hover:text-accent transition-colors group"
                        >
                            <FaEnvelope className="group-hover:scale-110 transition-transform" />
                            <span>rajibzidan22@gmail.com</span>
                        </a>
                        <a 
                            href="tel:+6289603182662"
                            className="flex items-center justify-center gap-2 text-sm text-white/70 hover:text-accent transition-colors group"
                        >
                            <FaPhone className="group-hover:scale-110 transition-transform" />
                            <span>(+62) 896-0318-2662</span>
                        </a>
                    </div>

                    {/* Footer Text */}
                    <p className="text-center text-xs text-white/40 pt-4">
                        © 2025 Rajib Zidan. All rights reserved.
                    </p>
                </motion.div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
