import Link from "next/link";

export const Nav = () => {
    return (
        <nav className="flex items-center gap-6 xl:gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/">About</NavLink>
            <NavLink href="/">News</NavLink>
            <NavLink href="/">Contact</NavLink>

            <div className="flex items-center gap-1 transition-transform hover:-translate-y-0.5 ml-4">
                <span className="text-lg font-bold">Cart</span>
                <span className="text-[15px] text-gray-500">(0)</span>
            </div>
        </nav>
    );
};

export const MobileNav = ({ toggleMenu }: { toggleMenu: () => void }) => {
    return (
        <nav className="flex flex-col gap-6">
            <MobileNavLink href="/" toggleMenu={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink href="/" toggleMenu={toggleMenu}>About</MobileNavLink>
            <MobileNavLink href="/" toggleMenu={toggleMenu}>News</MobileNavLink>
            <MobileNavLink href="/" toggleMenu={toggleMenu}>Contact</MobileNavLink>

            <div className="flex items-center gap-2 pt-4">
                <span className="text-lg font-bold">Cart</span>
                <span className="text-gray-500">(0)</span>
            </div>
        </nav>
    );
};

const NavLink = ({ href, children }: { href: string; children: string }) => {
    return (
        <Link href={href} className="group relative overflow-hidden py-1">
      <span className="block text-lg font-bold transition-transform group-hover:-translate-y-0.5">
        {children}
      </span>
        </Link>
    );
};

const MobileNavLink = ({ href, children, toggleMenu }: { href: string; children: string; toggleMenu: () => void }) => {
    return (
        <Link
            href={href}
            className="text-2xl font-bold py-2"
            onClick={toggleMenu}
        >
            {children}
        </Link>
    );
};