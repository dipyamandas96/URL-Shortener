import { ArrowUpRight, Heart } from "lucide-react";
import { BrandMark } from "./BrandMark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-slate-950">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/40 to-transparent"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 h-56 w-96 -translate-x-1/2 rounded-full bg-violet-600/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-300 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a
              href="#top"
              className="group inline-flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              aria-label="Back to top"
            >
              <span className="transition-transform duration-300 motion-safe:group-hover:-rotate-6">
                <BrandMark
                  gradientId="footerBrandGradient"
                  className="h-8 w-8"
                />
              </span>

              <span className="text-lg font-bold tracking-tighter text-white">
                shrinkly
                <span className="text-violet-400">.</span>
              </span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              Clean, reliable short links created and shared in seconds.
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
            aria-label="Footer navigation"
          >
            <a
              href="#shorten"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Shorten URL
            </a>

            <a
              href="#how-it-works"
              className="text-slate-400 transition-colors hover:text-white"
            >
              How it works
            </a>

            <a
              href="#check-clicks"
              className="group inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-violet-300"
            >
              Check clicks
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.07] pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} shrinkly. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            Built with
            <Heart
              className="h-3.5 w-3.5 fill-violet-400 text-violet-400"
              aria-hidden="true"
            />
            by
            <span className="font-medium text-slate-300">
              Akshay Chaudhary
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}