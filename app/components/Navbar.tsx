import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/news', label: 'Newsletter' },
  { href: '/public-note', label: 'Notes' }
];

export default function Navbar() {
  return (
    <nav className="flex gap-6 text-sm font-medium">
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="text-neutral-300 hover:text-white transition duration-300 ease-in-out relative group"
        >
          <span>{label}</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
}