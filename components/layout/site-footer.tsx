import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/brand";
import { Container } from "./container";
import { mainNavLinks, secondaryNavLinks } from "@/lib/navigation";

export function SiteFooter() {
  const footerLinks = [...mainNavLinks, ...secondaryNavLinks];

  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-6 md:py-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <span className="flex h-6 w-6 items-center justify-center rounded border border-border bg-card text-[9px] font-semibold">
              TF
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">{SITE_NAME}</span>
              <span className="text-xs text-muted">{SITE_TAGLINE}</span>
            </div>
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {SITE_NAME}
          </p>
        </div>
      </Container>
    </footer>
  );
}
