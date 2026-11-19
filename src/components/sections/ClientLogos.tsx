import { clients } from "@/data/content";
import Image from "next/image";

export function ClientLogos() {
  return (
    <section
      id="clients"
      className="bg-black px-6 pb-10 pt-8 clients-engagements"
    >
      <Image
        src="/gold-wave-divider-3.jpg"
        alt=""
        width={800}
        height={500}
        priority
        className="h-auto w-full gold-wave-divider-3"
      />

      <h2 className="flex items-center justify-center gap-5 text-lg font-medium">
        <span className="h-px w-16 bg-gold" />CLIENT ENGAGEMENTS{" "}
        <span className="h-px w-16 bg-gold" />
      </h2>

      <div className="marquee mx-auto mt-6 max-w-page">
        <ul className="marquee-track">
          {[...clients, ...clients].map((c, i) => (
            <li
              key={`${c.name}-${i}`}
              aria-hidden={i >= clients.length}
              className="shrink-0 px-8 md:px-12"
            >
              <Image
                src={c.logo}
                alt={i >= clients.length ? "" : c.name}
                width={160}
                height={48}
                className="h-10 w-auto max-w-[160px] object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
