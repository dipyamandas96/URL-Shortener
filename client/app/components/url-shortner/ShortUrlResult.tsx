"use client";

import { Check, Copy, ExternalLink, Link2 } from "lucide-react";
import { useState } from "react";

type ShortUrlResultProps = {
  shortUrl: string;
  originalUrl: string;
};

export function ShortUrlResult({ shortUrl, originalUrl }: ShortUrlResultProps) {
  const [copyState, setCopyState] = useState<"idle" | "success" | "error">("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopyState("success");
      window.setTimeout(() => setCopyState("idle"), 1800);
    } catch {
      setCopyState("error");
      window.setTimeout(() => setCopyState("idle"), 1800);
    }
  };

  return (
    <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-left shadow-[0_18px_30px_rgba(16,185,129,0.12)] sm:p-5" aria-live="polite">
      <div className="flex items-center gap-2 text-sm font-medium text-emerald-200">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
          <Check className="h-4 w-4" />
        </span>
        Short link ready
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <div className="rounded-xl border border-slate-700 bg-slate-950/80 p-3">
          <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
            <Link2 className="h-3.5 w-3.5" />
            Your short URL
          </div>
          {/* <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block break-all text-base font-semibold text-violet-200 underline-offset-4 hover:underline"
          > */}
            {shortUrl}
          {/* </a> */}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            aria-label="Copy the generated short URL"
          >
            {copyState === "success" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copyState === "success" ? "Copied!" : copyState === "error" ? "Copy failed" : "Copy link"}
          </button>
          <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <ExternalLink className="h-4 w-4" />
            Open link
          </a>
        </div>
      </div>

      {copyState === "error" ? (
        <p className="mt-3 text-sm font-medium text-red-200" role="alert" aria-live="assertive">
          Copy failed. Please select the URL and copy it manually.
        </p>
      ) : null}
    </div>
  );
}
