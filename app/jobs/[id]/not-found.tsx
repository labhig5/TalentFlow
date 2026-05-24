import { Container } from "@/components/layout/container";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { ButtonLink } from "@/components/ui/button";

export default function JobNotFound() {
  return (
    <Container className="page-y flex flex-col items-center text-center">
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Jobs", href: "/jobs" },
          { label: "Not found" },
        ]}
      />
      <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted-bg">
        <span className="text-lg text-muted">?</span>
      </div>
      <h1 className="mt-4 text-sm font-medium text-foreground">Job not found</h1>
      <p className="mt-1.5 max-w-sm text-sm text-muted">
        This listing may have been removed or the link is incorrect.
      </p>
      <div className="mt-5 flex gap-2">
        <ButtonLink href="/jobs">Browse jobs</ButtonLink>
        <ButtonLink href="/" variant="secondary">
          Home
        </ButtonLink>
      </div>
    </Container>
  );
}
