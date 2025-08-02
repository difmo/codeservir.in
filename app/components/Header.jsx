import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-[#1e1e1e] text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-lg font-semibold">Codeservir.in </span>
        <Navbar />
      </div>
    </header>
  );
}