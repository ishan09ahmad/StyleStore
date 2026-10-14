import heroImage from "../assets/home/Hero.jpg";
import manImage from "../assets/home/man.jpg";
import womanImage from "../assets/home/woman.jpg";
import kidImage from "../assets/home/kid.jpg";
import tshirts from "../assets/tshirt.jpg";
import shirts from "../assets/shirts.jpg";
import denim from "../assets/denim.jpg";
import hoodies from "../assets/hoodie.jpg";
import { Link } from "react-router";

export default function Home() {
  const categories = [
    {
      name: "Men",
      image: manImage,
      alt: "Men's clothing collection",
    },
    {
      name: "Women",
      image: womanImage,
      alt: "Women's clothing collection",
    },
    {
      name: "Kids",
      image: kidImage,
      alt: "Kids' clothing collection",
    },
  ];

  const products = [
    {
      name: "Classic T-Shirt",
      price: "₹799",
      image: tshirts,
    },
    {
      name: "Essential Shirt",
      price: "₹1,299",
      image: shirts,
    },
    {
      name: "Classic Denim",
      price: "₹1,799",
      image: denim,
    },
    {
      name: "Everyday Hoodie",
      price: "₹1,499",
      image: hoodies,
    },
  ];

  return (
    <main className="bg-[#F5F0E8] min-h-[calc(100vh-64px)]">
   
      <section className="mx-auto grid max-w-350 grid-cols-1 items-center gap-10 px-4 py-8 sm:px-6 sm:py-12 md:py-16 md:grid-cols-2 md:gap-8 lg:gap-14 lg:py-20 border-b-4 border-white">
        <div className="flex items-center">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#75685A] sm:text-sm">
              Your style, your story
            </p>

            <h1 className="max-w-lg text-4xl leading-[1.1] font-semibold tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
              Wear what feels like you.
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-[#5F5A53] sm:text-lg">
              Discover everyday essentials and timeless pieces designed for
              your wardrobe.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-3 bg-[#111111] px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#333333]"
            >
              Shop Collection <span aria-hidden="true">→</span>
            </Link>

            <p className="mt-6 text-sm font-medium tracking-wide text-[#75685A]">
              Men <span className="mx-2">·</span> Women{" "}
              <span className="mx-2">·</span> Kids
            </p>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-xl">
          <img
            src={heroImage}
            alt="StyleStore clothing collection"
            className="h-72 w-full object-cover sm:h-96 md:h-100 lg:h-125"
          />
        </div>
      </section>

     
      <section className="mx-auto max-w-350 px-4 sm:px-6 py-12  md:py-16 lg:py-20 lg:pb-24 border-b-4 border-white">
        <div className="mb-8 text-center sm:mb-10 ">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#75685A]">
            Find your style
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
            Shop by Category
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#5F5A53] sm:text-base">
            Find your everyday look.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to="/shop"
              className={`group relative overflow-hidden rounded-xl ${
                category.name === "Kids"
                  ? "col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <img
                src={category.image}
                alt={category.alt}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80 lg:h-100"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-white sm:text-2xl">
                  {category.name}
                </h3>

                <span className="flex size-9 items-center justify-center rounded-full bg-white text-[#111111] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    
         <section className="mx-auto max-w-350 px-4 sm:px-6 py-12  md:py-16 lg:py-20 lg:pb-24 border-b-4 border-white">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#75685A]">
              Handpicked for you
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              Trending Now
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#5F5A53] sm:text-base">
              A curated selection of your latest favorites.
            </p>
          </div>

          <Link
            to="/shop"
            className="w-fit text-sm font-semibold text-[#111111] transition-colors hover:text-[#75685A]"
          >
            View all products →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 sm:gap-y-10 md:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <Link
              to="/shop"
              key={product.name}
              className="group min-w-0"
            >
              <div className="aspect-3/4 overflow-hidden rounded-xl bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="pt-3">
                <h3 className="text-sm font-medium text-[#111111] sm:text-base">
                  {product.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-[#5F5A53]">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      
       <section className="mx-auto max-w-350 flex flex-col items-center justify-center px-4 sm:px-6 py-12  md:py-16 lg:py-20 lg:pb-24 ">
      

        <h2 className="text-2xl font-semibold tracking-tight text-[#111111] sm:text-3xl lg:text-4xl">
          Style that lasts beyond trends.
        </h2>

        <p className="mx-auto mt-4  max-w-md text-sm leading-6 text-[#75685A] sm:text-base">
          Simple pieces. Endless combinations.
        </p>

        <Link
          to="/shop"
          className="items-center flex gap-3 text-[#111111] px-6 pt-3.5  font-semibold text-xl"
        >
          Explore the collection <span aria-hidden="true">→</span>
        </Link>
      </section>

    </main>
  );
}
