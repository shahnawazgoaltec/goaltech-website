import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { TechStack } from "@/components/sections/TechStack";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { projects, testimonials, techStack } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ServicesSection />
      <ProjectsSection projects={projects} />
      <Testimonials items={testimonials} />
      <TechStack items={techStack} />
      <CtaBanner />
    </>
  );
}
