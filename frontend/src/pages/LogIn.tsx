import { Link } from "react-router";
import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";
export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <main className="bg-[#F5F0E8] min-h-[calc(100vh-64px)] px-4 sm:px-6 py-10 flex items-center justify-center">
      <section className="bg-white mx-auto rounded-2xl border border-[#E5DED4] shadow-sm w-full max-w-115 p-6 sm:p-8">

        <div className="mb-6">
          <h2 className="font-semibold text-2xl mb-2 text-[#111111] tracking-tight text-center">
            Welcome back
          </h2>

          <p className="font-light text-[#5F5A53] text-sm tracking-tight text-center">
            Sign in to your StyleStore account
          </p>
        </div>

        <form className="w-full space-y-5">
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

          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#111111]"
            >
              Password
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="w-full h-12 px-4 pr-10 rounded-lg text-sm text-[#111111] placeholder:text-[#8A837A] border border-[#DCD3C6] transition-all duration-200 outline-none focus:border-[#75685A] focus:ring-2 focus:ring-[#75685A]/20 "
              />
             <button
  type="button"
  onClick={() => setShowPassword((prev) => !prev)}
  aria-label={showPassword ? "Hide password" : "Show password"}
  className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2"
>
  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
</button>
            </div>

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-[#5F5A53] transition-colors duration-200 hover:text-[#111111] hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-[#111111] text-white text-sm font-medium transition-colors duration-200 hover:bg-[#333333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75685A] focus-visible:ring-offset-2 cursor-pointer"
          >
            Sign In →
          </button>
        </form>

        <p className="text-sm text-[#5F5A53] text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-[#111111] transition-colors duration-200 hover:text-[#75685A] hover:underline"
          >
            Sign up
          </Link>
        </p>
        
      </section>
    </main>
  );
}
