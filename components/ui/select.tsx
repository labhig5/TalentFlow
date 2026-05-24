import { type SelectHTMLAttributes } from "react";

const fieldClass =
  "w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-[var(--ring)]";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

export function Select({ label, options, id, className = "", ...props }: SelectProps) {
  const selectId = id ?? props.name;

  return (
    <div className="space-y-1">
      <label htmlFor={selectId} className="block text-xs font-medium text-muted">
        {label}
      </label>
      <select id={selectId} className={`${fieldClass} ${className}`} {...props}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
