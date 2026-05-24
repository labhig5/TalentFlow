import Link from "next/link";
import type { Job } from "@/lib/types";
import { JobBadge } from "./job-badge";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="group surface surface-hover flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/60 bg-card/95 transition duration-200 hover:-translate-y-0.5"
    >
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-bold leading-tight text-foreground transition-colors group-hover:text-accent">
              {job.title}
            </h3>
            <p className="mt-1 truncate text-sm text-muted">{job.company}</p>
          </div>
          {job.aiFocus && <JobBadge label={job.aiFocus} variant="accent" />}
        </div>

        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-6 text-slate-300">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-2">
          <JobBadge label={job.type.replace("-", " ")} />
          <JobBadge label={job.experience} />
        </div>

        <div className="mt-4 hidden flex-wrap gap-2 sm:flex">
          {job.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="rounded-2xl border border-border px-2 py-1 text-[11px] font-mono text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border/60 bg-muted-bg/70 px-5 py-3">
        <span className="flex min-w-0 items-center gap-2 text-xs text-muted">
          <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="truncate">{job.location}</span>
        </span>
        <div className="flex shrink-0 items-center gap-2 text-xs">
          {job.salary && (
            <span className="font-medium text-foreground">{job.salary}</span>
          )}
          <span className="text-muted">{formatDate(job.postedAt)}</span>
        </div>
      </div>
    </Link>
  );
}
