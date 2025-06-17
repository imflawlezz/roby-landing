import React from 'react';
import {CodeIcon, CoffeeIcon, TrophyIcon} from "@/components/icons/FactsIcons";


export const Facts = () => {
    const facts = [
        {
            number: "8",
            label: "Years on market",
            icon: TrophyIcon
        },
        {
            number: "110+",
            label: "Project done",
            icon: CodeIcon
        },
        {
            number: "15",
            label: "Hero's member",
            icon: null
        },
        {
            number: "100+",
            label: "Cups of coffee",
            icon: CoffeeIcon
        }
    ];

    return (
        <section className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <div className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-3">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-black">
                            Fun
                        </h1>
                        <span className="text-2xl md:text-3xl lg:text-[37px] uppercase text-black">
                            Facts
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {facts.map((fact, index) => (
                        <div key={index} className="flex items-center gap-3 md:gap-4 lg:gap-6 group">

                            {fact.icon && (
                                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    <fact.icon className="w-12 h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px]" />
                                </div>
                            )}

                            <div className="flex flex-col">
                                <div className="mb-1">
                  <span className="text-3xl md:text-4xl lg:text-5xl xl:text-[53px] font-bold uppercase text-black leading-none">
                    {fact.number}
                  </span>
                                </div>

                                <p className="text-base md:text-lg lg:text-[19px] text-[#747474] leading-tight">
                                    {fact.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
