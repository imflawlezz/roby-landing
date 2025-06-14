import Image from 'next/image';

export const Hero = () => {
    return (
        <div className="relative h-screen max-h-[350px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[600px] w-full overflow-hidden">
            <div className="absolute inset-0 z-0 lg:w-1/2">
                <Image
                    src="/hero.png"
                    alt="Hero background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30 lg:bg-transparent" />
            </div>

            <div className="relative z-10 flex h-full">
                <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
                </div>

                <div className="flex w-full items-center justify-center px-6 lg:w-1/2 lg:justify-start lg:pl-12 lg:pr-8">
                    <div className="w-full max-w-lg text-left">
                        <div className="mb-6 md:mb-8">
                            <p className="text-2xl uppercase leading-tight text-white md:text-3xl lg:text-black lg:text-4xl xl:text-5xl">
                                <span className="font-bold">&ldquo;We believe that</span><br/>
                                <span className="text-xl font-regular md:text-2xl lg:text-3xl xl:text-4xl">the power of design</span><br/>
                                <span className="font-bold">helps</span><br/>
                                <span className="font-bold">businesses.&rdquo;</span>
                            </p>
                        </div>

                        <div className="flex justify-start">
                            <div className="group relative h-24 w-24 cursor-pointer md:h-28 md:w-28 lg:h-32 lg:w-32">
                                <div className="absolute h-full w-full rounded-full border-2 border-white transition-all group-hover:scale-105 lg:border-black" />
                                <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-black transition-all group-hover:scale-100 group-hover:bg-gray-100 lg:bg-black lg:text-white lg:group-hover:bg-gray-900">
                                    <div className="text-center text-xs uppercase md:text-sm">
                                        <p>work</p>
                                        <p>with us</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};