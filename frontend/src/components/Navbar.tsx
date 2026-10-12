import { Link, NavLink, useLocation } from "react-router";
import { Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type ItemsType = {
  item: string;
  path: string;
};

const items: ItemsType[] = [
  { item: "Home", path: "/" },
  { item: "Shop", path: "/shop" },
  { item: "About", path: "/about" },
  { item: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showLogout, setShowLogout] = useState<boolean>(false);

  const isAppLoading: boolean = false;
  const userLoggedIn: boolean = false;
  const cartCount: number = 2;

  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setShowLogout(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#DCD3C6] bg-[#F5F0E8] shadow-sm">
      <nav className="relative mx-auto flex h-16 max-w-350 items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="shrink-0 text-xl font-extrabold tracking-tight text-[#111111] min-[400px]:text-2xl sm:text-[28px]"
        >
          Style<span className="font-light">Store</span>
        </Link>

        <div className="hidden items-center justify-center gap-8 md:flex">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors duration-200
                after:absolute after:bottom-0 after:left-0 after:h-0.5
                after:bg-[#111111] after:transition-all after:duration-300
                ${
                  isActive && !isAppLoading
                    ? "text-[#111111] after:w-full"
                    : "text-[#5F5A53] after:w-0 hover:text-[#111111] hover:after:w-full"
                }`
              }
            >
              {isAppLoading ? (
                <div className="h-5 w-16 animate-pulse rounded-full bg-[#DCD3C6]" />
              ) : (
                item.item
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4 sm:gap-5">
          {userLoggedIn &&
            (isAppLoading ? (
              <div className="size-5 animate-pulse rounded-full bg-[#DCD3C6]" />
            ) : (
              <Link
                to="/wishlist"
                aria-label="Wishlist"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#111111]"
              >
                <Heart className="size-5 stroke-[1.6] transition-transform duration-200 hover:scale-110" />
              </Link>
            ))}

          {isAppLoading ? (
            <div className="size-5 animate-pulse rounded-full bg-[#DCD3C6]" />
          ) : userLoggedIn ? (
            <div className="relative">
              <button
                type="button"
                aria-label="Profile menu"
                aria-expanded={showLogout}
                onClick={() => setShowLogout((prev) => !prev)}
                className="flex size-7 items-center justify-center rounded-full bg-[#111111] text-xs font-semibold text-white cursor-pointer"
              >
                U
              </button>

              {showLogout && (
                <div className="absolute right-0 top-full z-50 mt-2 min-w-24 rounded-md border border-[#DCD3C6] bg-white py-1 shadow-md">
                  <button
                    type="button"
                    onClick={() => setShowLogout(false)}
                    className="block w-full cursor-pointer px-3 py-2 text-left text-sm text-[#5F5A53] hover:bg-[#F5F0E8] hover:text-[#111111]"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              aria-label="Login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center text-[#111111]"
            >
              <User className="size-6 stroke-[1.6] transition-transform duration-200 hover:scale-110" />
            </Link>
          )}

          {isAppLoading ? (
            <div className="size-5 animate-pulse rounded-full bg-[#DCD3C6]" />
          ) : (
            <Link
              to="/cart"
              aria-label={`Cart, ${cartCount} items`}
              onClick={() => setMobileMenuOpen(false)}
              className="relative flex items-center justify-center text-[#111111]"
            >
              <ShoppingCart className="size-5 stroke-[1.6] transition-transform duration-200 hover:scale-110" />

              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-[#111111] text-[10px] font-medium text-white">
                  {cartCount > 50 ? "50+" : cartCount}
                </span>
              )}
            </Link>
          )}

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="relative flex size-7 items-center justify-center text-[#111111] sm:hidden"
          >
            <Menu
              className={`absolute size-6 transition-all duration-300 ${
                mobileMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            />
            <X
              className={`absolute size-6 transition-all duration-300 ${
                mobileMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            />
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-16 flex flex-col overflow-hidden
            border-b border-[#DCD3C6] bg-[#F5F0E8] shadow-md
            transition-[max-height] duration-300 ease-in-out sm:hidden
            ${
              mobileMenuOpen
                ? "max-h-96"
                : "max-h-0 border-b-transparent shadow-none"
            }`}
        >
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex h-14 items-center border-b border-[#DCD3C6] px-6
                text-sm font-medium transition-colors duration-200
                hover:bg-[#EAE2D8] hover:text-[#111111]
                ${
                  isActive && !isAppLoading
                    ? "bg-[#EAE2D8] text-[#111111]"
                    : "text-[#5F5A53]"
                }`
              }
            >
              {isAppLoading ? (
                <div className="h-5 w-24 animate-pulse rounded-full bg-[#DCD3C6]" />
              ) : (
                item.item
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
