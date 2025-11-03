"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
];

const Nav = () => {
    const pathname = usePathname();
    
    return (
        <nav className="flex gap-2">
            {links.map((link, index) => {
                const isActive = link.path === pathname;
                
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className="relative group"
                    >
                        <motion.div
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`
                                px-4 py-2 capitalize font-medium text-sm xl:text-base
                                transition-all duration-300 relative
                                ${isActive 
                                    ? 'text-accent' 
                                    : 'text-white/80 hover:text-accent'
                                }
                            `}
                        >
                            {/* Text */}
                            <span className="relative z-10">{link.name}</span>

                            {/* Active Background */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute inset-0 bg-accent/10 rounded-lg border border-accent/20"
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 380, 
                                        damping: 30 
                                    }}
                                />
                            )}

                            {/* Hover Background */}
                            <div className={`
                                absolute inset-0 bg-white/5 rounded-lg opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300
                                ${isActive ? 'hidden' : ''}
                            `} />

                            {/* Bottom Underline - Active */}
                            {isActive && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 380, 
                                        damping: 30 
                                    }}
                                />
                            )}

                            {/* Bottom Underline - Hover */}
                            {!isActive && (
                                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent/60 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                            )}

                            {/* Top Glow Effect on Hover */}
                            <div className={`
                                absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 
                                bg-gradient-to-r from-transparent via-accent to-transparent 
                                opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300
                                ${isActive ? 'hidden' : ''}
                            `} />
                        </motion.div>
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
