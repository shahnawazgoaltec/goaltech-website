// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Logo } from "@/components/ui/Logo";
// import { ButtonLink } from "@/components/ui/Button";
// import { navItems } from "@/data/content";
// import { useEffect } from "react";

// export function Header() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);
  

//   return (
//     <header className="absolute inset-x-0 top-0 z-30">
//       <div className="mx-auto flex max-w-page items-center justify-between px-6 py-5">
//         <Logo />
//         <nav aria-label="Main" className="hidden items-center gap-8 text-sm font-medium lg:flex">
//           {navItems.map((item) => {
//             const active = item.href === pathname;
//             return (
//               <Link key={item.label} href={item.href}
//                 className={`relative pb-1 ${active ? "text-gold" : "text-white hover:text-gold"}`}>
//                 {item.label}
//                 {active && <span className="absolute inset-x-0 -bottom-1 mx-auto h-0.5 w-4 bg-gold" />}
//               </Link>
//             );
//           })}
//         </nav>
//         <ButtonLink href="/contact" size="sm" arrow className="hidden lg:inline-flex">Get Started</ButtonLink>
//         <button className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>
//       {open && (
//         <nav aria-label="Mobile" className="mx-6 flex flex-col gap-4 rounded-2xl bg-ink-card p-6 lg:hidden">
//           {navItems.map((i) => (
//             <Link key={i.label} href={i.href} onClick={() => setOpen(false)} className="text-white hover:text-gold">{i.label}</Link>
//           ))}
//           <ButtonLink href="/contact" arrow>Get Started</ButtonLink>
//         </nav>
//       )}
//     </header>
//   );
// }


"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { navItems } from "@/data/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu whenever the page changes
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-black/85 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-page items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navItems.map((item) => {
            const active = item.href === pathname;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative pb-1 transition-colors ${active ? "text-gold" : "text-white hover:text-gold"}`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 mx-auto h-0.5 bg-gold transition-all duration-300 ${
                    active ? "w-4" : "w-0 group-hover:w-4"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        <ButtonLink href="/contact" size="sm" arrow className="hidden lg:inline-flex">
          Get Started
        </ButtonLink>
        <button className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="mx-6 mb-4 flex flex-col gap-4 rounded-2xl bg-ink-card p-6 lg:hidden">
          {navItems.map((i) => (
            <Link key={i.label} href={i.href} onClick={() => setOpen(false)} className="text-white hover:text-gold">
              {i.label}
            </Link>
          ))}
          <ButtonLink href="/contact" arrow>
            Get Started
          </ButtonLink>
        </nav>
      )}
    </header>
  );
}