import { z } from "zod";

/* ---------- Content schemas (validate static data at build/runtime) ---------- */
export const serviceIconSchema = z.enum(["globe", "phone", "layers", "cloud", "shield", "chart"]);

export const serviceSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(10),
  icon: serviceIconSchema,
});

export const projectCategorySchema = z.enum(["Web Dev", "Mobile App", "UI/UX", "DevOps", "AI"]);

export const clientSchema = z.object({
  name: z.string().min(1),
  logo: z.string().startsWith("/", "Logo path must start with /"),
});

export type Client = z.infer<typeof clientSchema>;

export const projectSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  tag: z.string().min(1),
  description: z.string().min(10),
  categories: z.array(projectCategorySchema).min(1),
  stack: z.array(z.string()).min(1),
  accent: z.string().regex(/^#([0-9a-fA-F]{6})$/, "Must be a hex color"),
  image: z.string().startsWith("/", "Image path must start with /").optional(),
});

export const testimonialSchema = z.object({
  quote: z.string().min(10),
  name: z.string().min(1),
  role: z.string().min(1),
  company: z.string().min(1),
  rating: z.number().int().min(1).max(5),
  featured: z.boolean().default(false),
});

export const techSchema = z.object({
  name: z.string(),
  abbr: z.string().max(4),
  image: z.string().startsWith("/", "Image path must start with /").optional(),
});

export const navItemSchema = z.object({ label: z.string(), href: z.string() });

export type Service = z.infer<typeof serviceSchema>;
export type Project = z.infer<typeof projectSchema>;
export type ProjectCategory = z.infer<typeof projectCategorySchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type Tech = z.infer<typeof techSchema>;
export type NavItem = z.infer<typeof navItemSchema>;

/* ---------- Contact form schema (shared by client + API route) ---------- */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Enter a valid email address"),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  service: serviceIconSchema.or(z.literal("other")),
  message: z.string().trim().min(20, "Tell us a little more (at least 20 characters)").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
