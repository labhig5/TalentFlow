export type JobType = "full-time" | "part-time" | "contract" | "remote";

export type ExperienceLevel = "junior" | "mid" | "senior" | "lead";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  experience: ExperienceLevel;
  salary?: string;
  description: string;
  skills: string[];
  aiFocus?: string;
  postedAt: string;
  applyUrl?: string;
}

export type CreateJobInput = Omit<Job, "id" | "postedAt">;
