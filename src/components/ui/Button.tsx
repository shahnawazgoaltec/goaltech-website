import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline";
const styles: Record<Variant, string> = {
  primary: "bg-gold text-black hover:bg-gold-dark",
  outline: "border border-white/70 text-white hover:bg-white/10",
};
const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";

type Props = { href: string; variant?: Variant; arrow?: boolean; size?: "sm" | "md"; children: ReactNode } & Omit<ComponentProps<typeof Link>, "href">;

export function ButtonLink({ href, variant = "primary", arrow, size = "md", children, className = "", ...rest }: Props) {
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${size === "sm" ? "!px-4 !py-2 text-xs" : ""} ${className}`} {...rest}>
      {children}
      {arrow && <ArrowRight size={14} aria-hidden />}
    </Link>
  );
}

export function Button({ variant = "primary", className = "", ...rest }: { variant?: Variant } & ComponentProps<"button">) {
  return <button className={`${base} ${styles[variant]} disabled:opacity-60 ${className}`} {...rest} />;
}
