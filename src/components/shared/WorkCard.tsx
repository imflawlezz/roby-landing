import Image from 'next/image';

interface WorkCardProps {
    imageUrl: string;
    title: string;
    categories: string;
}

export const WorkCard = ({ imageUrl, title, categories }: WorkCardProps) => {
    return (
        <div className="w-full sm:max-w-md md:max-w-md lg:max-w-lg group">
            <div className="relative w-full h-auto overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={470}
                    height={502}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col items-center mt-10">
                <h3 className="text-base sm:text-lg md:text-xl font-bold uppercase text-black leading-none">
                    {title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[var(--paragraph)]">
                    {categories}
                </p>
            </div>
        </div>
    );
};