import { Activity, ArrowRight } from "lucide-react";
import { BrandMark } from "./BrandMark";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-slate-950/80 backdrop-blur-2xl">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-violet-400/40 to-transparent"
        aria-hidden="true"
      />

      <nav
        className="mx-auto flex h-18 max-w-300 items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
          aria-label="Shrinkly home"
        >
          <span className="transition-transform duration-300 motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-105">
            <BrandMark
              gradientId="navbarBrandGradient"
              className="h-9 w-9"
            />
          </span>

          <span className="text-xl font-bold tracking-[-0.055em] text-white">
            shrinkly
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden items-center gap-1 md:flex">
            <a
              href="#how-it-works"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-white/4 hover:text-white"
            >
              How it works
            </a>

            <a
              href="#benefits"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-white/4 hover:text-white"
            >
              Benefits
            </a>
          </div>

          <a
            href="#check-clicks"
            className="group inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-violet-300/20 bg-linear-to-r from-violet-600 to-indigo-500 px-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(109,40,217,0.28)] transition duration-200 hover:-translate-y-0.5 hover:border-violet-300/40 hover:brightness-110 hover:shadow-[0_12px_34px_rgba(109,40,217,0.38)] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transform-none sm:px-4"
          >
            <Activity className="h-4 w-4" aria-hidden="true" />

            <span className="hidden sm:inline">Check clicks</span>
            <span className="sm:hidden">Clicks</span>

            <ArrowRight
              className="hidden h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 sm:block"
              aria-hidden="true"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}