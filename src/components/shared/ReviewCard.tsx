import Image from 'next/image';

interface ReviewCardProps {
    quote: string;
    name: string;
    title: string;
    imageUrl: string;
    className?: string;
}

export const ReviewCard = ({
                               quote,
                               name,
                               title,
                               imageUrl,
                               className = ''
                           }: ReviewCardProps) => {
    return (
        <div className={`relative w-full max-w-lg p-6 sm:p-8 rounded bg-white border border-black ${className}`}>
            <p className="text-lg sm:text-xl text-center mb-12 sm:mb-16">
                &ldquo;{quote}&rdquo;
            </p>

            <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-4">
                    <Image
                        src={imageUrl}
                        alt={`${name} portrait`}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex gap-2 mb-1">
                    <p className="text-base sm:text-[17px] uppercase text-center">
                        {name.split(' ')[0]}
                    </p>
                    <p className="text-base sm:text-[17px] uppercase text-center">
                        {name.split(' ')[1]}
                    </p>
                </div>

                <p className="text-base sm:text-[17px] text-[var(--paragraph)] text-center">
                    {title}
                </p>
            </div>
        </div>
    );
};