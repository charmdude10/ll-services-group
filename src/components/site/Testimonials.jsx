import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./Sections";
import { cn } from "@/lib/utils";
const reviews = [
  { text: "Fantastic service! Everything arrived on time and looked amazing.", name: "Sarah M." },
  { text: "The kids absolutely loved the bouncing castle.", name: "James A." },
  { text: "Professional, friendly and affordable.", name: "Grace T." }
];
function Testimonials() {
  const [i, setI] = useState(0);
  const current = reviews[i];
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % reviews.length), 6e3);
    return () => clearInterval(id);
  }, []);
  return <section className="bg-secondary/60 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Testimonials" title="Loved by our celebrants" />

        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-soft md:p-14">
          <Quote className="absolute top-6 right-8 h-16 w-16 text-primary-soft" />
          <div key={i} className="reveal-up relative text-center">
            <div className="flex justify-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-5 w-5 fill-current" />)}
            </div>
            <p className="mt-6 font-display text-xl leading-relaxed text-balance md:text-2xl">
              &ldquo;{current.text}&rdquo;
            </p>
            <p className="mt-6 text-sm font-semibold text-muted-foreground">— {current.name}</p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
    aria-label="Previous testimonial"
    onClick={() => setI((v) => (v - 1 + reviews.length) % reviews.length)}
    className="cursor-pointer rounded-full border border-border p-2 transition-colors hover:bg-accent"
  >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, d) => <button
    key={d}
    aria-label={`Go to testimonial ${d + 1}`}
    onClick={() => setI(d)}
    className={cn(
      "h-2 cursor-pointer rounded-full transition-all",
      d === i ? "w-8 bg-primary" : "w-2 bg-border"
    )}
  />)}
            </div>
            <button
    aria-label="Next testimonial"
    onClick={() => setI((v) => (v + 1) % reviews.length)}
    className="cursor-pointer rounded-full border border-border p-2 transition-colors hover:bg-accent"
  >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>;
}
export {
  Testimonials
};
