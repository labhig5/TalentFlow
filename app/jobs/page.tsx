import { SITE_NAME } from "@/lib/brand";
import { filterJobs, getJobLocations, getJobs } from "@/lib/jobs";
import { Container } from "@/components/layout/container";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { JobFilters } from "@/components/jobs/job-filters";
import { JobList } from "@/components/jobs/job-list";
import { ButtonLink } from "@/components/ui/button";

export const metadata = {
  title: `Browse Jobs — ${SITE_NAME}`,
  description: "Search and browse AI, ML, and LLM engineering job listings.",
};

function buildPageTitle(q?: string, location?: string) {
  if (q && location) return `“${q}” in ${location}`;
  if (q) return `“${q}”`;
  if (location) return location;
  return "All jobs";
}

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; location?: string }>;
}) {
  const { q, location } = await searchParams;
  const [jobs, locations, allJobs] = await Promise.all([
    filterJobs({ q, location }),
    getJobLocations(),
    getJobs(),
  ]);

  const pageTitle = buildPageTitle(q, location);
  const hasFilters = Boolean(q || location);

  return (
    <Container className="page-y">
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: hasFilters ? "Search" : "Jobs" },
        ]}
      />

      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            {pageTitle}
          </h1>
          <p className="mt-1 text-sm text-muted">
            {jobs.length} of {allJobs.length} {allJobs.length === 1 ? "role" : "roles"}
          </p>
        </div>
        <ButtonLink href="/jobs/new" variant="secondary" size="sm">
          Post a job
        </ButtonLink>
      </div>

      <div className="mb-5">
        <JobFilters locations={locations} defaultQuery={q} defaultLocation={location} />
      </div>

      <JobList jobs={jobs} query={q} location={location} hasFilters={hasFilters} />
    </Container>
  );
}
