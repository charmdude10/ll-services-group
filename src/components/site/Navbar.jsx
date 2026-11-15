import { useEffect, useState } from "react";
import { Menu, X, PartyPopper, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
function TikTokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}
const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "TikTok", href: "#", icon: TikTokIcon },
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/85 shadow-soft backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:flex lg:justify-between">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <span className="gradient-royal grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-primary-foreground">
            <PartyPopper className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight font-bold">
              LL SERVICES GROUP
            </span>
            <span className="block truncate text-[11px] tracking-wide text-muted-foreground">
              Making Every Celebration Magical
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {l.label}
            </a>
          ))}
          <div className="mx-3 h-5 w-px bg-border" aria-hidden="true" />
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Follow LL Servicegroup on ${s.label}`}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground/80 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
          <Button variant="hero" size="sm" className="ml-2 h-10 px-5" asChild>
            <a href="#booking">Book Now</a>
          </Button>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>

      {open && (
        <div className="reveal-up border-t border-border bg-background/95 px-5 pb-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-accent"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" className="mt-2" asChild onClick={() => setOpen(false)}>
              <a href="#booking">Book Now</a>
            </Button>
            <div className="mt-4 flex items-center justify-center gap-3 border-t border-border pt-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  aria-label={`Follow LL Servicegroup on ${s.label}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground/80 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
export { Navbar };
