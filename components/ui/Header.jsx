"use client";

import Link from "next/link";
import { Button } from "./button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`
                fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300
                ${scrolled 
                    ? 'py-4 bg-primary/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-accent/10' 
                    : 'py-6 xl:py-8 bg-transparent'
                }
            `}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group"
                    >
                        <h1 className={`
                            font-bold transition-all duration-300
                            ${scrolled ? 'text-3xl' : 'text-3xl xl:text-4xl'}
                        `}>
                            Rajib
                            <span className="text-accent relative">
                                .
                                {/* Dot glow effect */}
                                <span className="absolute inset-0 text-accent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    .
                                </span>
                            </span>
                        </h1>
                        
                        {/* Subtitle - hide when scrolled */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: scrolled ? 0 : 1 }}
                            className={`
                                text-[10px] xl:text-xs text-white/60 tracking-wider uppercase absolute -bottom-4 xl:-bottom-5 left-0
                                transition-all duration-300 ${scrolled ? 'hidden' : 'block'}
                            `}
                        >
                            Cloud & Security
                        </motion.p>
                    </motion.div>
                </Link>

                {/* Desktop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button className="relative group overflow-hidden bg-accent hover:bg-accent/90 text-primary font-semibold">
                                {/* Background gradient animation */}
                                <span className="absolute inset-0 bg-gradient-to-r from-accent via-white/20 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Content */}
                                <span className="relative flex items-center gap-2">
                                    <HiOutlineMail className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                                    Hire Me
                                </span>

                                {/* Glow effect */}
                                <span className="absolute inset-0 rounded-full blur-xl bg-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                            </Button>
                        </motion.div>
                    </Link>
                </div>

                {/* Mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>

            {/* Progress bar - shows scroll progress */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/0 via-accent to-accent/0 origin-left"
                style={{
                    scaleX: useTransform(scrollY, [0, 1000], [0, 1]),
                }}
            />
        </motion.header>
    );
};

export default Header;
