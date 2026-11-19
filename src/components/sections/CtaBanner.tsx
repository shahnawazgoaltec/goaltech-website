import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";

export function CtaBanner() {
  return (
    <section className="px-6 pt-16 pb-16 bg-white">
      <div className="mx-auto bg-black business-box flex max-w-page items-center justify-between gap-6 rounded-3xl border border-white/40 bg-gradient-to-r from-ink-card via-ink-card to-[#4a3410] px-10 py-8">
        <div>
          <h2 className="text-2xl font-semibold">Ready to Transform Your Business?</h2>
          <p className="mt-1 text-sm text-white/80">Let’s build something amazing together.</p>
        </div>
        <div className="flex items-center gap-10">
          <ButtonLink href="/contact" arrow>Get Started</ButtonLink>
          <Image
            src="/goaltec-shape.svg"
            alt=""
            width={131}
            height={105}
            className="hidden h-24 w-auto md:block"
          />
        </div>
      </div>
    </section>
  );
}