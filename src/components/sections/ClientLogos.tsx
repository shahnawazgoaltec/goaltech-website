import { clients } from "@/data/content";

export function ClientLogos() {
  return (
    <section id="clients" className="bg-black px-6 pb-10 pt-8">
      <h2 className="flex items-center justify-center gap-5 text-lg font-medium">
        <span className="h-px w-16 bg-gold" /> CLIENT ENGAGEMENTS <span className="h-px w-16 bg-gold" />
      </h2>
      <ul className="mx-auto mt-6 flex max-w-page flex-wrap items-center justify-around gap-6 text-2xl font-semibold">
        {clients.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </section>
  );
}
