export function JobCardSkeleton() {
  return (
    <div className="surface overflow-hidden rounded-xl" aria-hidden>
      <div className="space-y-2.5 p-4">
        <div className="flex justify-between gap-3">
          <div className="flex-1 space-y-2">
            <div className="h-4 w-4/5 rounded bg-muted-bg" />
            <div className="h-3 w-1/2 rounded bg-muted-bg" />
          </div>
          <div className="h-5 w-16 rounded-md bg-muted-bg" />
        </div>
        <div className="space-y-1.5">
          <div className="h-3 w-full rounded bg-muted-bg" />
          <div className="h-3 w-4/5 rounded bg-muted-bg" />
        </div>
        <div className="flex gap-2">
          <div className="h-5 w-14 rounded-md bg-muted-bg" />
          <div className="h-5 w-12 rounded-md bg-muted-bg" />
        </div>
      </div>
      <div className="border-t border-border bg-muted-bg/50 px-4 py-2.5">
        <div className="h-3 w-2/3 rounded bg-muted-bg" />
      </div>
    </div>
  );
}
