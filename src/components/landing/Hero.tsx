import Link from 'next/link';

export function Hero() {
  return (
    <section className="flex flex-col items-center bg-white pt-[120px] pb-20 px-20 gap-10">
      <div className="flex flex-col items-center gap-6 max-w-[900px]">
        <h1 className="text-[72px] font-extrabold text-black text-center leading-[1.1]">
          Your wiki, docs, &amp;{'\n'}projects. Together.
        </h1>
        <p className="text-2xl text-[#71717A] text-center leading-[1.4] max-w-[700px]">
          Atlas is the connected workspace where better,{'\n'}faster work happens.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="bg-black text-white font-semibold text-lg px-8 py-4 rounded-lg hover:bg-black/90 transition-colors"
          >
            Get Started  →
          </Link>
          <Link
            href="#demo"
            className="font-semibold text-lg text-black px-8 py-4 rounded-lg border-2 border-black hover:bg-black/5 transition-colors"
          >
            View Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
