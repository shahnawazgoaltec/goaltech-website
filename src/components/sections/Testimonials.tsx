"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/ui/Stars";
import type { Testimonial } from "@/lib/schemas";

const SWIPE_THRESHOLD = 60; // px of drag needed to move one card
const initials = (n: string) => n.split(" ").map((w) => w[0]).join("");

/** Cards visible at once: 1 on mobile, 3 from the md breakpoint (768px) up. */
function usePerView() {
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setPerView(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return perView;
}

export function Testimonials({ items }: { items: Testimonial[] }) {
  const perView = usePerView();
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef<number | null>(null);

  const maxIndex = Math.max(0, items.length - perView); // last position that still fills the row
  const positions = maxIndex + 1;
  const current = Math.min(index, maxIndex);

  const go = (next: number) => setIndex((next + positions) % positions); // arrows/dots wrap around

  /* ---------- swipe / drag ---------- */
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    startX.current = e.clientX;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    setDragX(e.clientX - startX.current);
  };
  const endDrag = () => {
    if (startX.current === null) return;
    if (dragX < -SWIPE_THRESHOLD) setIndex(Math.min(current + 1, maxIndex)); // swipe left -> next card
    else if (dragX > SWIPE_THRESHOLD) setIndex(Math.max(current - 1, 0)); // swipe right -> previous card
    startX.current = null;
    setDragX(0);
    setDragging(false);
  };

  return (
    <section className="bg-black px-6 pb-8 pt-20 client-testimonials">
      <SectionHeading dark eyebrow="CLIENT TESTIMONIALS" title="What Our" accent="Clients Say" />

      <div className="mx-auto mt-12 max-w-page" aria-roledescription="carousel" aria-label="Client testimonials">
        {/* -mx-2.5 cancels the card padding so the edges line up with the rest of the page */}
        <div className="-mx-2.5 overflow-hidden">
          <div
            className={`flex select-none touch-pan-y [--per:1] md:[--per:3] ${dragging ? "cursor-grabbing" : "cursor-grab"} ${
              dragging ? "" : "transition-transform duration-500 ease-out motion-reduce:transition-none"
            }`}
            style={
              {
                "--n": items.length,
                width: "calc(var(--n) * 100% / var(--per))",
                transform: `translateX(calc(${-current} * 100% / var(--n) + ${dragX}px))`,
              } as React.CSSProperties
            }
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            {items.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${items.length}`}
                className="px-2.5"
                style={{ width: "calc(100% / var(--n))" }}
              >
                <figure
                  className={`h-full rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none ${
                    i % 2 === 1 ? "bg-gold text-black" : "bg-ink-card"
                  }`}
                >
                  <Stars rating={t.rating} className={i % 2 === 1 ? "fill-black text-black" : "fill-white text-white"} />
                  <blockquote className="mt-4 min-h-[8rem] text-sm leading-relaxed">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-xs font-semibold">
                      {initials(t.name)}
                    </span>
                    <span>
                      <span className="block font-semibold">{t.name}</span>
                      <span className={`text-xs ${i % 2 === 1 ? "text-black/70" : "text-white/70"}`}>
                        {t.role} • {t.company}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>

      {positions > 1 && (
        <div className="mt-10 flex items-center justify-center gap-5 slider-btns">
          <button aria-label="Previous testimonial" onClick={() => go(current - 1)}>
            <ArrowLeft size={20} />
          </button>
          {Array.from({ length: positions }, (_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === current}
              onClick={() => go(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/30"}`}
            />
          ))}
          <button aria-label="Next testimonial" onClick={() => go(current + 1)}>
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
}