import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Tech } from "@/lib/schemas";

export function TechStack({ items }: { items: Tech[] }) {
  return (
    <section className="bg-black px-6 py-16">
      <SectionHeading dark eyebrow="TECHNOLOGY" title="Our Technology" accent="Stack"
        subtitle="We work with best-in-class tools chosen for the job, not buzzwords." />
      <ul className="mx-auto mt-10 grid max-w-page grid-cols-4 gap-4 md:grid-cols-8">
        {items.map((t) => (
          <li key={t.name} title={t.name} className="grid h-20 place-items-center rounded-xl bg-white text-lg font-bold text-black shadow">
            <span aria-hidden>{t.abbr}</span><span className="sr-only">{t.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
