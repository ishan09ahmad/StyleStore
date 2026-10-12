import { Link } from "react-router";
import { Shirt, Heart, User } from "lucide-react";
import image from "../assets/image.jpg";

export default function About() {
  return (
    <div className="bg-[#F5F0E8]">

      <section className="w-full border-b border-[#DCD3C6]">
        <div className="mx-auto flex max-w-350 flex-col items-center justify-center gap-4 px-4 py-12 text-center sm:px-6 sm:py-18 ">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#75685A] sm:text-sm">
            The StyleStore Story
          </p>

          <h1 className="max-w-3xl text-2xl leading-tight font-semibold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
            Style is personal. Your wardrobe should be too.
          </h1>

          <p className="max-w-xl text-sm leading-6 text-[#5F5A53] sm:text-base sm:leading-7">
            Everyday essentials. Timeless pieces. A style that's yours.
          </p>
        </div>
      </section>



      <section className="mx-auto grid max-w-350 grid-cols-1 items-center gap-8 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="overflow-hidden rounded-xl">
          <img
            src={image}
            alt="StyleStore clothing collection"
            className="h-72 w-full object-cover sm:h-96 md:h-110"
          />
        </div>

        <div className="py-2 md:py-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#75685A]">
            Who We Are
          </p>

          <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
            More than just clothing.
          </h2>

          <p className="mt-5 max-w-lg text-base leading-7 text-[#5F5A53]">
            A simple approach to everyday fashion, built around comfort,
            versatility, and individuality.
          </p>

          <p className="mt-4 max-w-lg text-sm leading-7 text-[#5F5A53] sm:text-base">
            We believe personal style should feel effortless. Discover everyday
            pieces that fit your lifestyle and let you express yourself with
            confidence.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-flex items-center gap-3 bg-[#111111] px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#333333]"
          >
            Explore Collection <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-350">
          <div className="mb-10 text-center sm:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#75685A]">
              What Matters to Us
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              Our Everyday Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
            <div className="rounded-xl border border-[#DCD3C6] bg-[#F5F0E8] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
              <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-[#E7DED1] text-[#75685A]">
                <Shirt size={23} strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-semibold text-[#111111]">Timeless</h3>

              <p className="mt-3 text-sm leading-6 text-[#5F5A53] sm:text-base">
                Versatile pieces that work beyond seasonal trends.
              </p>
            </div>

            <div className="rounded-xl border border-[#DCD3C6] bg-[#F5F0E8] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
              <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-[#E7DED1] text-[#75685A]">
                <Heart size={23} strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-semibold text-[#111111]">Comfort</h3>

              <p className="mt-3 text-sm leading-6 text-[#5F5A53] sm:text-base">
                Styles designed to fit naturally into your daily life.
              </p>
            </div>

            <div className="rounded-xl border border-[#DCD3C6] bg-[#F5F0E8] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
              <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-[#E7DED1] text-[#75685A]">
                <User size={23} strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-semibold text-[#111111]">
                Individuality
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#5F5A53] sm:text-base">
                Fashion is personal. Express yourself in your own way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-350 px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24 border-b-4 border-white">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#75685A]">
          Your style journey
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
          Find your kind of style.
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#5F5A53] sm:text-base">
          Discover pieces that feel like you.
        </p>

        <Link
          to="/shop"
          className="mt-7 inline-flex items-center gap-3 bg-[#111111] px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#333333]"
        >
          Explore Collection <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
