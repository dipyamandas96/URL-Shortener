import { Navbar } from "@/app/components/layout/Navbar";
import { UrlShortenerForm } from "@/app/components/url-shortner/UrlShortenerForm";

import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Zap,
  BarChart3
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    label: "No account required"
  },
  {
    icon: Zap,
    label: "Generated instantly"
  },
  {
    icon: CheckCircle2,
    label: "Simple and reliable"
  }
];


export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#070b18] text-white"
    >
      {/* Background lighting */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(124,58,237,0.22),transparent_32%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,0.14),transparent_30%)]"
        aria-hidden="true"
      />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13] bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)]"
        aria-hidden="true"
      />

      {/* Decorative glows */}
      <div
        className="pointer-events-none absolute -left-32 top-44 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <Navbar />

        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-300 items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-8 lg:py-20">
          {/* Hero copy */}
          <div className="max-w-147.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/8 px-3.5 py-2 text-xs font-semibold text-violet-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Simple links. Better sharing.
            </div>

            <h1 className="mt-7 text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-4xl lg:text-[3.6rem]">
              Turn long URLs into links{" "}
              <span className="bg-linear-to-r from-violet-300 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
                worth sharing.
              </span>
            </h1>

            <p className="mt-6 max-w-135 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Transform lengthy, cluttered URLs into clean links you can copy
              and share in seconds.
            </p>

            <a
              href="#shorten"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-violet-200 lg:hidden"
            >
              Shorten your first URL
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <div className="mt-9 grid max-w-140 gap-3 sm:grid-cols-3">
              {trustPoints.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 text-sm text-slate-300"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/80 text-violet-300">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>

                  <span className="leading-5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shortener panel */}
          <div id="shorten" className="relative scroll-mt-24">
            <div
              className="pointer-events-none absolute -inset-4 rounded-[36px] bg-linear-to-r from-violet-500/10 via-transparent to-sky-500/10 blur-2xl"
              aria-hidden="true"
            />

            {/* URL Shortener card */}
            <div className="relative overflow-hidden rounded-[28px] border border-slate-700/70 bg-slate-900/75 p-1 shadow-[0_32px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="p-5 sm:p-7">
                <UrlShortenerForm />
              </div>
            </div>

            {/* Click checker CTA */}
            <a
              href="#check-clicks"
              className="group relative mt-4 flex items-center gap-4 overflow-hidden rounded-2xl border border-violet-400/30 bg-linear-to-r from-violet-500/[0.14] via-indigo-500/10 to-sky-500/8 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:shadow-[0_20px_50px_rgba(109,40,217,0.18)] sm:p-5"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-14 h-32 w-32 rounded-full bg-violet-500/15 blur-3xl"
                aria-hidden="true"
              />

              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/15 text-violet-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <BarChart3 className="h-5 w-5" aria-hidden="true" />
              </span>

              <div className="relative min-w-0 flex-1">
                <p className="text-base font-semibold text-white">
                  Already have a shrinkly link?
                </p>

                <p className="mt-1 text-sm leading-5 text-slate-300">
                  Check how many clicks your link has received.
                </p>
              </div>

              <span className="relative hidden shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 group-hover:bg-violet-100 sm:inline-flex">
                Check clicks

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>

              <ArrowRight
                className="relative ml-auto h-5 w-5 shrink-0 text-violet-300 transition-transform duration-300 group-hover:translate-x-1 sm:hidden"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Section transition */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-slate-950"
        aria-hidden="true"
      />
    </section>
  );
}
