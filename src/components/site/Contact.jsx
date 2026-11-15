import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Calculator,
  PartyPopper,
  Facebook,
  Instagram,
} from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./Sections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
const PHONE_1 = "07356239191";
const PHONE_2 = "07341157226";
const WHATSAPP = "447356239191";
const eventTypes = [
  "Kids Birthday Party",
  "Adult Birthday Party",
  "Wedding",
  "Baby Shower",
  "Naming Ceremony",
  "Christening",
  "Anniversary",
  "Graduation Party",
  "Corporate Event",
  "Family Celebration",
];
function QuoteCalculator() {
  const [guests, setGuests] = useState(50);
  const [castle, setCastle] = useState(false);
  const [led, setLed] = useState(false);
  const [balloons, setBalloons] = useState(true);
  const [styling, setStyling] = useState(false);
  const seating = guests * 3.5;
  const total =
    seating + (castle ? 90 : 0) + (led ? 120 : 0) + (balloons ? 150 : 0) + (styling ? 250 : 0);
  const options = [
    { label: "Bouncing castle", value: castle, set: setCastle, price: "\xA390" },
    { label: "LED numbers / marquee", value: led, set: setLed, price: "\xA3120" },
    {
      label: "Balloon d\xE9cor & backdrop",
      value: balloons,
      set: setBalloons,
      price: "from \xA3150",
    },
    { label: "Full event styling", value: styling, set: setStyling, price: "from \xA3250" },
  ];
  return (
    <div className="rounded-[2rem] border border-border bg-card p-7 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="gradient-royal grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-primary-foreground">
          <Calculator className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold">Cost estimate calculator</h3>
          <p className="text-xs text-muted-foreground">
            Indicative only — we confirm final pricing.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <Label htmlFor="guests">Guests: {guests}</Label>
        <input
          id="guests"
          type="range"
          min={10}
          max={300}
          step={10}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="mt-3 w-full accent-primary"
        />
        <p className="mt-1 text-xs text-muted-foreground">
          Chairs & tables estimated at £3.50 per guest.
        </p>
      </div>

      <div className="mt-5 space-y-2">
        {options.map((o) => (
          <label
            key={o.label}
            className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-border px-4 py-3 text-sm transition-colors hover:bg-accent/60"
          >
            <span className="flex min-w-0 items-center gap-3">
              <input
                type="checkbox"
                checked={o.value}
                onChange={(e) => o.set(e.target.checked)}
                className="h-4 w-4 shrink-0 accent-primary"
              />
              <span className="truncate font-medium">{o.label}</span>
            </span>
            <span className="shrink-0 text-muted-foreground">{o.price}</span>
          </label>
        ))}
      </div>

      <div className="gradient-royal mt-6 flex items-center justify-between rounded-2xl px-5 py-4 text-primary-foreground">
        <span className="text-sm font-medium">Estimated total</span>
        <span className="font-display text-2xl font-bold">£{total.toFixed(0)}</span>
      </div>
    </div>
  );
}
function BookingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    const subject = `Booking request from ${data.name}`;
    const body = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email || "Not provided"}`,
      `Event date: ${data.date}`,
      `Event type: ${data.eventType}`,
      `What do you need?: ${data.message || "Not provided"}`,
    ].join("\n");
    const mailto = `mailto:eventrentals@llservicegroup.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    toast.info("Your email app should open with the request details.", {
      description: "Review the message and send it to complete your request.",
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[2rem] border border-border bg-card p-7 shadow-soft"
    >
      <div className="flex items-center gap-3">
        <span className="gradient-royal grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-primary-foreground">
          <PartyPopper className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold">Request a quote / booking</h3>
          <p className="text-xs text-muted-foreground">We reply within 24 hours.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" className="mt-2" {...register("name", { required: true })} />
          {errors.name && <p className="mt-1 text-xs text-destructive">Please enter your name.</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" className="mt-2" {...register("phone", { required: true })} />
          {errors.phone && (
            <p className="mt-1 text-xs text-destructive">Please enter a phone number.</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Your email (optional)"
            className="mt-2"
            {...register("email")}
          />
        </div>
        <div>
          <Label htmlFor="date">Event date</Label>
          <Input id="date" type="date" className="mt-2" {...register("date", { required: true })} />
          {errors.date && <p className="mt-1 text-xs text-destructive">Please choose a date.</p>}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="eventType">Event type</Label>
          <select
            id="eventType"
            className="mt-2 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
            {...register("eventType", { required: true })}
          >
            <option value="">Select an event type</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.eventType && (
            <p className="mt-1 text-xs text-destructive">Please select an event type.</p>
          )}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">What do you need?</Label>
          <Textarea
            id="message"
            rows={4}
            className="mt-2"
            placeholder="Chairs & tables, bouncing castle, LED numbers, balloon décor…"
            {...register("message")}
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="mt-6 w-full"
        disabled={isSubmitting}
      >
        <Send /> {isSubmitting ? "Sending\u2026" : "Send booking request"}
      </Button>
    </form>
  );
}
function Contact() {
  return (
    <section id="booking" className="bg-secondary/60 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's plan your celebration"
          subtitle="Let us take the stress out of your event — you celebrate, we'll do the rest!"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <BookingForm />
          <div className="space-y-6">
            <QuoteCalculator />
            <div id="contact" className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Phone, label: PHONE_1, href: `tel:${PHONE_1.replace(/\s/g, "")}` },
                { icon: Phone, label: PHONE_2, href: `tel:${PHONE_2.replace(/\s/g, "")}` },
                { icon: MessageCircle, label: "WhatsApp us", href: `https://wa.me/${WHATSAPP}` },
                {
                  icon: Mail,
                  label: "eventrentals@llservicesgroup.co.uk",
                  href: "mailto:eventrentals@llservicesgroup.co.uk",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="card-lift flex items-center gap-3 rounded-3xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 truncate text-sm font-semibold">{c.label}</span>
                </a>
              ))}
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
              <div className="flex items-center gap-2 bg-card px-5 py-3 text-sm font-semibold">
                <MapPin className="h-4 w-4 text-primary" /> Serving your local area
              </div>
              <iframe
                title="LL Servicegroup service area map"
                src="https://www.google.com/maps?q=United+Kingdom&output=embed"
                loading="lazy"
                className="h-64 w-full border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with LL Servicegroup on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-4 text-primary-foreground shadow-lift transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </a>
  );
}
function Footer() {
  return (
    <footer className="gradient-royal px-5 pt-16 pb-8 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-bold">LL Servicesgroup</h3>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Making Every Celebration Magical.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Follow LL Servicegroup on ${s.label}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-[0.16em] uppercase">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Services", "#services"],
              ["Gallery", "#gallery"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="transition-colors hover:text-primary-foreground">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-[0.16em] uppercase">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {[
              "Chairs & Tables",
              "Bouncing Castles",
              "LED Numbers",
              "Balloon Decorations",
              "Event Styling",
            ].map((s) => (
              <li key={s}>
                <a href="#services" className="transition-colors hover:text-primary-foreground">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-[0.16em] uppercase">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <a href={`tel:${PHONE_1.replace(/\s/g, "")}`}>{PHONE_1}</a>
            </li>
            <li>
              <a href={`tel:${PHONE_2.replace(/\s/g, "")}`}>{PHONE_2}</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/70">
        © 2026 LL Servicesgroup. All Rights Reserved.
      </p>
    </footer>
  );
}
export { Contact, Footer, WhatsAppButton };
