import React from 'react';

export const Skills = () => {
    const skills = [
        { name: "Graphic Design", percentage: 80 },
        { name: "Lead Generation", percentage: 41 },
        { name: "Photoshop", percentage: 70 },
        { name: "Illustration", percentage: 100 }
    ];

    return (
        <div className="w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] relative overflow-hidden my-8 sm:my-12 md:my-16 lg:my-20">
            <div className="flex flex-col lg:flex-row w-full h-full">
                <div className="w-full lg:w-1/2 bg-[#020a0c] px-6 py-8 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
                    <div className="max-w-lg mx-auto lg:mx-0">

                        <div className="mb-8 md:mb-12 lg:mb-16">
                            <div className="flex flex-wrap items-center gap-x-2 md:gap-x-4">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase text-white leading-none">
                                    Our
                                </h1>
                                <span className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] uppercase text-white leading-none">
                                    team
                                </span>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase text-white leading-none">
                                    Skills
                                </h1>
                            </div>
                        </div>

                        <div className="space-y-6 md:space-y-8 mb-6 md:mb-8">
                            {skills.map((skill, index) => (
                                <div key={index} className="relative">
                                    <div className="flex justify-between items-center mb-2">
                    <span className="text-sm md:text-base uppercase text-white font-medium">
                      {skill.name}
                    </span>
                                        <span className="text-sm md:text-base uppercase text-white">
                      {skill.percentage}%
                    </span>
                                    </div>
                                    <div className="w-full h-0.5 bg-white/20 relative">
                                        <div
                                            className="h-full bg-white transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-base md:text-lg text-white/70">
                            * Over 8 years creating templates on Marketplace.
                        </p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-auto relative overflow-hidden">
                    <img
                        src="/team/team-collaboration.png"
                        alt="Team collaboration"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};
