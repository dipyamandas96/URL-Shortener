import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  Link2,
  Route,
  Share2,
  Sparkles,
  Zap
} from "lucide-react";

const benefits = [
  {
    title: "Instant shortening",
    description:
      "Turn long, cluttered URLs into clean and shareable links in a single click.",
    icon: Zap,
    iconClass:
      "border-violet-400/25 bg-violet-500/10 text-violet-300",
    glowClass: "bg-violet-500/10"
  },
  {
    title: "Reliable redirects",
    description:
      "Every short link takes your visitors to the correct destination quickly and consistently.",
    icon: Route,
    iconClass:
      "border-sky-400/25 bg-sky-500/10 text-sky-300",
    glowClass: "bg-sky-500/10"
  },
  {
    title: "Clean sharing",
    description:
      "Share compact links across messages, emails and social platforms without the clutter.",
    icon: Share2,
    iconClass:
      "border-emerald-400/25 bg-emerald-500/10 text-emerald-300",
    glowClass: "bg-emerald-500/10"
  }
];

export function BenefitsSection() {
  const primaryBenefit = benefits[0];
  const PrimaryIcon = primaryBenefit.icon;

  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-[#080d1b] py-20 text-white sm:py-24"
    >
      {/* Section divider */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,1100px)] -translate-x-1/2 bg-linear-to-r from-transparent via-slate-700 to-transparent"
        aria-hidden="true"
      />

      {/* Background decoration */}
      <div
        className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-violet-600/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-sky-500/6 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-300 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Why shrinkly
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-[2.75rem]">
            Everything you need for cleaner links
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400">
            A fast and focused way to create links that are easier to share,
            read and remember.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* Primary benefit */}
          <article className="group relative overflow-hidden rounded-[26px] border border-slate-800 bg-slate-900/65 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-[0_28px_80px_rgba(0,0,0,0.3)] sm:p-8 lg:col-span-5 lg:row-span-2">
            <div
              className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${primaryBenefit.glowClass}`}
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${primaryBenefit.iconClass}`}
                >
                  <PrimaryIcon className="h-5 w-5" aria-hidden="true" />
                </span>

                <span className="rounded-full border border-violet-400/20 bg-violet-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-300">
                  Fast by design
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-[1.7rem]">
                {primaryBenefit.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                {primaryBenefit.description}
              </p>

              {/* Mini product visual */}
              <div className="mt-9 rounded-2xl border border-slate-700/70 bg-slate-950/75 p-4 shadow-inner shadow-black/20">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
                  LONG URL
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <div className="min-w-0 flex-1 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2.5 text-sm text-slate-500">
                    <p className="truncate">
                      https://example.com/very/long/destination/url
                    </p>
                  </div>

                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-violet-300"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-violet-400/20 bg-violet-500/8 px-3 py-3">
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-violet-300">
                      SHORT LINK
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-white">
                      shrinkly.me/aB7xQ2
                    </p>
                  </div>

                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-300">
                <Gauge
                  className="h-4 w-4 text-violet-300"
                  aria-hidden="true"
                />
                Generated in just one request
              </div>
            </div>
          </article>

          {/* Secondary benefits */}
          {benefits.slice(1).map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group relative overflow-hidden rounded-[26px] border border-slate-800 bg-slate-900/55 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/75 hover:shadow-[0_24px_65px_rgba(0,0,0,0.25)] sm:p-7 lg:col-span-7"
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-70 blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${benefit.glowClass}`}
                  aria-hidden="true"
                />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${benefit.iconClass}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 text-slate-500 transition duration-300 group-hover:border-violet-400/30 group-hover:text-violet-300 sm:ml-auto sm:flex">
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}