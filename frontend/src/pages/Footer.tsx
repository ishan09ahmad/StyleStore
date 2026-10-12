import { Link } from "react-router";
type FooterlistTye = {
  item: string;
  path: string;
};

const footerList1: FooterlistTye[] = [
  { item: "Home", path: "/" },
  { item: "Shop", path: "/shop" },
  { item: "About", path: "/about" },
  { item: "Contact", path: "/contact" },
];

const footerList2: FooterlistTye[] = [
  { item: "My Account", path: "/" },
  { item: "My Orders", path: "/" },
  { item: "Shipping & Returns", path: "/" },
  { item: "Order Tracking", path: "/" },
];
function Footer() {
  return (
    <footer className="bg-[#F5F0E8] ">
      <div className="mx-auto max-w-350 bg-[#F5F0E8] px-5 text-[#5F5A53] sm:px-8 lg:px-12">
        <section className="border-b border-[#DCD3C6] py-8 sm:py-10 ">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#111111]">
            Style<span className="font-light">Store</span>
          </h2>

          <p className="mt-3 text-sm font-medium">
            Timeless styles. Everyday confidence.
          </p>

          <p className="mt-2 max-w-md text-sm leading-6">
            Discover clothing essentials designed for your everyday wardrobe.
          </p>
        </section>

        <section className="grid grid-cols-2 gap-8 border-b border-[#DCD3C6] py-8 sm:py-10 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-bold text-[#111111]">
              Quick Links
            </h3>

            <ul className="flex flex-col items-start gap-3 text-sm">
              {footerList1.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="transition-colors duration-200 hover:text-black"
                  >
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-[#111111]">
              Customer Service
            </h3>

            <ul className="flex flex-col items-start gap-3 text-sm">
              {footerList2.map((item) => (
                <li key={item.item}>
                  <Link
                    to={item.path}
                    className="transition-colors duration-200 hover:text-black"
                  >
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <h3 className="mb-4 text-sm font-bold text-[#111111]">
              About StyleStore
            </h3>

            <p className="max-w-xs text-sm leading-6">
              Discover timeless fashion essentials designed for comfort,
              confidence, and everyday style.
            </p>
          </div>
        </section>

        <section className="py-5 text-center text-xs sm:text-sm">
          © 2026 StyleStore. All rights reserved.
        </section>
      </div>
    </footer>
  );
}

export default Footer;
