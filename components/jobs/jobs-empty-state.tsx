import Link from "next/link";
import { SITE_NAME } from "@/lib/brand";
import { ButtonLink } from "@/components/ui/button";

interface JobsEmptyStateProps {
  query?: string;
  location?: string;
  hasFilters: boolean;
}

export function JobsEmptyState({ query, location, hasFilters }: JobsEmptyStateProps) {
  if (!hasFilters) {
    return (
      <div className="surface rounded-[1.5rem] border-dashed border-border/60 px-6 py-14 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted-bg">
          <svg className="h-5 w-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="mt-4 text-base font-semibold text-foreground">No jobs yet</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted leading-6">
          Be the first to post an opening on {SITE_NAME}.
        </p>
        <ButtonLink href="/jobs/new" className="mt-5 rounded-full px-6 py-3">
          Post a job
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="surface rounded-[1.5rem] border-dashed border-border/60 px-6 py-16 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted-bg">
        <svg className="h-5 w-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <h2 className="mt-4 text-base font-semibold text-foreground">No results found</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
        We couldn’t find roles matching your search. Try broadening the terms or clear the filters to see more opportunities.
      </p>

      {(query || location) && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {query && (
            <span className="rounded-2xl border border-border bg-muted-bg px-3 py-1 font-mono text-xs text-foreground">
              {query}
            </span>
          )}
          {location && (
            <span className="rounded-2xl border border-border bg-muted-bg px-3 py-1 text-xs text-foreground">
              {location}
            </span>
          )}
        </div>
      )}

      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <ButtonLink href="/jobs" className="rounded-full px-6 py-3">
          Clear filters
        </ButtonLink>
        <ButtonLink href="/jobs" variant="secondary" className="rounded-full px-6 py-3">
          Browse all jobs
        </ButtonLink>
      </div>

      <p className="mt-5 text-sm text-muted">
        Want an alert when new roles are posted? <Link href="mailto:hello@talentflow.io?subject=Job Alerts" className="font-medium text-foreground hover:underline">Subscribe for alerts</Link>.
      </p>
    </div>
  );
}
