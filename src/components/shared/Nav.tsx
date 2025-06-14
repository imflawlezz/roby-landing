import Link from 'next/link';

export const Nav = () => {
    return (
        <nav className="flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/">About</NavLink>
            <NavLink href="/">News</NavLink>
            <NavLink href="/">Contact</NavLink>

            <div className="flex items-center gap-1 transition-transform hover:translate-y-2">
                <span className="text-lg font-bold">Cart</span>
                <span className="text-base">(</span>
                <span className="text-[15px] text-gray-500">0</span>
                <span className="text-base">)</span>
            </div>
        </nav>
    );
};

const NavLink = ({ href, children }: { href: string; children: string }) => {
    return (
        <Link href={href} className="group relative overflow-hidden py-1">
      <span className="block text-lg font-bold transition-transform group-hover:translate-y-2">
        {children}
      </span>
        </Link>
    );
};