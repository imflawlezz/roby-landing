'use client';

import Image from 'next/image';
import {Nav} from "@/components/shared/Nav";
import {useEffect, useState} from 'react';

export const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
            setIsScrolled(currentScrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLogoScale = () => {
        if (scrollY === 0) return 1;
        const maxScroll = 30;
        const minScale = 0.3;
        return Math.max(minScale, 1 - (scrollY / maxScroll) * (1 - minScale));
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
                    height: isScrolled ? '120px' : '300px'
                }}
            >
                <div className="container relative mx-auto h-full px-4 lg:px-8">
                    <div className="flex h-full items-start justify-between pt-8">
                        <div className={`flex flex-col gap-1 lg:gap-4 transition-all duration-300 ${
                            isScrolled ? 'opacity-60 lg:opacity-100' : 'opacity-100'
                        }`}>
                            <p className="text-sm lg:text-lg text-gray-500">
                                A creative agency based in Helsinki.
                            </p>
                            <a
                                href="mailto:hello@robi.com"
                                className="group relative overflow-hidden hidden lg:block"
                            >
                                <span className="block text-lg transition-transform group-hover:-translate-y-1">
                                    hello@robi.com
                                </span>
                            </a>
                        </div>

                        <div className={`transition-all duration-300 ${
                            isScrolled ? 'block' : 'hidden lg:block'
                        }`}>
                            <Nav />
                        </div>
                    </div>

                    <div
                        className="absolute left-1/2 z-40"
                        style={{
                            marginTop: isScrolled ? 0 : 20,
                            top: isScrolled ? '50%' : '60%',
                            transform: `translate(-50%, -50%) scale(${getLogoScale()})`,
                            transformOrigin: 'center center',
                            transition: 'all 0.3s ease-out'
                        }}
                    >
                        <Image
                            src="/logo.svg"
                            alt="Company Logo"
                            width={410}
                            height={234}
                            className="h-auto w-[270px] md:w-[300px] lg:w-[350px] xl:w-[410px] object-cover"
                            priority
                        />
                    </div>
                </div>
            </header>

            <div
                className="transition-all duration-300"
                style={{
                    height: isScrolled ? '170px' : '250px'
                }}
            />

        </>
    );
};