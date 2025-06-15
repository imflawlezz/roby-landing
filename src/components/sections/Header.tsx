'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileNav, Nav } from "@/components/shared/Nav";

export const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
            setIsScrolled(currentScrollY > 50);
        };

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const getLogoScale = () => {
        if (isMobile) return 0.3; // Scale down to 0.3 on mobile
        if (scrollY === 0) return 1;
        const maxScroll = 30;
        const minScale = 0.3;
        return Math.max(minScale, 1 - (scrollY / maxScroll) * (1 - minScale));
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-sm shadow-sm'
                        : 'bg-transparent'
                }`}
                style={{
                    height: isMobile ? '80px' : (isScrolled ? '80px' : '200px'),
                }}
            >
                <div className="container relative mx-auto h-full">
                    <div
                        className="flex h-full items-center justify-between"
                        style={{
                            paddingInline: isScrolled ? 30 : 10,
                            transition: 'all 0.3s ease-out'
                        }}
                    >
                        <div className="hidden lg:flex flex-col justify-center gap-1 transition-all duration-300">
                            <p className="text-xs lg:text-lg text-gray-500">
                                A creative agency based in Helsinki.
                            </p>
                            <a
                                href="mailto:hello@robi.com"
                                className="group relative overflow-hidden text-lg transition-transform hover:-translate-y-1"
                            >
                                hello@robi.com
                            </a>
                        </div>

                        <div className="lg:hidden flex flex-col justify-center">
                            <a
                                href="mailto:hello@robi.com"
                                className="text-xs"
                            >
                                hello@robi.com
                            </a>
                        </div>

                        <div className="hidden lg:flex items-center">
                            <Nav />
                        </div>

                        <button
                            className="lg:hidden z-50 p-2"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 flex flex-col gap-1.5">
                                <span className={`h-0.5 w-full bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`h-0.5 w-full bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                <span className={`h-0.5 w-full bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </div>
                        </button>
                    </div>

                    <div
                        className="absolute left-1/2 z-40"
                        style={{
                            marginTop: isMobile ? 0 : (isScrolled ? 0 : 40),
                            top: isMobile ? '50%' : (isScrolled ? '50%' : '60%'),
                            transform: `translate(-50%, -50%) scale(${getLogoScale()})`,
                            transformOrigin: 'center center',
                            transition: isMobile ? 'none' : 'all 0.3s ease-out'
                        }}
                    >
                        <Image
                            src="/logos/roby-logo.svg"
                            alt="Company Logo"
                            width={410}
                            height={234}
                            className="h-auto w-[150px] md:w-[200px] lg:w-[250px] xl:w-[380px] object-cover"
                            priority
                        />
                    </div>
                </div>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
                        >
                            <div className="container mx-auto px-4 py-6">
                                <MobileNav toggleMenu={toggleMobileMenu} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

                <div
                    className="transition-all duration-300"
                    style={{
                        height: isScrolled ? '80px' : isMobile ? '80px' : '200px',
                    }}
                />

        </>
    );
};