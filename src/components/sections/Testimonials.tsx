"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/ui/Stars";
import type { Testimonial } from "@/lib/schemas";

const initials = (n: string) => n.split(" ").map((w) => w[0]).join("");
const PAGES = 4; // pager dots in the design; with more testimonials, slice `items` by page

export function Testimonials({ items }: { items: Testimonial[] }) {
  const [page, setPage] = useState(0);
  const shift = (d: number) => setPage((p) => (p + d + PAGES) % PAGES);

  return (
    <section className="bg-black px-6 pb-8 pt-20">
      <SectionHeading dark eyebrow="CLIENT TESTIMONIALS" title="What Our" accent="Clients Say" />
      <div className="mx-auto mt-12 grid max-w-page gap-5 md:grid-cols-3">
        {items.map((t) => (
          <figure key={t.name} className={`rounded-xl p-6 ${t.featured ? "bg-gold text-black" : "bg-ink-card"}`}>
            <Stars rating={t.rating} />
            <blockquote className="mt-4 min-h-[8rem] text-sm leading-relaxed">“{t.quote}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-xs font-semibold">{initials(t.name)}</span>
              <span>
                <span className="block font-semibold">{t.name}</span>
                <span className={`text-xs ${t.featured ? "text-black/70" : "text-white/70"}`}>{t.role} • {t.company}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center gap-5">
        <button aria-label="Previous testimonials" onClick={() => shift(-1)}><ArrowLeft size={20} /></button>
        {Array.from({ length: PAGES }, (_, i) => (
          <button key={i} aria-label={`Go to page ${i + 1}`} aria-current={i === page} onClick={() => setPage(i)}
            className={`h-2.5 w-2.5 rounded-full ${i === page ? "bg-white" : "bg-white/30"}`} />
        ))}
        <button aria-label="Next testimonials" onClick={() => shift(1)}><ArrowRight size={20} /></button>
      </div>
    </section>
  );
}
