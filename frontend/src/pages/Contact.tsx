import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#F5F0E8]">
   
      <section className="mx-auto flex max-w-350 flex-col items-center justify-center gap-4 px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#75685A]">
          We're here to help
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">
          Let's talk.
        </h1>

        <p className="max-w-xl text-sm leading-7 text-[#5F5A53] sm:text-base">
          Questions about your order or our collection? We'd love to hear from
          you.
        </p>
      </section>

     
      <section className="mx-auto grid max-w-350 grid-cols-1 gap-6 px-4 pb-16 sm:px-6 sm:pb-20 md:grid-cols-2 lg:gap-8">
      
        <div className="rounded-xl bg-[#111111] p-6 text-white sm:p-8 lg:p-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Get in touch</h2>

          <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
            Have a question? Send us a message. We're happy to help.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <div className="flex items-center gap-3">
                <Mail size={22} strokeWidth={1.7} className="text-[#DCD3C6]" />
                <h3 className="text-base font-medium">Email</h3>
              </div>

              <p className="mt-2 pl-9 text-sm leading-6 text-white/70">
                Customer support
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <MessageCircle
                  size={22}
                  strokeWidth={1.7}
                  className="text-[#DCD3C6]"
                />
                <h3 className="text-base font-medium">Support</h3>
              </div>

              <p className="mt-2 pl-9 text-sm leading-6 text-white/70">
                Questions about orders and products.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/20 pt-6">
            <p className="text-sm leading-6 text-white/70">
              Thank you for choosing StyleStore.
            </p>
          </div>
        </div>

    
        <div className="rounded-xl bg-white p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl font-semibold text-[#111111] sm:text-3xl">
            Send a message
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#5F5A53]">
            Fill in the details below and tell us how we can help.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="mt-8 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-[#111111]"
              >
                Full name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                required
               
                className="w-full rounded-lg border border-[#DCD3C6] px-4 py-3 text-sm text-[#111111] outline-none transition focus:border-[#75685A]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#111111]"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-[#DCD3C6] px-4 py-3 text-sm text-[#111111] outline-none transition focus:border-[#75685A]"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-[#111111]"
              >
                Subject
              </label>

              <select
                id="subject"
                name="subject"
                defaultValue=""
                required
                className="w-full rounded-lg border border-[#DCD3C6] bg-white px-4 py-3 text-sm text-[#5F5A53] outline-none transition focus:border-[#75685A]"
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="order">Order support</option>
                <option value="product">Product question</option>
                <option value="returns">Returns and refunds</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[#111111]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="How can we help you?"
                required
             
                className="w-full resize-y rounded-lg border border-[#DCD3C6] px-4 py-3 text-sm text-[#111111] outline-none transition focus:border-[#75685A]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 bg-[#111111] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#333333] sm:w-auto"
            >
              Send Message <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>


      </section>
    </div>
  );
}
