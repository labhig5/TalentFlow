import Link from "next/link";
import { getJobs } from "@/lib/jobs";
import { Container } from "@/components/layout/container";
import { JobList } from "@/components/jobs/job-list";
import { HeroSection } from "@/components/landing/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";

const categories = [
  "LLM Engineering",
  "Computer Vision",
  "MLOps",
  "Data Science",
  "AI Safety",
  "Product",
];

export default async function HomePage() {
  const jobs = await getJobs();
  const featured = jobs.slice(0, 3);
  const companyCount = new Set(jobs.map((j) => j.company)).size;

  return (
    <>
      <HeroSection jobCount={jobs.length} companyCount={companyCount} />

      <section className="section-y border-t border-border">
        <Container>
          <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <SectionHeading
              title="Featured roles"
              description="Recently posted opportunities"
            />
            <ButtonLink href="/jobs" variant="secondary" size="sm">
              View all
            </ButtonLink>
          </div>
          <JobList jobs={featured} />
        </Container>
      </section>

      <section className="section-y border-t border-border">
        <Container>
          <SectionHeading
            title="Browse by focus"
            description="Explore roles by specialization"
            align="center"
          />
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/jobs?q=${encodeURIComponent(cat.split(" ")[0])}`}
                className="rounded-full border border-border/70 bg-white/5 px-4 py-2 text-sm text-muted transition hover:bg-white/10 hover:text-foreground"
              >
                {cat}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
