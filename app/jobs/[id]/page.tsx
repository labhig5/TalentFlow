import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_NAME } from "@/lib/brand";
import { getJobById, getRelatedJobs } from "@/lib/jobs";
import { Container } from "@/components/layout/container";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { JobDetail } from "@/components/jobs/job-detail";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await getJobById(id);
  if (!job) return { title: `Job Not Found — ${SITE_NAME}` };
  return {
    title: `${job.title} at ${job.company} — ${SITE_NAME}`,
    description: job.description.slice(0, 160),
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) notFound();

  const relatedJobs = await getRelatedJobs(job);

  return (
    <Container className="page-y">
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Jobs", href: "/jobs" },
          { label: job.title },
        ]}
      />

      <Link
        href="/jobs"
        className="mb-4 inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
      >
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        All jobs
      </Link>

      <JobDetail job={job} relatedJobs={relatedJobs} />
    </Container>
  );
}
