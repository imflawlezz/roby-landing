import Image from "next/image";

export const Brand = () => {
    return (
        <div className="overflow-x-hidden">
            <section className="relative my-16 sm:my-18 md:my-24 lg:my-32 px-4 sm:px-10 md:px-20 lg:px-30 max-w-screen-xl mx-auto min-h-[600px] flex items-center">
                <div className="w-full lg:w-1/2 z-10">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight text-black">
                    Improve <span className="font-light">your brand </span>
                    with an awesome site.
                    </span>

                    <div className="mt-12 space-y-10">
                        <div>
                            <div className="flex items-baseline gap-3">
                                <p className="text-xl sm:text-2xl font-bold uppercase text-black">Comprehensive</p>
                                <span className="text-base sm:text-lg uppercase text-black">Brand</span>
                            </div>
                            <p className="mt-2 text-gray-500 text-base sm:text-lg max-w-md">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-baseline gap-3">
                                <p className="text-xl sm:text-2xl font-bold uppercase text-black">Web</p>
                                <span className="text-base sm:text-lg uppercase text-black">Presence</span>
                            </div>
                            <p className="mt-2 text-gray-500 text-base sm:text-lg max-w-md">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block absolute top-0 right-[-100px] h-full z-0 pointer-events-none">
                    <Image
                        src="/brand.png"
                        alt="Tablet"
                        width={1000}
                        height={650}
                        className="h-full max-h-[653px] w-auto object-contain"
                    />
                </div>
            </section>
        </div>
    );
};
