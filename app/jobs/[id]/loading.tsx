import { Container } from "@/components/layout/container";

export default function JobDetailLoading() {
  return (
    <Container className="page-y animate-pulse">
      <div className="mb-4 flex gap-2">
        <div className="h-3 w-10 rounded bg-muted-bg" />
        <div className="h-3 w-8 rounded bg-muted-bg" />
        <div className="h-3 w-24 rounded bg-muted-bg" />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="space-y-4">
          <div className="h-7 w-2/3 rounded-lg bg-muted-bg" />
          <div className="surface h-36 rounded-xl" />
          <div className="surface h-24 rounded-xl" />
        </div>
        <div className="surface hidden h-56 rounded-xl lg:block" />
      </div>
    </Container>
  );
}
