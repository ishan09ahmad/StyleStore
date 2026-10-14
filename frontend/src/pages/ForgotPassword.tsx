import { Link } from "react-router";
import { Mail } from "lucide-react";

export default function ForgotPassword() {
  return (
    <main className="bg-[#F5F0E8] min-h-[calc(100vh-64px)] px-4 sm:px-6 py-10 flex items-center justify-center">
      <section className="bg-white mx-auto rounded-2xl border border-[#E5DED4] shadow-sm w-full max-w-115 p-6 sm:p-8">


        <div className="bg-[#EAE2D6] rounded-full p-3 flex items-center justify-center mx-auto w-fit mb-4">
          <Mail size={25} strokeWidth={1.5} color="#75685A" />
        </div>

        <div className="mb-6">
          <h2 className="font-semibold text-2xl mb-2 text-[#111111] tracking-tight text-center">
            Forgot your password?
          </h2>

          <p className="font-light text-[#5F5A53] text-sm tracking-tight text-center">
            Enter your registered email and we'll help you reset your password.
          </p>
        </div>

        <form className="w-full space-y-6">
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#111111]"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="w-full h-12 px-4 border border-[#DCD3C6] rounded-lg bg-white text-sm text-[#111111] placeholder:text-[#8A837A] outline-none transition-all duration-200 focus:border-[#75685A] focus:ring-2 focus:ring-[#75685A]/20"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-[#111111] text-white text-sm font-medium transition-colors duration-200 hover:bg-[#333333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75685A] focus-visible:ring-offset-2 cursor-pointer"
          >
            Send Reset Link →
          </button>
        </form>

        <p className="text-sm text-[#5F5A53] text-center mt-6 hover:underline">
          <Link to="/login">← Back to login</Link>
        </p>

      </section>
    </main>
  );
}
