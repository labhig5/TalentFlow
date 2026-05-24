import Link from "next/link";
import { Button } from "@/components/ui/button";

interface JobFiltersProps {
  locations: string[];
  defaultQuery?: string;
  defaultLocation?: string;
}

export function JobFilters({
  locations,
  defaultQuery = "",
  defaultLocation = "",
}: JobFiltersProps) {
  const hasFilters = Boolean(defaultQuery || defaultLocation);

  return (
    <div className="surface rounded-[1.5rem] p-4 sm:p-6">
      <form action="/jobs" method="get" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-[1fr_220px_auto] md:items-end">
          <div className="space-y-2">
            <label htmlFor="job-search" className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Search
            </label>
            <div className="relative">
              <svg
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                id="job-search"
                type="search"
                name="q"
                defaultValue={defaultQuery}
                placeholder="Title, company, skills..."
                className="w-full rounded-2xl border border-border/70 bg-card/95 py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="job-location" className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Location
            </label>
            <div className="relative">
              <svg
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <select
                id="job-location"
                name="location"
                defaultValue={defaultLocation}
                className="w-full appearance-none rounded-2xl border border-border/70 bg-card/95 py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
              >
                <option value="">All locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Button type="submit" className="h-12 w-full md:w-auto rounded-full px-6">
            Search
          </Button>
        </div>
      </form>

      {hasFilters && (
        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border/70 pt-4">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Filters</span>
          {defaultQuery && (
            <span className="rounded-2xl border border-border bg-muted-bg px-3 py-1 font-mono text-xs text-foreground">
              {defaultQuery}
            </span>
          )}
          {defaultLocation && (
            <span className="rounded-2xl border border-border bg-muted-bg px-3 py-1 text-xs text-foreground">
              {defaultLocation}
            </span>
          )}
          <Link href="/jobs" className="ml-auto text-xs font-medium text-muted hover:text-foreground">
            Clear all
          </Link>
        </div>
      )}
    </div>
  );
}
