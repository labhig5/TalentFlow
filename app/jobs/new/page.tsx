import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { SITE_NAME } from "@/lib/brand";
import { createJob } from "@/lib/jobs";
import type { CreateJobInput, ExperienceLevel, JobType } from "@/lib/types";
import { Container } from "@/components/layout/container";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { JobForm } from "@/components/jobs/job-form";

export const metadata = {
  title: `Post a Job — ${SITE_NAME}`,
  description: "Post a new AI, ML, or LLM engineering job listing.",
};

async function submitJob(formData: FormData) {
  "use server";

  const title = String(formData.get("title") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const skillsRaw = String(formData.get("skills") ?? "").trim();

  if (!title || !company || !location || !description || !skillsRaw) {
    throw new Error("Please fill in all required fields.");
  }

  const input: CreateJobInput = {
    title,
    company,
    location,
    type: (formData.get("type") as JobType) || "full-time",
    experience: (formData.get("experience") as ExperienceLevel) || "mid",
    description,
    skills: skillsRaw.split(",").map((s) => s.trim()).filter(Boolean),
    salary: String(formData.get("salary") ?? "").trim() || undefined,
    aiFocus: String(formData.get("aiFocus") ?? "").trim() || undefined,
    applyUrl: String(formData.get("applyUrl") ?? "").trim() || undefined,
  };

  const job = await createJob(input);
  revalidatePath("/");
  revalidatePath("/jobs");
  redirect(`/jobs/${job.id}`);
}

export default function NewJobPage() {
  return (
    <Container className="page-y">
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Jobs", href: "/jobs" },
          { label: "Post" },
        ]}
      />
      <div className="mx-auto max-w-lg">
        <h1 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          Post a job
        </h1>
        <p className="mt-1 text-sm text-muted">
          List your role and reach candidates building with AI.
        </p>
        <div className="surface mt-5 rounded-xl p-5">
          <JobForm action={submitJob} />
        </div>
      </div>
    </Container>
  );
}
