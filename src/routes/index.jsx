import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import {
  Hero,
  About,
  Services,
  WhyUs,
  Events,
  Process,
  CtaBanner,
  Faq,
} from "@/components/site/Sections";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact, Footer, WhatsAppButton } from "@/components/site/Contact";
const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LL Servicesgroup | Party & Event Rentals, Bouncing Castles, LED D\xE9cor" },
      {
        name: "description",
        content:
          "LL Servicesgroup provides premium chairs & tables, bouncing castles, LED numbers, balloon d\xE9cor and full event styling. Making every celebration magical.",
      },
      { property: "og:title", content: "LL Servicegroup | Making Every Celebration Magical" },
      {
        property: "og:description",
        content:
          "Premium party rentals and event styling for birthdays, weddings, baby showers and corporate events. Delivery and setup included.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});
function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <Events />
        <Process />
        <Testimonials />
        <CtaBanner />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
export { Route };
