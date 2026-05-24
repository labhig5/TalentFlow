import { promises as fs } from "fs";
import path from "path";
import type { CreateJobInput, Job } from "./types";

const DATA_PATH = path.join(process.cwd(), "data", "jobs.json");

async function readJobsFile(): Promise<Job[]> {
  const raw = await fs.readFile(DATA_PATH, "utf-8");
  return JSON.parse(raw) as Job[];
}

async function writeJobsFile(jobs: Job[]): Promise<void> {
  await fs.writeFile(DATA_PATH, JSON.stringify(jobs, null, 2), "utf-8");
}

export async function getJobs(): Promise<Job[]> {
  const jobs = await readJobsFile();
  return jobs.sort(
    (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
  );
}

export async function getJobById(id: string): Promise<Job | null> {
  const jobs = await readJobsFile();
  return jobs.find((job) => job.id === id) ?? null;
}

export async function createJob(input: CreateJobInput): Promise<Job> {
  const jobs = await readJobsFile();
  const job: Job = {
    ...input,
    id: String(Date.now()),
    postedAt: new Date().toISOString(),
  };
  jobs.unshift(job);
  await writeJobsFile(jobs);
  return job;
}

export interface JobFilterParams {
  q?: string;
  location?: string;
}

export async function getJobLocations(): Promise<string[]> {
  const jobs = await getJobs();
  return [...new Set(jobs.map((job) => job.location))].sort((a, b) =>
    a.localeCompare(b)
  );
}

export async function filterJobs(params: JobFilterParams = {}): Promise<Job[]> {
  let jobs = await getJobs();
  const { q, location } = params;

  if (location?.trim()) {
    const loc = location.toLowerCase();
    jobs = jobs.filter((job) => job.location.toLowerCase() === loc);
  }

  if (q?.trim()) {
    const query = q.toLowerCase();
    jobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.skills.some((s) => s.toLowerCase().includes(query)) ||
        job.aiFocus?.toLowerCase().includes(query)
    );
  }

  return jobs;
}

/** @deprecated Use filterJobs instead */
export async function searchJobs(query?: string): Promise<Job[]> {
  return filterJobs({ q: query });
}

export async function getRelatedJobs(job: Job, limit = 3): Promise<Job[]> {
  const jobs = await getJobs();
  return jobs
    .filter(
      (j) =>
        j.id !== job.id &&
        (j.aiFocus === job.aiFocus || j.location === job.location)
    )
    .slice(0, limit);
}
