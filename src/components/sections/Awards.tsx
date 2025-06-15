'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Awards = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y }}
            className="w-full max-w-screen-xl my-16 sm:my-18 md:my-24 lg:my-32 mx-auto px-4 sm:px-10 md:px-20 lg:px-30 grid gap-12 lg:grid-cols-3 lg:auto-rows-min"
        >
            <div className="lg:col-span-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-black leading-none">
                    THE PERFECT
                </h1>
                <p className="mt-4 text-3xl sm:text-4xl md:text-5xl uppercase text-black leading-snug">
                    AGENCY FOR YOUR BRAND
                </p>
            </div>

            <div className="hidden lg:block" />

            <div className="lg:col-span-1 space-y-6 text-[var(--paragraph)] text-base md:text-lg max-w-xl">
                <p>
                    We love what we do and create partnerships with our clients to ensure their digital
                    transformation is positioned for long-term success.
                </p>
                <p>
                    We believe that the human dimensions essential to start any successful project and that
                    this is where splendid emotional relationships between the company and people are born.
                </p>
            </div>

            <div className="hidden lg:block" />

            <div className="lg:col-span-1 flex flex-col justify-center mt-5 sm:mt-10 md:mt-30">
                <div className="mb-10">
                    <div className="flex justify-between items-center border-b border-black pb-2">
                        <p className="text-xl font-bold uppercase text-black">Awards</p>
                        <p className="text-lg font-bold uppercase text-black">14</p>
                    </div>
                    <div className="mt-4 space-y-2 text-[var(--paragraph)] text-base">
                        <div className="flex justify-between">
                            <span>Site of the Day</span>
                            <span>3</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Developer Award</span>
                            <span>1</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Honorable Mention</span>
                            <span>7</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Mobile Excellence</span>
                            <span>3</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center border-b border-black pb-2">
                        <p className="text-xl font-bold uppercase text-black">CSS Design Awards</p>
                        <p className="text-xl font-bold uppercase text-black">34</p>
                    </div>
                    <div className="mt-4 space-y-2 text-[var(--paragraph)] text-base">
                        <div className="flex justify-between">
                            <span>UX Design Award</span>
                            <span>10</span>
                        </div>
                        <div className="flex justify-between">
                            <span>UI Design Award</span>
                            <span>4</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Innovation Design Award</span>
                            <span>7</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Website of the Day</span>
                            <span>13</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
