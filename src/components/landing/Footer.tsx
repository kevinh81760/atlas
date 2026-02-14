import Link from 'next/link';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security'],
  Company: ['About', 'Blog', 'Careers'],
  Resources: ['Documentation', 'Help Center', 'Community'],
};

export function Footer() {
  return (
    <footer className="bg-[#FAFAFA] px-20 pt-[60px] pb-10 flex flex-col gap-12">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-4 w-[300px]">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-black" />
            <span className="font-bold text-lg text-black">Atlas</span>
          </Link>
          <p className="text-sm text-[#71717A] leading-[1.5]">
            The connected workspace for modern teams
          </p>
        </div>
        <div className="flex gap-[60px]">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-black">{category}</h4>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-[#71717A] hover:text-black transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="pt-6">
        <p className="text-sm text-[#A1A1AA]">
          &copy; {new Date().getFullYear()} Atlas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
