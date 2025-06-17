'use client';

import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Dribbble } from 'lucide-react';
import Image from 'next/image';

export const Footer = () => {
    const socialIcons = [
        { icon: Facebook, label: 'Facebook' },
        { icon: Instagram, label: 'Instagram' },
        { icon: Twitter, label: 'Twitter' },
        { icon: Linkedin, label: 'LinkedIn' },
        { icon: Dribbble, label: 'Dribbble' },
    ];

    const sitemapLinks = [
        'Home',
        'About',
        'News',
        'Pricing',
        'Style Guide',
        'Image Licensing',
    ];

    const contactInfo = {
        phone: '3740 213 301',
        email: 'contact@robi.com',
    };

    const address = {
        street: '14 New South Head Rd,',
        suburb: 'Triple Bay 3148',
        city: 'London, UK',
    };

    return (
        <footer className="w-full bg-white my-16 sm:mt-9 md:mt-12 lg:mt-16 px-4 sm:px-10 md:px-20 lg:px-30">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8">
                    <Image
                        src="/logos/roby-logo.svg"
                        width={180}
                        height={40}
                        alt="Roby Logo"
                        className="h-auto max-w-[180px]"
                    />
                    <div className="flex gap-3">
                        {socialIcons.map(({ icon: Icon, label }, index) => (
                            <button
                                key={index}
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
                                aria-label={label}
                            >
                                <Icon size={18} className="text-gray-600" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-72 gap-y-10">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold uppercase text-gray-900">Address</h3>
                        <address className="not-italic space-y-1 text-gray-600 text-base">
                            <p>{address.street}</p>
                            <p>{address.suburb}</p>
                            <p>{address.city}</p>
                        </address>
                        <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold uppercase hover:bg-gray-800 transition">
                            Find on Map
                        </button>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold uppercase text-gray-900">Sitemap</h3>
                        <nav className="space-y-2">
                            {sitemapLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="block text-base text-gray-800 hover:text-gray-600 transition"
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold uppercase text-gray-900">Contact</h3>
                        <div className="space-y-2 text-gray-600 text-base">
                            <p>P: {contactInfo.phone}</p>
                            <p>E: {contactInfo.email}</p>
                        </div>
                    </div>
                </div>

                <div className="py-6">
                    <p className="text-sm text-gray-500">
                        © This is a <span className="font-medium">Deni Bozo</span> template powered by{' '}
                        <span className="font-medium">Webflow</span>. Site by <a href="https://github.com/imflawlezz" className="underline">imflawlezz</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
