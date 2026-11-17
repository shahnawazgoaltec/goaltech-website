import { z } from "zod";
import {
  navItemSchema, serviceSchema, projectSchema, testimonialSchema, techSchema,
} from "@/lib/schemas";

// Every collection is parsed with Zod, so malformed content fails loudly at build time.
export const navItems = z.array(navItemSchema).parse([
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/#clients" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/contact" },
]);

export const clients = ["accenture", "Capgemini", "DYDON AI", "tcs", "Deloitte."];

export const services = z.array(serviceSchema).parse([
  { slug: "web-development", title: "Web Development", icon: "globe", description: "Custom web applications built with modern frameworks, optimized for performance and scalability." },
  { slug: "mobile-app-development", title: "Mobile App Development", icon: "phone", description: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences." },
  { slug: "ui-ux-design", title: "UI/UX Design", icon: "layers", description: "User-centered design that converts. From wire frames to polished interfaces, we craft every pixel." },
  { slug: "cloud-devops", title: "Cloud & DevOps", icon: "cloud", description: "Cloud infrastructure setup, CI/CD pipelines, and DevOps best practices to ship faster." },
  { slug: "cybersecurity", title: "Cybersecurity", icon: "shield", description: "Comprehensive security audits, penetration testing, and ongoing threat monitoring." },
  { slug: "data-analytics", title: "Data Analytics", icon: "chart", description: "Turn raw data into actionable insights with custom dashboards, ML models, and BI tools." },
]);

export const projects = z.array(projectSchema).parse([
  { slug: "dydonai", title: "DydonAI", tag: "AI Solution", categories: ["AI", "Web Dev"], stack: ["Python", "React JS"], accent: "#1E2A5E", description: "Empowering financial institutions with AI-driven ESG analytics, climate risk insights, and compliance." },
  { slug: "cv-builder", title: "CV Builder", tag: "Web Application", categories: ["Web Dev", "AI"], stack: ["Vue JS", "Spring Boot"], accent: "#3B82F6", description: "Build professional, ATS-friendly resumes in minutes with AI assistance." },
  { slug: "lovemebeauty", title: "LoveMeBeauty", tag: "E-commerce", categories: ["Web Dev", "UI/UX"], stack: ["PHP", "JavaScript"], accent: "#8B5A3C", description: "A modern e-commerce platform for beauty and wellness brands." },
]);

export const testimonials = z.array(testimonialSchema).parse([
  { quote: "GoalTec delivered an exceptional AI-driven compliance system that transformed our operations. Their technical expertise and commitment to quality truly set them apart.", name: "Sarah Johnson", role: "CTO", company: "DydonAI", rating: 5 },
  { quote: "Working with GoalTec was a smooth experience from start to finish. They understood our complex requirements and delivered a robust solution that exceeded our expectations.", name: "Mark Williams", role: "Project Manager", company: "Sainsbury", rating: 5, featured: true },
  { quote: "GoalTec helped us build our e-commerce platform from the ground up. Their attention to detail and responsive communication made the entire process seamless.", name: "Jennifer Lee", role: "CEO", company: "LoveMeBeauty", rating: 5 },
]);

export const techStack = z.array(techSchema).parse([
  { name: "Python", abbr: "Py" }, { name: "React", abbr: "Re" }, { name: "Node.js", abbr: "JS" },
  { name: "Next.js", abbr: "N" }, { name: "AWS", abbr: "aws" }, { name: "Azure", abbr: "Az" },
  { name: "Docker", abbr: "Dk" }, { name: "Kubernetes", abbr: "K8s" },
]);

export const footerLinks = {
  quick: ["Home", "Services", "Projects", "Clients", "About Us", "Contact"],
  services: ["Web Development", "Software Solutions", "Data Services", "Cloud Computing", "AI Solutions"],
};

export const company = {
  email: "info@goaltec.solutions",
  address: "623, Krishna Business Center, Vijay Nagar, Indore",
  blurb: "Passionate IT service provider with extensive experience in software development, web applications, and digital transformation.",
};
