import { Container } from "@/components/layout/container";
import { JobCardSkeleton } from "./job-card-skeleton";

const SKELETON_COUNT = 6;

export function JobsPageSkeleton() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading jobs">
      <span className="sr-only">Loading jobs…</span>
      <Container className="page-y animate-pulse">
        <div className="mb-4 flex gap-2">
          <div className="h-3 w-10 rounded bg-muted-bg" />
          <div className="h-3 w-2 rounded bg-muted-bg" />
          <div className="h-3 w-8 rounded bg-muted-bg" />
        </div>

        <div className="mb-5 space-y-2">
          <div className="h-7 w-40 rounded-lg bg-muted-bg" />
          <div className="h-4 w-24 rounded bg-muted-bg" />
        </div>

        <div className="surface mb-5 rounded-xl p-4">
          <div className="grid gap-3 md:grid-cols-[1fr_200px_auto]">
            <div className="h-9 rounded-lg bg-muted-bg" />
            <div className="h-9 rounded-lg bg-muted-bg" />
            <div className="h-9 w-full rounded-lg bg-muted-bg md:w-20" />
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <li key={i}>
              <JobCardSkeleton />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
