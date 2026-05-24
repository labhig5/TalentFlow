import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface JobFormProps {
  action: (formData: FormData) => Promise<void>;
}

export function JobForm({ action }: JobFormProps) {
  return (
    <form action={action} className="space-y-4">
      <Input name="title" label="Job Title" required placeholder="e.g. Senior ML Engineer" />
      <Input name="company" label="Company" required placeholder="e.g. Acme AI" />
      <Input name="location" label="Location" required placeholder="e.g. Remote or San Francisco, CA" />

      <div className="grid gap-4 sm:grid-cols-2">
        <Select
          name="type"
          label="Job Type"
          options={[
            { value: "full-time", label: "Full-time" },
            { value: "part-time", label: "Part-time" },
            { value: "contract", label: "Contract" },
            { value: "remote", label: "Remote" },
          ]}
        />
        <Select
          name="experience"
          label="Experience Level"
          options={[
            { value: "junior", label: "Junior" },
            { value: "mid", label: "Mid-level" },
            { value: "senior", label: "Senior" },
            { value: "lead", label: "Lead" },
          ]}
        />
      </div>

      <Input name="salary" label="Salary (optional)" placeholder="e.g. $120k – $150k" />
      <Input name="aiFocus" label="AI Focus (optional)" placeholder="e.g. LLM Engineering, MLOps" />

      <Textarea
        name="description"
        label="Description"
        required
        rows={5}
        placeholder="Describe the role, responsibilities, and requirements..."
      />

      <Input
        name="skills"
        label="Skills (comma-separated)"
        required
        placeholder="e.g. Python, PyTorch, LangChain"
      />

      <Input
        name="applyUrl"
        label="Apply URL (optional)"
        type="url"
        placeholder="https://company.com/careers/apply"
      />

      <div className="pt-1">
        <Button type="submit" size="md">
          Post Job
        </Button>
      </div>
    </form>
  );
}
