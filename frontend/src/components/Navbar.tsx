import { Link, NavLink } from "react-router";
import { Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import {  useState } from "react";

export default function Navbar() {
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const isAppLoading: boolean = false;
  const userLoggedIn: boolean = true;
  const cartCount: number = 2;



  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="relative mx-auto flex h-16 max-w-350 items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="shrink-0 text-2xl font-extrabold tracking-tight text-black sm:text-[28px]"
        >
          Style<span className="font-light">Store</span>
        </Link>

        <div className="hidden items-center justify-center gap-8 sm:flex">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium transition-colors duration-200
                after:absolute after:bottom-0 after:left-0 after:h-.5
                after:bg-black after:transition-all after:duration-300
                ${
                  isActive && !isAppLoading
                    ? "text-black after:w-full"
                    : "text-gray-500 after:w-0 hover:text-black hover:after:w-full"
                }`
              }
            >
              {isAppLoading ? (
                <div className="h-5 w-16 animate-pulse rounded-full bg-gray-200" />
              ) : (
                item.item
              )}
            </NavLink>
          ))}
        </div>

        {/* Right-side Actions */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Wishlist: logged-in users only */}
          {userLoggedIn &&
            (isAppLoading ? (
              <div className="size-5 animate-pulse rounded-full bg-gray-200" />
            ) : (
              <Link to="/wishlist" aria-label="Wishlist" className="text-black">
                <Heart className="size-[21px] stroke-[1.6] transition-transform duration-200 hover:scale-110" />
              </Link>
            ))}

  
          {isAppLoading ? (
            <div className="size-5 animate-pulse rounded-full bg-gray-200" />
          ) : (
            <Link
              to={userLoggedIn ? "/profile" : "/login"}
              aria-label={userLoggedIn ? "Profile" : "Login"}
              className="flex items-center justify-center text-black"
            >
              {userLoggedIn ? (
                <span className="flex size-7 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
                  U
                </span>
              ) : (
                <User className="size-[21px] stroke-[1.6] transition-transform duration-200 hover:scale-110" />
              )}
            </Link>
          )}

      
          {isAppLoading ? (
            <div className="size-5 animate-pulse rounded-full bg-gray-200" />
          ) : (
            <Link
              to="/cart"
              aria-label={`Cart, ${cartCount} items`}
              className="relative flex items-center justify-center text-black"
            >
              <ShoppingCart className="size-[21px] stroke-[1.6] transition-transform duration-200 hover:scale-110" />

              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white">
                  {cartCount > 50 ? "50+" : cartCount}
                </span>
              )}
            </Link>
          )}

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="relative flex size-7 items-center justify-center text-black sm:hidden"
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
          className={`absolute left-0 right-0 top-16 flex flex-col overflow-hidden
            border-b border-gray-200 bg-white shadow-lg
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
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex h-14 items-center border-b border-gray-100 px-6
                text-sm font-medium transition-colors duration-200
                hover:bg-gray-50 hover:text-black
                ${
                  isActive && !isAppLoading
                    ? "bg-gray-50 text-black"
                    : "text-gray-600"
                }`
              }
            >
              {isAppLoading ? (
                <div className="h-5 w-24 animate-pulse rounded-full bg-gray-200" />
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
