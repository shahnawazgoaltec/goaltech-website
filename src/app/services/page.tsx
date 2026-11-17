import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = { title: "Services — GoalTec Solutions" };

export default function ServicesPage() {
  return (
    <>
      <div className="bg-black pt-24" />
      <ServicesSection showCta={false} />
      <div className="bg-black pt-16" />
      <CtaBanner />
    </>
  );
}
