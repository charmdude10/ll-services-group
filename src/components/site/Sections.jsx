import {
  Armchair,
  Castle,
  Lightbulb,
  Sparkles,
  BadgeCheck,
  PiggyBank,
  Wand2,
  HeartHandshake,
  ShieldCheck,
  Truck,
  Phone,
  ListChecks,
  CalendarCheck,
  Smile,
  Cake,
  GlassWater,
  Gift,
  Baby,
  Church,
  Heart,
  GraduationCap,
  Building2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero.jpg";
function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span className="inline-block rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold text-balance sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground text-pretty">{subtitle}</p>}
    </div>
  );
}
function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Royal blue and white balloon arch with LED marquee letters over an elegant party table"
          width={1600}
          height={1e3}
          className="h-full w-full object-cover"
        />
        <div className="gradient-royal absolute inset-0 opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_55%)]" />
      </div>

      <span className="float-slow absolute top-32 left-6 -z-10 hidden h-24 w-24 rounded-full bg-primary-foreground/15 blur-xl md:block" />
      <span
        className="float-slow absolute right-10 bottom-16 -z-10 hidden h-32 w-32 rounded-full bg-gold/30 blur-xl md:block"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="mx-auto max-w-4xl px-5 text-center text-primary-foreground">
        <span className="reveal-up inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" /> Premium Event Rentals
        </span>
        <h1
          className="reveal-up mt-6 text-4xl leading-[1.05] font-bold text-balance sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.08s" }}
        >
          Making Every Celebration Magical
        </h1>
        <p
          className="reveal-up mx-auto mt-6 max-w-2xl text-base text-primary-foreground/90 text-pretty sm:text-lg"
          style={{ animationDelay: "0.16s" }}
        >
          We specialize in creating unforgettable celebrations with quality party rentals, beautiful
          décor, and fun entertainment for both kids and adults.
        </p>
        <div
          className="reveal-up mt-9 flex flex-wrap justify-center gap-3"
          style={{ animationDelay: "0.24s" }}
        >
          <Button variant="gold" size="xl" asChild>
            <a href="#booking">Book Now</a>
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a href="#services">View Our Services</a>
          </Button>
        </div>
        <dl
          className="reveal-up mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          style={{ animationDelay: "0.32s" }}
        >
          {[
            ["500+", "Events styled"],
            ["10+", "Event types"],
            ["5\u2605", "Client rating"],
            ["100%", "Setup included"],
          ].map(([v, k]) => (
            <div
              key={k}
              className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-4 backdrop-blur"
            >
              <dt className="font-display text-2xl font-bold">{v}</dt>
              <dd className="mt-1 text-xs text-primary-foreground/80">{k}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
function About() {
  return (
    <section id="about" className="px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            About LL Servicesgroup
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Your trusted partner for <span className="text-gradient-royal">stress-free events</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            LL Servicesgroup is your trusted event rental company dedicated to making every
            celebration stress-free and unforgettable.
          </p>
          <p className="mt-4 text-muted-foreground">
            Whether you're planning a birthday party, children's event, wedding, baby shower,
            anniversary, graduation, or corporate event, we provide premium-quality rental equipment
            and professional event styling that transforms your vision into reality.
          </p>
          <blockquote className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-soft">
            <p className="text-sm font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              Our mission is simple
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-primary">
              Making every celebration magical.
            </p>
          </blockquote>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: Sparkles, t: "Full styling", d: "Concept to teardown, handled by our team." },
            { icon: ShieldCheck, t: "Safety first", d: "Sanitised, inspected and insured kit." },
            { icon: Truck, t: "Delivery & setup", d: "On time, every time, across the region." },
            {
              icon: HeartHandshake,
              t: "Friendly service",
              d: "Real people who love a good party.",
            },
          ].map((c, i) => (
            <div
              key={c.t}
              className="card-lift reveal-up rounded-3xl border border-border bg-card p-6 shadow-soft"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <span className="gradient-royal grid h-11 w-11 place-items-center rounded-2xl text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{c.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const services = [
  {
    icon: Armchair,
    title: "Chairs & Tables",
    text: "High-quality, clean chairs and tables available for all event sizes.",
  },
  {
    icon: Castle,
    title: "Bouncing Castles",
    text: "Safe, colourful, exciting bouncing castles that kids absolutely love.",
  },
  {
    icon: Lightbulb,
    title: "LED Numbers & Marquee D\xE9cor",
    text: "Light up your celebration with stunning LED numbers and illuminated marquee decorations.",
  },
  {
    icon: Sparkles,
    title: "Balloons, Backdrops & Event Styling",
    text: "Professional balloon decorations, themed backdrops, and complete event styling to match your celebration.",
  },
];
function Services() {
  return (
    <section id="services" className="bg-secondary/60 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything your celebration needs"
          subtitle="Premium rentals and styling, delivered and set up by a team that treats your event like their own."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="card-lift reveal-up group rounded-3xl border border-border bg-card p-7 shadow-soft"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="gradient-royal grid h-14 w-14 place-items-center rounded-2xl text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
const reasons = [
  { icon: BadgeCheck, t: "Premium Quality Equipment" },
  { icon: PiggyBank, t: "Affordable Prices" },
  { icon: Wand2, t: "Professional Event Styling" },
  { icon: HeartHandshake, t: "Friendly Customer Service" },
  { icon: ShieldCheck, t: "Clean & Safe Rentals" },
  { icon: Truck, t: "Reliable Delivery & Setup" },
];
function WhyUs() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Why Choose Us" title="Why Choose LL Servicesgroup" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.t}
              className="card-lift reveal-up group flex items-center gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <r.icon className="h-5 w-5" />
              </span>
              <p className="min-w-0 font-semibold">{r.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const events = [
  { icon: Cake, t: "Kids Birthday Parties" },
  { icon: GlassWater, t: "Adult Birthday Parties" },
  { icon: Heart, t: "Weddings" },
  { icon: Baby, t: "Baby Showers" },
  { icon: Gift, t: "Naming Ceremonies" },
  { icon: Church, t: "Christenings" },
  { icon: Sparkles, t: "Anniversaries" },
  { icon: GraduationCap, t: "Graduation Parties" },
  { icon: Building2, t: "Corporate Events" },
  { icon: Users, t: "Family Celebrations" },
];
function Events() {
  return (
    <section id="events" className="bg-secondary/60 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Occasions" title="Events We Cover" />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {events.map((e, i) => (
            <div
              key={e.t}
              className="card-lift reveal-up rounded-3xl border border-border bg-card p-6 text-center shadow-soft"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                <e.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-sm font-semibold">{e.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const steps = [
  { icon: Phone, t: "Contact Us", d: "Call, WhatsApp or send us your event details." },
  { icon: ListChecks, t: "Choose Your Rentals", d: "We help you pick the perfect package." },
  { icon: CalendarCheck, t: "Confirm Your Booking", d: "Lock in your date with a simple deposit." },
  {
    icon: Smile,
    t: "Relax While We Handle Everything",
    d: "We deliver, style, and collect after.",
  },
];
function Process() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="How It Works" title="Booking in four easy steps" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.t}
              className="card-lift reveal-up relative rounded-3xl border border-border bg-card p-7 shadow-soft"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="absolute -top-4 right-6 grid h-10 w-10 place-items-center rounded-full bg-gold font-display text-sm font-bold text-gold-foreground shadow-soft">
                0{i + 1}
              </span>
              <span className="gradient-royal grid h-12 w-12 place-items-center rounded-2xl text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function CtaBanner() {
  return (
    <section className="px-5 py-10">
      <div className="gradient-royal relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-16 text-center text-primary-foreground shadow-lift md:px-16">
        <span className="float-slow absolute -top-10 -left-8 h-40 w-40 rounded-full bg-primary-foreground/10" />
        <span
          className="float-slow absolute -right-6 -bottom-12 h-48 w-48 rounded-full bg-gold/20"
          style={{ animationDelay: "1s" }}
        />
        <h2 className="relative text-3xl font-bold text-balance sm:text-4xl md:text-5xl">
          Ready to Make Your Celebration Magical?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/90">
          Book LL Servicesgroup today and let us take the stress out of planning your event.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Button variant="gold" size="xl" asChild>
            <a href="#booking">Book Now</a>
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a href="tel:07341157226">Call Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
const faqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend booking 2\u20134 weeks ahead, especially for weekends and holiday dates. Last-minute requests are welcome and we'll always try to accommodate you.",
  },
  {
    q: "Do you deliver, set up and collect?",
    a: "Yes. Delivery, professional setup and collection are part of our service. You only need to tell us the time and place.",
  },
  {
    q: "Are the bouncing castles safe and clean?",
    a: "Absolutely. Every castle is inspected, anchored properly and thoroughly cleaned and sanitised before each hire.",
  },
  {
    q: "Do you require a deposit?",
    a: "A small deposit secures your date, with the balance due on or before the day of your event.",
  },
  {
    q: "What areas do you cover?",
    a: "We cover the local area and surrounding towns. Send us your postcode and we'll confirm availability and any travel cost.",
  },
];
function Faq() {
  return (
    <section id="faq" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f) => (
            <AccordionItem
              key={f.q}
              value={f.q}
              className="mb-3 rounded-3xl border border-border bg-card px-6 shadow-soft"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
export { About, CtaBanner, Events, Faq, Hero, Process, SectionHeading, Services, WhyUs };
