"use client";

import { FormEvent, useState } from "react";
import {
    AlertCircle,
    BarChart3,
    CalendarDays,
    CheckCircle2,
    Link2,
    LoaderCircle,
    MousePointerClick,
    Search
} from "lucide-react";

interface ClickCountResult {
    count: number;
    createdAt?: string;
}

interface ClickCountFormProps {
    onCheck?: (shortUrl: string) => void | Promise<void>;
    isLoading?: boolean;
    error?: string;
    result?: ClickCountResult | null;
}


export function ClickCountForm({
    onCheck,
    isLoading = false,
    error = "",
    result = null
}: ClickCountFormProps) {
    const [shortUrl, setShortUrl] = useState("");

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        if (!shortUrl.trim() || isLoading) {
            return;
        }

        await onCheck?.(shortUrl.trim());
    };

    return (
        <div className="w-full">
            {/* Form heading */}
            <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-500/10 text-sky-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                        <BarChart3 className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <div>
                        <h3 className="text-base font-semibold text-white sm:text-lg">
                            Check total clicks
                        </h3>

                        <p className="mt-1 text-sm leading-5 text-slate-400">
                            Enter a short link created with shrinkly.
                        </p>
                    </div>
                </div>

                <span className="hidden items-center gap-1.5 rounded-full border border-sky-400/20 bg-sky-400/[0.07] px-2.5 py-1 text-[11px] font-semibold text-sky-300 sm:inline-flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                    Live count
                </span>
            </div>

            <form onSubmit={handleSubmit} noValidate>
                <label
                    htmlFor="click-count-url"
                    className="mb-2 block text-sm font-medium text-slate-300"
                >
                    Your shrinkly URL
                </label>

                <div
                    className={`rounded-2xl border bg-slate-950/65 p-2 transition duration-200 ${error
                            ? "border-red-400/60 shadow-[0_0_0_3px_rgba(248,113,113,0.08)]"
                            : "border-slate-700/80 focus-within:border-sky-400/70 focus-within:shadow-[0_0_0_3px_rgba(56,189,248,0.1)]"
                        }`}
                >
                    <div className="flex flex-col gap-2 sm:flex-row">
                        <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                            <Link2
                                className="h-4 w-4 shrink-0 text-slate-500"
                                aria-hidden="true"
                            />

                            <input
                                id="click-count-url"
                                name="shortUrl"
                                type="url"
                                value={shortUrl}
                                onChange={(event) => setShortUrl(event.target.value)}
                                placeholder="https://shrinkly.me/aB7xQ2"
                                autoComplete="url"
                                spellCheck="false"
                                aria-invalid={Boolean(error)}
                                aria-describedby={
                                    error ? "click-count-error" : "click-count-help"
                                }
                                className="h-12 min-w-0 w-full border-0 bg-transparent px-0 text-[15px] text-white outline-none placeholder:text-slate-600 sm:text-base"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading || !shortUrl.trim()}
                            className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-indigo-500 px-6 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(14,165,233,0.2)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_14px_38px_rgba(14,165,233,0.28)] focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none sm:text-base"
                        >
                            {isLoading ? (
                                <>
                                    <LoaderCircle
                                        className="h-4 w-4 animate-spin"
                                        aria-hidden="true"
                                    />
                                    Checking
                                </>
                            ) : (
                                <>
                                    <Search
                                        className="h-4 w-4 transition-transform duration-200 group-hover:scale-110"
                                        aria-hidden="true"
                                    />
                                    Check clicks
                                </>
                            )}
                        </button>
                    </div>
                </div>

                <div className="mt-3 min-h-6">
                    {error ? (
                        <p
                            id="click-count-error"
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
                            id="click-count-help"
                            className="text-xs leading-5 text-slate-500 sm:text-sm"
                        >
                            Paste the complete short URL, including http:// or https://
                        </p>
                    )}
                </div>
            </form>
            {result ? (
                <div
                    aria-live="polite"
                    className="mt-5 animate-[result-enter_300ms_ease-out] overflow-hidden rounded-2xl border border-emerald-400/25 bg-linear-to-br from-emerald-500/10 via-slate-950/70 to-sky-500/6 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                >
                    {/* Result header */}
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                            <CheckCircle2
                                className="h-4 w-4"
                                aria-hidden="true"
                            />
                            Link found
                        </div>

                        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-300">
                            Live
                        </span>
                    </div>

                    {/* Click count */}
                    <div className="mt-6 flex items-end justify-between gap-5">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                                Total clicks
                            </p>

                            <p className="mt-2 bg-linear-to-r from-violet-300 via-sky-300 to-emerald-300 bg-clip-text text-2xl font-semibold tracking-tighter text-transparent sm:text-3xl">
                                {result.count}
                            </p>
                        </div>

                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-500/10 text-sky-300">
                            <MousePointerClick
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </span>
                    </div>

                    {/* Created date */}
                    {result.createdAt ? (
                        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
                            <CalendarDays
                                className="h-4 w-4"
                                aria-hidden="true"
                            />

                            Created on{" "}
                            {new Intl.DateTimeFormat("en-IN", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            }).format(new Date(result.createdAt))}
                        </div>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
}