import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/brand";
import { Container } from "@/components/layout/container";
import { HeroSearch } from "./hero-search";
import { ButtonLink } from "@/components/ui/button";

interface HeroSectionProps {
  jobCount: number;
  companyCount: number;
}

export function HeroSection({ jobCount, companyCount }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--accent-muted),transparent)]"
        aria-hidden
      />

      <Container className="relative py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-blue" />
            </span>
            {jobCount} open roles
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.02]">
            <span className="text-gradient">{SITE_NAME}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted md:text-lg">
            {SITE_TAGLINE}
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted">
            Curated roles in LLM engineering, MLOps, and computer vision — from early-stage
            startups to industry leaders.
          </p>

          <div className="mx-auto mt-8 max-w-2xl">
            <HeroSearch />
            <p className="mt-3 text-xs text-muted">
              Popular:{" "}
              {["LLM", "Remote", "MLOps", "Python"].map((term, i) => (
                <span key={term}>
                  {i > 0 && " · "}
                  <Link
                    href={`/jobs?q=${encodeURIComponent(term)}`}
                    className="text-foreground/80 underline-offset-2 transition-colors hover:text-foreground hover:underline"
                  >
                    {term}
                  </Link>
                </span>
              ))}
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/jobs" size="md">
              Browse all jobs
            </ButtonLink>
            <ButtonLink href="/jobs/new" variant="secondary" size="md">
              Post a job
            </ButtonLink>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-border/70 bg-white/5 p-5">
              <dt className="text-[11px] uppercase tracking-[0.3em] text-muted">Open roles</dt>
              <dd className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{jobCount}</dd>
            </div>
            <div className="rounded-3xl border border-border/70 bg-white/5 p-5">
              <dt className="text-[11px] uppercase tracking-[0.3em] text-muted">Companies</dt>
              <dd className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{companyCount}</dd>
            </div>
            <div className="rounded-3xl border border-border/70 bg-white/5 p-5">
              <dt className="text-[11px] uppercase tracking-[0.3em] text-muted">Categories</dt>
              <dd className="mt-3 text-2xl font-semibold tracking-tight text-foreground">6</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
