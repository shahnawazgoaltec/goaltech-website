type Props = { eyebrow: string; title: string; accent: string; subtitle?: string; dark?: boolean };

export function SectionHeading({ eyebrow, title, accent, subtitle, dark = false }: Props) {
  const line = <span className="h-px w-10 bg-gold" aria-hidden />;
  return (
    <header className="mx-auto max-w-2xl text-center">
      <p className={`flex items-center justify-center gap-4 text-xs font-medium uppercase ${dark ? "text-white" : "text-black"}`}>
        {line}{eyebrow}{line}
      </p>
      <h2 className={`mt-3 text-3xl font-semibold md:text-4xl ${dark ? "text-white" : "text-black"}`}>
        {title} <span className="text-gold">{accent}</span>
      </h2>
      {subtitle && <p className={`mt-3 text-sm ${dark ? "text-white/80" : "text-black/70"}`}>{subtitle}</p>}
    </header>
  );
}
