import { LogoGrid } from "@/components/shared/LogoGrid";

export const Partners = () => {
    return (
        <section className="my-16 sm:my-12 md:my-20 lg:my-32 px-4 sm:px-6">
            <div className="container mx-auto flex items-center justify-center mb-12 sm:mb-8 md:mb-12 lg:mb-16">
                <div className="max-w-sm sm:max-w-xl flex flex-wrap items-baseline justify-items-start sm:justify-center gap-x-2 gap-y-1 text-center sm:gap-4 sm:text-left">
                    <p className="text-3xl sm:text-lg md:text-xl lg:text-2xl uppercase whitespace-nowrap">
                        We partner with
                    </p>
                    <p className="text-2xl underline sm:no-underline sm:text-base md:text-lg lg:text-xl uppercase whitespace-nowrap">
                        forward-thinking
                    </p>
                    <p className="text-3xl sm:text-lg md:text-xl lg:text-2xl uppercase whitespace-nowrap">
                        startups.
                    </p>
                </div>
            </div>
            <LogoGrid />
        </section>
    );
};