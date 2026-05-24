interface JobSearchProps {
  defaultValue?: string;
}

export function JobSearch({ defaultValue = "" }: JobSearchProps) {
  return (
    <form action="/jobs" method="get" className="flex gap-2">
      <input
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="Search by title, company, skills..."
        className="flex-1 rounded-full border border-border/70 bg-card/95 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
      />
      <button
        type="submit"
        className="btn-accent rounded-full px-5 py-3 text-sm font-medium"
      >
        Search
      </button>
    </form>
  );
}
