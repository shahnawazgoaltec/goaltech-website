import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { company } from "@/data/content";

export const metadata: Metadata = { title: "Contact — GoalTec Solutions" };

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`;

  return (
    <>
      {/* dark strip so the white header text stays readable on the light page */}
      <div className="bg-black pt-24" />
      <section className="bg-white px-6 py-16 text-gray-900">
        <h1 className="sr-only">Contact GoalTec Solutions</h1>
        <div className="mx-auto grid max-w-page items-start gap-6 lg:grid-cols-[1fr_2fr]">
          <aside className="rounded-2xl bg-gray-50 p-8">
            <h2 className="text-2xl font-semibold">Contact Information</h2>

            <div className="mt-8 flex gap-4">
              <Mail className="mt-1 shrink-0 text-gold" size={22} aria-hidden />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href={`mailto:${company.email}`} className="mt-1 inline-block text-gray-700 hover:text-gold">
                  {company.email}
                </a>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <MapPin className="mt-1 shrink-0 text-gold" size={22} aria-hidden />
              <div>
                <h3 className="font-semibold">Office Location</h3>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-gray-700 hover:text-gold">
                  {company.address}
                </a>
              </div>
            </div>
          </aside>

          <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
            <h2 className="text-2xl font-semibold">Send Us a Message</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}