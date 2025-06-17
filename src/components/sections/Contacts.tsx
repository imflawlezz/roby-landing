import { RoundButton } from "@/components/shared/RoundButton";

export const Contacts = () => {
    return (
        <section className="relative w-full bg-[#020a0c] py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="flex flex-row items-center justify-between gap-8">
                    <div className="text-white">
                        <div className="">
                            <div className="uppercase leading-none flex gap-x-4 items-center">
                                <span className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl">Let&#39;s</span>
                                <span className="font-thin text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Talk</span>
                            </div>

                            <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-white/50">
                                Feel free to contact us
                            </p>
                        </div>
                    </div>

                    <div className="">
                        <RoundButton
                            variant="white"
                            text={['view on', 'designer']}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};