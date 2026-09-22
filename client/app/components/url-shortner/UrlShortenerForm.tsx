"use client";

import { useState } from "react";
import { shortenUrl } from "@/app/lib/urlService";
import { ShortUrlResult } from "@/app/components/url-shortner/ShortUrlResult";

import {
  AlertCircle,
  Link2,
  LoaderCircle,
  LockKeyhole,
  Sparkles
} from "lucide-react";

const isValidUrl = (value: string) => {
  try {
    const parsed = new URL(value);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch {
    return false;
  }
};

export function UrlShortenerForm() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    shortUrl: string;
    originalUrl: string;
  } | null>(null);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const trimmedUrl = value.trim();

    console.log("Sending trimmed URL: ", trimmedUrl);
    

    if (!trimmedUrl) {
      setError("Enter a URL to create your short link.");
      setResult(null);
      return;
    }

    if (!isValidUrl(trimmedUrl)) {
      setError("Enter a valid URL beginning with http:// or https://.");
      setResult(null);
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const generated = await shortenUrl(trimmedUrl);

      console.log("Got generated url Data: ", generated);
      

      setResult({
        originalUrl: trimmedUrl,
        shortUrl: generated.shortUrl
      });
    } catch (submitError) {
      setResult(null);

      setError(
        submitError instanceof Error
          ? submitError.message
          : "We couldn’t shorten this URL right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(event.target.value);

    if (error) {
      setError("");
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-violet-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <Link2 className="h-5 w-5" aria-hidden="true" />
          </span>

          <div>
            <h2 className="text-base font-semibold text-white sm:text-lg">
              Shorten a URL
            </h2>

            <p className="mt-1 text-sm leading-5 text-slate-400">
              Paste your long link and get a cleaner one instantly.
            </p>
          </div>
        </div>

        <span className="hidden items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-2.5 py-1 text-[11px] font-semibold text-emerald-300 sm:inline-flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          Ready
        </span>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <label
          htmlFor="originalUrl"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Your long URL
        </label>

        <div
          className={`rounded-2xl border bg-slate-950/65 p-2 transition duration-200 ${
            error
              ? "border-red-400/60 shadow-[0_0_0_3px_rgba(248,113,113,0.08)]"
              : "border-slate-700/80 focus-within:border-violet-400/70 focus-within:shadow-[0_0_0_3px_rgba(139,92,246,0.12)]"
          }`}
        >
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
              <Link2
                className="h-4 w-4 shrink-0 text-slate-500"
                aria-hidden="true"
              />

              <input
                id="originalUrl"
                name="originalUrl"
                type="url"
                value={value}
                onChange={handleInputChange}
                placeholder="https://example.com/your-long-url"
                autoComplete="url"
                spellCheck="false"
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "url-error" : "url-help"}
                className="h-12 min-w-0 w-full border-0 bg-transparent px-0 text-[15px] text-white outline-none placeholder:text-slate-600 sm:text-base"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-500 to-indigo-500 px-6 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.25)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_14px_38px_rgba(124,58,237,0.32)] focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-65 disabled:shadow-none sm:text-base"
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle
                    className="h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                  Shortening
                </>
              ) : (
                <>
                  <Sparkles
                    className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12"
                    aria-hidden="true"
                  />
                  Shorten URL
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-3 min-h-6">
          {error ? (
            <p
              id="url-error"
              role="alert"
              aria-live="assertive"
              className="flex items-start gap-2 text-sm font-medium text-red-300"
            >
              <AlertCircle
                className="mt-0.5 h-4 w-4 shrink-0"
                aria-hidden="true"
              />
              {error}
            </p>
          ) : (
            <p
              id="url-help"
              className="flex items-center gap-2 text-xs text-slate-500 sm:text-sm"
            >
              <LockKeyhole
                className="h-3.5 w-3.5 text-slate-500"
                aria-hidden="true"
              />
              No account required. Paste, shorten and share.
            </p>
          )}
        </div>
      </form>

      {result ? (
        <div
          className="mt-5 animate-[result-enter_300ms_ease-out]"
          aria-live="polite"
        >
          <ShortUrlResult
            shortUrl={result.shortUrl}
            originalUrl={result.originalUrl}
          />
        </div>
      ) : null}
    </div>
  );
}
