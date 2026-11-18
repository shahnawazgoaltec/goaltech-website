import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Tech } from "@/lib/schemas";
import Image from "next/image";

export function TechStack({ items }: { items: Tech[] }) {
  return (
    <section className="px-6 py-16 technology-section">
      <SectionHeading dark eyebrow="TECHNOLOGY" title="Our Technology" accent="Stack"
        subtitle="We work with best-in-class tools chosen for the job, not buzzwords." />
      <ul className="mx-auto mt-10 grid max-w-page grid-cols-4 gap-4 md:grid-cols-8">
        {items.map((t) => (
          <li key={t.name} title={t.name} className="grid h-20 place-items-center rounded-xl bg-white text-lg font-bold text-black shadow">
            {t.image ? (
              <Image src={t.image} alt={t.name} width={40} height={40} className="h-10 w-10 object-contain" />
            ) : (
              <>
                <span aria-hidden>{t.abbr}</span>
                <span className="sr-only">{t.name}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}