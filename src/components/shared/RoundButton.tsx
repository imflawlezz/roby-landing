import Link from 'next/link';

interface RoundButtonProps {
    variant?: 'white' | 'black';
    href?: string;
    className?: string;
    text?: [string, string]; // [first line, second line]
}

export const RoundButton = ({
                                variant = 'black',
                                href = '#',
                                className = '',
                                text = ['work', 'with us']
                            }: RoundButtonProps) => {
    const baseStyles = 'group relative rounded-full cursor-pointer transition-all';
    const sizeStyles = 'h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32';

    const variantStyles = {
        'black': {
            border: 'border-2 border-black',
            background: 'bg-black',
            text: 'text-white',
            hoverBackground: 'group-hover:bg-gray-900'
        },
        'white': {
            border: 'border-2 border-white',
            background: 'bg-white',
            text: 'text-black',
            hoverBackground: 'group-hover:bg-gray-100'
        }
    };

    const currentVariant = variantStyles[variant];

    const buttonContent = (
        <div className={`${baseStyles} ${sizeStyles} ${className}`}>
            <div className={`absolute h-full w-full rounded-full ${currentVariant.border} transition-all group-hover:scale-105`} />

            <div className={`flex h-full w-full items-center justify-center rounded-full ${currentVariant.background} ${currentVariant.text} ${currentVariant.hoverBackground} transition-transform group-hover:scale-100`}>
                <div className="text-center text-xs uppercase md:text-sm">
                    <p>{text[0]}</p>
                    <p>{text[1]}</p>
                </div>
            </div>
        </div>
    );

    return href ? (
        <Link href={href} passHref>
            {buttonContent}
        </Link>
    ) : (
        <button type="button">
            {buttonContent}
        </button>
    );
};