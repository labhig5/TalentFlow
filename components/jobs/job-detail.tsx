import Link from "next/link";
import type { Job } from "@/lib/types";
import { JobBadge } from "./job-badge";
import { JobCard } from "./job-card";
import { ButtonLink } from "@/components/ui/button";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border py-2 last:border-0">
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="text-right text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

interface JobDetailProps {
  job: Job;
  relatedJobs: Job[];
}

export function JobDetail({ job, relatedJobs }: JobDetailProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:gap-8">
      <div className="min-w-0">
        <header className="mb-5">
          <div className="mb-3 flex flex-wrap gap-1.5">
            {job.aiFocus && <JobBadge label={job.aiFocus} variant="accent" />}
            <JobBadge label={job.type.replace("-", " ")} />
            <JobBadge label={job.experience} />
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {job.title}
          </h1>
          <p className="mt-1.5 text-base text-muted">{job.company}</p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {job.location}
            </span>
            {job.salary && <span className="font-medium text-foreground">{job.salary}</span>}
            <span>{formatDate(job.postedAt)}</span>
          </div>
        </header>

        <section className="surface mb-5 rounded-xl p-4 sm:p-5">
          <h2 className="mb-3 text-sm font-medium text-foreground">Description</h2>
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-muted">
            {job.description}
          </p>
        </section>

        <section className="surface mb-6 rounded-xl p-4 sm:p-5">
          <h2 className="mb-3 text-sm font-medium text-foreground">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <li key={skill}>
                <Link
                  href={`/jobs?q=${encodeURIComponent(skill)}`}
                  className="inline-block rounded-md border border-border bg-muted-bg px-2.5 py-1 font-mono text-xs text-foreground transition-colors hover:border-foreground/20"
                >
                  {skill}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {relatedJobs.length > 0 && (
          <section>
            <h2 className="mb-4 text-sm font-medium text-foreground">Similar roles</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedJobs.map((related) => (
                <JobCard key={related.id} job={related} />
              ))}
            </div>
          </section>
        )}
      </div>

      <aside className="lg:sticky lg:top-16 lg:self-start">
        <div className="surface rounded-xl p-4">
          <h2 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
            Overview
          </h2>
          <dl>
            <DetailRow label="Company" value={job.company} />
            <DetailRow label="Location" value={job.location} />
            <DetailRow label="Type" value={job.type.replace("-", " ")} />
            <DetailRow label="Level" value={job.experience} />
            {job.salary && <DetailRow label="Salary" value={job.salary} />}
            {job.aiFocus && <DetailRow label="Focus" value={job.aiFocus} />}
          </dl>

          <div className="mt-4 space-y-2">
            {job.applyUrl ? (
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent flex h-9 w-full items-center justify-center rounded-lg text-sm font-medium transition-all"
              >
                Apply now
              </a>
            ) : (
              <p className="rounded-lg bg-muted-bg px-4 py-3 text-center text-xs text-muted">
                Contact the company to apply.
              </p>
            )}
            <ButtonLink href="/jobs" variant="secondary" className="w-full">
              More jobs
            </ButtonLink>
          </div>
        </div>
      </aside>
    </div>
  );
}
