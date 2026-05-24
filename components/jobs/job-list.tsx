import type { Job } from "@/lib/types";
import { JobCard } from "./job-card";
import { JobsEmptyState } from "./jobs-empty-state";

interface JobListProps {
  jobs: Job[];
  query?: string;
  location?: string;
  hasFilters?: boolean;
}

export function JobList({
  jobs,
  query,
  location,
  hasFilters = false,
}: JobListProps) {
  if (jobs.length === 0) {
    return (
      <JobsEmptyState
        query={query}
        location={location}
        hasFilters={hasFilters}
      />
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {jobs.map((job) => (
        <li key={job.id} className="min-w-0">
          <JobCard job={job} />
        </li>
      ))}
    </ul>
  );
}
