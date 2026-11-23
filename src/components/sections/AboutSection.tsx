import Image from "next/image";
import { Lightbulb, Target, Users } from "lucide-react";
import { aboutIntro, aboutPillars } from "@/data/content";
import type { AboutPillar } from "@/lib/schemas";

const icons = { target: Target, lightbulb: Lightbulb, users: Users } as const;
const gradients: Record<AboutPillar["icon"], string> = {
  target: "from-indigo-500 to-violet-500",
  lightbulb: "from-emerald-400 to-green-500",
  users: "from-orange-400 to-rose-500",
};

export function AboutSection() {
  return (
    <section id="about" className="bg-cream px-6 py-20 text-black">
      <div className="mx-auto grid max-w-page items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
        {/* Image with the curved gold accent behind it */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute -right-6 inset-y-3 w-1/3 rounded-full bg-gradient-to-b from-gold/70 to-gold/20 blur-[1px]"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl [border-bottom-right-radius:40%_50%] [border-top-right-radius:40%_50%] shadow-xl">
            <Image
              src="/about-building.jpg"
              alt="GoalTec Solutions office building"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="flex items-center gap-3 text-xs font-medium uppercase">
            <span className="h-px w-10 bg-gold" aria-hidden /> About Us
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            About <span className="text-gold">GoalTec</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/70">{aboutIntro}</p>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {aboutPillars.map((p) => {
              const Icon = icons[p.icon];
              return (
                <article key={p.title} className="text-center">
                  <span
                    className={`mx-auto grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br text-white shadow-md ${gradients[p.icon]}`}
                  >
                    <Icon size={26} aria-hidden />
                  </span>
                  <h2 className="mt-4 text-sm font-semibold">{p.title}</h2>
                  <p className="mt-2 text-xs leading-relaxed text-black/60">{p.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}