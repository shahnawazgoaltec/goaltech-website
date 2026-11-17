import { Sparkles, Info } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-[#1a1206] to-[#3a2608] pb-24 pt-36">
      <div className="mx-auto grid max-w-page items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-gold px-4 py-1.5 text-[11px] text-gold">
            Trusted by 200+ companies worldwide <Sparkles size={12} aria-hidden />
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            IT Solutions That Drive <span className="text-gold">Innovation</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/90">
            We build high-performance software, scalable infrastructure, and intuitive digital products that help forward-thinking businesses grow faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/services" arrow>Explore Services</ButtonLink>
            <ButtonLink href="/projects" variant="outline"><span>View Projects</span><Info size={14} aria-hidden /></ButtonLink>
          </div>
        </div>

        {/* Laptop mock — swap for <Image src="/hero-laptop.png" /> when you have the asset */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="aspect-[16/10] -rotate-6 rounded-xl border border-white/10 bg-gradient-to-br from-[#10131a] to-[#05070b] p-4 shadow-[0_0_80px_rgba(253,180,91,0.25)]">
            <div className="space-y-2" aria-hidden>
              {Array.from({ length: 14 }, (_, i) => <div key={i} className="h-1.5 rounded bg-white/10" style={{ width: `${30 + ((i * 37) % 60)}%` }} />)}
            </div>
          </div>
          <div className="absolute -bottom-8 left-8 rounded-lg bg-white px-4 py-3 text-center text-black shadow-xl">
            <p className="text-xs">Client Satisfaction</p>
            <Stars rating={4} size={14} />
          </div>
        </div>
      </div>
    </section>
  );
}
