'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-neutral-300 py-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-2">Codeservir.in</h2>
          <p className="text-sm">
            Your daily dose of tech, tutorials, tools, and career growth.
            Focused on India's digital rise and empowering creators.
          </p>
        </div>

        {/* Pages / Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/newsletter" className="hover:text-white transition">Newsletter</Link></li>
            <li><Link href="/public-note" className="hover:text-white transition">Public Notes</Link></li>
          </ul>
        </div>

        {/* Resources or Tools */}
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://codeservir.com" className="hover:text-white transition">Codeservir Tools</a></li>
            <li><a href="https://codingofworld.com" className="hover:text-white transition">Coding of World</a></li>
            <li><a href="https://www.figma.com" className="hover:text-white transition">Figma UI</a></li>
          </ul>
        </div>

        {/* Address / Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm mb-2">DIFMO PRIVATE LIMITED</p>
          <p className="text-sm">India – 110001</p>
          <p className="text-sm">Email: support@codeservir.in</p>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-neutral-500 border-t border-neutral-800 pt-4">
        © {new Date().getFullYear()} Codeservir.in. All rights reserved.
      </div>
    </footer>
  );
}
 