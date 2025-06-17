import Image from 'next/image';

interface BlogCardProps {
    imageUrl: string;
    date: string;
    category: string;
    title: string;
    className?: string;
}

export const BlogCard = ({
                             imageUrl,
                             date,
                             category,
                             title,
                             className = ''
                         }: BlogCardProps) => {
    return (
        <article className={`relative w-full h-auto ${className}`}>
            <div className="relative w-full aspect-square overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="mt-8 space-y-6">
                <div className="relative inline-block">

                    <span className="relative px-4 py-2 text-xs font-bold uppercase rounded-full border border-black">
                        {category}
                    </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase leading-tight">
                    {title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                    {date}
                </p>
            </div>
        </article>
    );
};