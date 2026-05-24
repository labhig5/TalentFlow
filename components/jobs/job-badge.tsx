export function JobBadge({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "default" | "accent";
}) {
  const classes =
    variant === "accent"
      ? "border border-accent/30 bg-[var(--accent-muted)] text-[var(--accent)]"
      : "border border-white/10 bg-white/5 text-slate-300";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] leading-none ${classes}`}
    >
      {label}
    </span>
  );
}
