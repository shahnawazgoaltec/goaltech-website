import Link from "next/link";
import { ArrowRight, BarChart3, Cloud, Globe, Layers, ShieldCheck, Smartphone } from "lucide-react";
import type { Service } from "@/lib/schemas";

const icons = { globe: Globe, phone: Smartphone, layers: Layers, cloud: Cloud, shield: ShieldCheck, chart: BarChart3 } as const;

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <article className="rounded-xl bg-white p-6 shadow-sm">
      <Icon className="text-gold" size={30} strokeWidth={1.3} aria-hidden />
      <h3 className="mt-5 font-semibold text-black">{service.title}</h3>
      <p className="mt-2 min-h-[4.5rem] text-sm leading-relaxed text-black/60">{service.description}</p>
      <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-xs text-gold hover:text-gold-dark">
        Learn more <ArrowRight size={12} aria-hidden />
      </Link>
    </article>
  );
}
