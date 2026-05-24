interface HeroSearchProps {
  defaultValue?: string;
}

export function HeroSearch({ defaultValue = "" }: HeroSearchProps) {
  return (
    <form
      action="/jobs"
      method="get"
      className="flex flex-col gap-3 rounded-3xl border border-border/70 bg-white/5 p-2 shadow-sm sm:flex-row sm:items-center"
    >
      <div className="relative flex flex-1 items-center">
        <svg
          className="pointer-events-none absolute left-4 h-4 w-4 text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="search"
          name="q"
          defaultValue={defaultValue}
          placeholder="Search roles, skills, companies..."
          className="w-full bg-transparent py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="btn-accent h-11 shrink-0 rounded-full px-5 text-sm font-medium transition-all sm:px-6"
      >
        Search
      </button>
    </form>
  );
}
