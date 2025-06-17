'use client';

import { motion } from 'framer-motion';
import { WorkCard } from "@/components/shared/WorkCard";

const works = [
    {
        imageUrl: "/works/work-1.jpeg",
        title: "Conference",
        categories: "Art Direction, Design"
    },
    {
        imageUrl: "/works/work-2.jpeg",
        title: "Magazine",
        categories: "Logo, User Interface"
    },
    {
        imageUrl: "/works/work-3.jpeg",
        title: "Ivor Application",
        categories: "User Interface"
    },
    {
        imageUrl: "/works/work-4.jpeg",
        title: "Black Apple Watch",
        categories: "Logo, User Interface"
    },
    {
        imageUrl: "/works/work-5.jpeg",
        title: "Flying to the moon",
        categories: "User Experience"
    },
    {
        imageUrl: "/works/work-6.jpeg",
        title: "Dharma Webfont",
        categories: "Branding, Web Design"
    }
];

export const Works = () => {
    return (
        <section className="container mx-auto px-10 sm:px-20 md:px-40 lg:px-60 py-12 md:py-20">
            <motion.div
                className="flex items-center justify-center gap-3 mb-12 md:mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-center uppercase text-black">
                    selected
                </p>
                <p className="text-3xl sm:text-4xl md:text-5xl text-center uppercase text-black">
                    work
                </p>
            </motion.div>
                {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-1 md:space-y-2 lg:space-y-4">
                    {works.filter((_, i) => i % 2 === 0).map((work, index) => (
                        <WorkCard key={`left-${index}`} {...work} />
                    ))}
                </div>

                <div className="space-y-1 md:space-y-2 lg:space-y-4 mt-0 lg:mt-20">
                    {works.filter((_, i) => i % 2 === 1).map((work, index) => (
                        <WorkCard key={`right-${index}`} {...work} />
                    ))}
                </div>
            </div>
        </section>
    );
};