import Link from "next/link";
import { Mail, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { company, footerLinks } from "@/data/content";

const socials = [
  { Icon: Linkedin, label: "LinkedIn" }, { Icon: Twitter, label: "Twitter" }, { Icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-ink px-6 pb-8 pt-16">
      <div className="mx-auto grid max-w-page gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-xs leading-relaxed text-white/90">{company.blurb}</p>
          <p className="mt-6 flex items-center gap-3 text-xs">
  <Mail size={14} aria-hidden />
  <a href={`mailto:${company.email}`} className="hover:text-gold">{company.email}</a>
</p>
          <p className="mt-3 flex items-center gap-3 text-xs"><MapPin size={14} />{company.address}</p>
        </div>
        <FooterColumn title="Quick Links" items={footerLinks.quick.map((l) => ({ label: l, href: l === "Home" ? "/" : `/${l.toLowerCase().replace(" ", "-")}` }))} />
        <FooterColumn title="Our Services" items={footerLinks.services.map((l) => ({ label: l, href: "/services" }))} />
      </div>
      <div className="mx-auto mt-10 flex max-w-page items-center justify-between border-t border-gold pt-6 text-xs">
        <p>© 2026 GoalTec Solutions. All rights reserved.</p>
        <div className="flex gap-3">
          {socials.map(({ Icon, label }) => (
            <a key={label} href="#" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-black"><Icon size={16} /></a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-xs">
        {items.map((i) => <li key={i.label}><Link href={i.href} className="hover:text-gold">{i.label}</Link></li>)}
      </ul>
    </div>
  );
}
