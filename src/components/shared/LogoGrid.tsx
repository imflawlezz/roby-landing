import Image from 'next/image';

export const LogoGrid = () => {
    const logos = [
        { src: '/logos/iceberg.svg', alt: 'Iceberg' },
        { src: '/logos/vision.svg', alt: 'Vision' },
        { src: '/logos/homey.svg', alt: 'Homey' },
        { src: '/logos/rise.svg', alt: 'Rise' },
        { src: '/logos/pinpoint.svg', alt: 'Pinpoint' },
    ];

    return (
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 transition-all duration-300 hover:scale-110"
                        style={{
                            width: 'clamp(80px, 18vw, 120px)',
                            height: 'clamp(20px, 4.5vw, 30px)'
                        }}
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={120}
                            height={30}
                            className="h-full w-full object-contain"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};