import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { Container } from "./container";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ButtonLink } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 shadow-[0_1px_0_rgba(248,250,252,0.08)] backdrop-blur-xl backdrop-saturate-150">
      <Container>
        <div className="flex items-center justify-between gap-4 py-4">
          <BrandLogo showTagline className="hidden sm:flex" />
          <BrandLogo className="sm:hidden" />

          <MainNav />

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/jobs"
              className="rounded-full px-3 py-2 text-sm text-muted transition hover:text-foreground hover:bg-white/5"
            >
              Browse
            </Link>
            <ButtonLink href="/jobs/new" size="sm">
              Post a job
            </ButtonLink>
          </div>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
