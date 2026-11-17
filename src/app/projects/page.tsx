import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { projects } from "@/data/content";

export const metadata: Metadata = { title: "Projects — GoalTec Solutions" };

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <ProjectsSection projects={projects} showCta={false} />
      <CtaBanner />
    </div>
  );
}
