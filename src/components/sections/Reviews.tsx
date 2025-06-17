import {ReviewSlider} from "@/components/shared/ReviewSlider";

export const Reviews = () => {
    return (
        <section className="mb-8 sm:mb-9 md:mb-12 lg:mb-16">
            <div
                className="flex items-center justify-center gap-3 mb-12 md:mb-20"
            >
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-center uppercase text-black">
                    what
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl text-center uppercase text-black">
                    they
                </p>
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-center uppercase text-black">
                    think
                </p>
            </div>
            <ReviewSlider />
        </section>
    );
}