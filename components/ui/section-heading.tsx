interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
      {description && (
        <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
      )}
    </div>
  );
}
