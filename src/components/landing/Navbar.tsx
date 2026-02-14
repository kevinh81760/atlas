import Link from 'next/link';

export function Navbar() {
  return (
    <header className="flex items-center justify-between px-20 h-[85px] bg-white w-full border-b border-[#E4E4E7]">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-black" />
        <span className="font-bold text-xl text-black">Atlas</span>
      </div>
      <div className="flex items-center gap-8">
        <Link href="/login" className="text-[#71717A] text-base hover:text-black transition-colors">
          Log in
        </Link>
        <Link
          href="/login"
          className="bg-black text-white font-semibold text-base px-6 py-3 rounded-lg hover:bg-black/90 transition-colors"
        >
          Get Atlas Free
        </Link>
      </div>
    </header>
  );
}
