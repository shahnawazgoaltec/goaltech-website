import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About Us — GoalTec Solutions",
  description: "Learn about GoalTec's mission, vision and values.",
};

export default function AboutPage() {
  return (
    <>
      {/* dark strip so the white header text stays readable on the light section */}
      <div className="bg-black pt-24" />
      <AboutSection />
      <div className="bg-black pt-16" />
      <CtaBanner />
    </>
  );
}