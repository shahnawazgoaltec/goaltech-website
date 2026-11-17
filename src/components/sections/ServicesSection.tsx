import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/content";

export function ServicesSection({ showCta = true }: { showCta?: boolean }) {
  return (
    <section id="services" className="bg-cream px-6 py-20">
      <SectionHeading eyebrow="WHAT WE DO" title="Comprehensive" accent="IT Solutions"
        subtitle="From ideation to deployment and beyond, we cover every layer of the modern technology stack." />
      <div className="mx-auto mt-12 grid max-w-page gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
      </div>
      {showCta && <div className="mt-12 text-center"><ButtonLink href="/services" arrow>Explore All Solutions</ButtonLink></div>}
    </section>
  );
}
