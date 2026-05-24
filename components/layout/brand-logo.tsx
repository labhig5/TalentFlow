import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/brand";

interface BrandLogoProps {
  showTagline?: boolean;
  className?: string;
}

export function BrandLogo({ showTagline = false, className = "" }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={`group flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-80 ${className}`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-[10px] font-semibold text-foreground shadow-sm">
        TF
      </span>
      <div className="flex flex-col">
        <span className="text-sm font-semibold leading-tight tracking-tight text-foreground">
          {SITE_NAME}
        </span>
        {showTagline && (
          <span className="text-[11px] leading-tight text-muted">{SITE_TAGLINE}</span>
        )}
      </div>
    </Link>
  );
}
