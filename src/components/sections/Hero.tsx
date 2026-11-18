import { Sparkles, Info } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br pb-24 pt-36 hero-top">
      <div className="mx-auto grid max-w-page items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-gold px-4 py-1.5 text-[11px] text-gold">
            Trusted by 200+ companies worldwide{" "}
            <Sparkles size={12} aria-hidden />
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            IT Solutions That <p></p>Drive{" "}
            <span className="text-gold">Innovation</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/90">
            We build high-performance software, scalable infrastructure, and
            intuitive digital products that help forward-thinking businesses
            grow faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/services" arrow>
              Explore Services
            </ButtonLink>
            <ButtonLink href="/projects" variant="outline">
              <span>View Projects</span>
              <Info size={14} aria-hidden />
            </ButtonLink>
          </div>
        </div>

        {/* Laptop mock — swap for <Image src="/hero-laptop.png" /> when you have the asset */}
        <div className="relative mx-auto w-full">
          <Image
            src="/laptop-hero.png"
            alt="Laptop showing code on screen"
            width={800}
            height={500}
            priority
            className="h-auto w-full laptop-hero1"
          />
          <div className="absolute -bottom-8 left-8 rounded-lg bg-white px-4 py-3 text-center text-black shadow-xl">
            <p className="text-xs">Client Satisfaction</p>
            <Stars rating={4} size={14} />
          </div>
        </div>
      </div>
    </section>
  );
}
