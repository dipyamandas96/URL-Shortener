"use client";

import { clickCount } from "../../lib/urlService"

import {
  Activity,
  BarChart3,
  CheckCircle2,
  MousePointerClick,
  ShieldCheck,
  Sparkles
} from "lucide-react";

import { ClickCountForm } from "../click-analytics/ClickCountForm";
import { useState } from "react";

const highlights = [
  {
    icon: Activity,
    text: "Live click count"
  },
  {
    icon: ShieldCheck,
    text: "No account required"
  },
  {
    icon: CheckCircle2,
    text: "Instant lookup"
  }
];

interface ClickCountResult {
  count: number;
  createdAt?: string;
}

export function CheckClickCount() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState< ClickCountResult | null >(null);


  const handleCheck = async (shortUrl: string) => {

    try {
      setIsLoading(true)
      setError("")

      const data = await clickCount(shortUrl)

      setResult(data)

    } catch (error) {

      console.log("error is: ", error);
      
      setError("Unable to find click stats")
      setResult(null)
    }
    finally {
      setIsLoading(false)
    }
  }



  return (
    <section
      id="check-clicks"
      className="relative scroll-mt-20 overflow-hidden bg-[#090f1f] py-20 text-white sm:py-24"
    >
      {/* Top separation */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,1100px)] -translate-x-1/2 bg-linear-to-r from-transparent via-slate-700 to-transparent"
        aria-hidden="true"
      />

      {/* Background lights */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-sky-500/8 blur-3xl"
        aria-hidden="true"
      />

      {/* Subtle background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09] bg-[radial-gradient(rgba(148,163,184,0.3)_1px,transparent_1px)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
        {/* Main section container */}
        <div className="relative overflow-hidden rounded-[30px] border border-slate-800 bg-slate-900/45 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-sm">
          <div
            className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/60 to-transparent"
            aria-hidden="true"
          />

          <div className="grid gap-12 p-6 sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16 lg:p-12">
            {/* Content */}
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Link activity
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-[2.75rem]">
                See how many people opened{" "}
                <span className="bg-linear-to-r from-violet-300 to-sky-300 bg-clip-text text-transparent">
                  your link.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-slate-400">
                Paste any short URL created with shrinkly and instantly check
                its total number of clicks.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {highlights.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2.5 text-sm text-slate-300"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-sky-300">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>

                    <span className="leading-5">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form panel */}
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-4 rounded-[30px] bg-linear-to-r from-sky-500/8 via-transparent to-violet-500/8 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-[#0d1629]/90 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-7">
                <div
                  className="absolute right-5 top-5 opacity-[0.06]"
                  aria-hidden="true"
                >
                  <MousePointerClick className="h-28 w-28 text-sky-300" />
                </div>

                <div className="relative">
                  <ClickCountForm
                  onCheck={handleCheck}
                  isLoading={isLoading}
                  error={error}
                  result={result}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom information strip */}
          <div className="flex flex-col gap-3 border-t border-slate-800 bg-slate-950/40 px-6 py-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
            <span className="inline-flex items-center gap-2">
              <BarChart3
                className="h-4 w-4 text-violet-300"
                aria-hidden="true"
              />
              Clicks update whenever your short URL is opened.
            </span>

            <span>Free for all shrinkly links</span>
          </div>
        </div>
      </div>
    </section>
  );
}