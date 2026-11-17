"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import type { Project, ProjectCategory } from "@/lib/schemas";
import { projectCategorySchema } from "@/lib/schemas";

const filters = ["All", ...projectCategorySchema.options] as const;
type Filter = (typeof filters)[number];

export function ProjectsSection({ projects, showCta = true }: { projects: Project[]; showCta?: boolean }) {
  const [active, setActive] = useState<Filter>("All");
  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.categories.includes(active as ProjectCategory))),
    [active, projects],
  );

  return (
    <section id="projects" className="bg-black px-6 py-20">
      <SectionHeading dark eyebrow="OUR PORTFOLIO" title="Our" accent="Projects"
        subtitle="A selection of work we are proud of — each one built with a specific business outcome in mind." />

      <div role="tablist" aria-label="Filter projects" className="mt-10 flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button key={f} role="tab" aria-selected={active === f} onClick={() => setActive(f)}
            className={`rounded-full px-8 py-2 text-xs transition-colors ${active === f ? "bg-gold text-black" : "bg-ink-card text-white hover:bg-white/10"}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-10 grid max-w-page gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
      {visible.length === 0 && <p className="mt-10 text-center text-sm text-white/60">No projects in this category yet.</p>}
      {showCta && <div className="mt-12 text-center"><ButtonLink href="/projects" arrow>View All Features</ButtonLink></div>}
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article id={p.slug} className="rounded-xl border border-gold bg-ink-card p-3">
      <div className="h-36 rounded-md" style={{ background: `linear-gradient(135deg, ${p.accent}, #0b0b0d)` }} aria-hidden />
      <div className="p-3">
        <span className="inline-block rounded-full bg-white px-3 py-1 text-[11px] text-black">{p.tag}</span>
        <h3 className="mt-4 font-semibold">{p.title}</h3>
        <p className="mt-2 min-h-[3.5rem] text-xs leading-relaxed text-white/70">{p.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => <li key={s} className="rounded border border-white/60 px-2 py-0.5 text-[10px]">{s}</li>)}
        </ul>
        <Link href="/contact" className="mt-5 inline-flex items-center gap-1 text-xs text-gold">Learn more <ArrowRight size={12} aria-hidden /></Link>
      </div>
    </article>
  );
}
