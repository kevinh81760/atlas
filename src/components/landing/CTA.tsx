import Link from 'next/link';

export function CTA() {
  return (
    <section className="flex flex-col items-center bg-white py-[120px] px-20 gap-8">
      <h2 className="text-[64px] font-extrabold text-black text-center">
        Ready to organize your life?
      </h2>
      <p className="text-[22px] text-[#71717A] text-center">
        Join thousands of people who use Atlas to get things done.
      </p>
      <Link
        href="/login"
        className="bg-black text-white font-semibold text-xl px-12 py-5 rounded-full hover:bg-black/90 transition-colors"
      >
        Get Started for Free
      </Link>
    </section>
  );
}
