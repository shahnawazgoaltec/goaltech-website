import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { company } from "@/data/content";

export const metadata: Metadata = { title: "Contact — GoalTec Solutions" };

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-page gap-12 px-6 pb-20 pt-40 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-semibold">Let’s build something <span className="text-gold">amazing</span></h1>
        <p className="mt-4 text-sm text-white/80">Tell us about your project and we’ll get back within one business day.</p>
        <p className="mt-8 text-sm">{company.email}</p>
        <p className="mt-2 text-sm text-white/70">{company.address}</p>
      </div>
      <ContactForm />
    </section>
  );
}
