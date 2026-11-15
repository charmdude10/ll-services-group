import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { SectionHeading } from "./Sections";
import { cn } from "@/lib/utils";
import castle from "@/assets/gallery-castle.jpg";
import softplay from "@/assets/gallery-softplay.jpg";
import led from "@/assets/gallery-led.jpg";
import chairs from "@/assets/gallery-chairs.jpg";
import balloons from "@/assets/gallery-balloons.jpg";
import babyshower from "@/assets/gallery-babyshower.jpg";
import adult from "@/assets/gallery-adult.jpg";
const items = [
  { src: castle, alt: "Pink bouncing castle on a garden lawn", cat: "Kids" },
  { src: softplay, alt: "Children's soft play area with ball pit", cat: "Kids" },
  { src: led, alt: "LED Number 40 setup with balloon garland", cat: "LED & Marquee" },
  { src: balloons, alt: "Royal blue and white balloon arch backdrop", cat: "Balloons" },
  { src: chairs, alt: "Clear chiavari chairs at an elegant table setting", cat: "Chairs & Tables" },
  { src: babyshower, alt: "Baby shower dessert table with pastel balloons", cat: "Styling" },
  { src: adult, alt: "Adult party venue with balloon ceiling and marquee letters", cat: "Adults" },
  { src: led, alt: "Marquee d\xE9cor lighting up an evening celebration", cat: "LED & Marquee" },
  { src: balloons, alt: "Birthday balloon decorations and backdrop", cat: "Balloons" },
  { src: chairs, alt: "Full event styling with tables, chairs and florals", cat: "Styling" },
];
const cats = ["All", "Kids", "Adults", "Balloons", "LED & Marquee", "Chairs & Tables", "Styling"];
function Gallery() {
  const [cat, setCat] = useState("All");
  const [index, setIndex] = useState(null);
  const filtered = cat === "All" ? items : items.filter((i) => i.cat === cat);
  const open = index !== null ? filtered[index] : null;
  return (
    <section id="gallery" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Gallery"
          title="A look at our celebrations"
          subtitle="Real setups from parties we've styled — hover to zoom, click to view full size."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCat(c);
                setIndex(null);
              }}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-all",
                cat === c
                  ? "gradient-royal border-transparent text-primary-foreground shadow-soft"
                  : "border-border bg-card text-muted-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              onClick={() => setIndex(i)}
              className="reveal-up group relative aspect-4/3 cursor-pointer overflow-hidden rounded-3xl border border-border shadow-soft"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={900}
                height={900}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-end justify-between gap-2 bg-linear-to-t from-primary/80 via-primary/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-left text-sm font-semibold text-primary-foreground">
                  {item.cat}
                </span>
                <ZoomIn className="h-5 w-5 shrink-0 text-primary-foreground" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {open && index !== null && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-foreground/85 p-4 backdrop-blur"
          onClick={() => setIndex(null)}
        >
          <button
            className="absolute top-5 right-5 cursor-pointer rounded-full bg-background/90 p-2"
            aria-label="Close"
            onClick={() => setIndex(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            className="absolute left-4 cursor-pointer rounded-full bg-background/90 p-2"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((index - 1 + filtered.length) % filtered.length);
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute right-4 cursor-pointer rounded-full bg-background/90 p-2"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((index + 1) % filtered.length);
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <img
            src={open.src}
            alt={open.alt}
            className="max-h-[82vh] w-auto rounded-3xl object-contain shadow-lift"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
export { Gallery };
