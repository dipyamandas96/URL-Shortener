import {
  ArrowDown,
  ClipboardPaste,
  Copy,
  Sparkles,
  WandSparkles
} from "lucide-react";



const steps = [
  {
    number: "01",
    title: "Paste your URL",
    description:
      "Add the long link you want to turn into a cleaner, shareable URL.",
    icon: ClipboardPaste
  },
  {
    number: "02",
    title: "Create your short link",
    description:
      "Shrinkly generates a compact link for you in just one click.",
    icon: WandSparkles
  },
  {
    number: "03",
    title: "Copy and share",
    description:
      "Copy your new link and share it anywhere you need.",
    icon: Copy
  }
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,1100px)] -translate-x-1/2 bg-linear-to-r from-transparent via-slate-700 to-transparent"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/6 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            How it works
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-[2.75rem]">
            From long to shareable in seconds
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400">
            No complicated setup. Paste your link, generate a shorter one and
            share it.
          </p>
        </div>

        {/* Desktop process */}
        <div className="relative mt-14 hidden grid-cols-3 gap-6 md:grid">
          

          {steps.map(({ number, title, description, icon: Icon }, index) => (
            <article
              key={number}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/45 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/70 hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)]"
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="flex h-20 w-20 items-center justify-center rounded-2xl border border-violet-400/25 bg-slate-950 text-violet-300 shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition duration-300 group-hover:border-violet-400/45 group-hover:text-violet-200">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>

                <span className="font-mono text-xs font-semibold tracking-[0.16em] text-slate-600">
                  {number}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {description}
              </p>

              {index < steps.length - 1 ? (
                <span className="sr-only">Then</span>
              ) : null}
            </article>
          ))}
        </div>

        {/* Mobile process */}
        <div className="mt-12 space-y-3 md:hidden">
          {steps.map(({ number, title, description, icon: Icon }, index) => (
            <div key={number}>
              <article className="rounded-2xl border border-slate-800 bg-slate-900/55 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/25 bg-violet-500/10 text-violet-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <div className="min-w-0">
                    <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-violet-300">
                      STEP {number}
                    </span>

                    <h3 className="mt-1.5 text-lg font-semibold text-white">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {description}
                    </p>
                  </div>
                </div>
              </article>

              {index < steps.length - 1 ? (
                <div className="flex h-8 items-center justify-center text-slate-600">
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
