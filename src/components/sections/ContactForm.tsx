"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { contactSchema, type ContactInput } from "@/lib/schemas";
import { services } from "@/data/content";

type Errors = Partial<Record<keyof ContactInput, string>>;
type Status = "idle" | "sending" | "sent" | "error";

const field = "mt-1 w-full rounded-lg border border-ink-line bg-ink-card px-4 py-3 text-sm focus:border-gold focus:outline-none";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = contactSchema.safeParse(Object.fromEntries(new FormData(form)));

    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      setErrors(Object.fromEntries(Object.entries(flat).map(([k, v]) => [k, v?.[0]])) as Errors);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(parsed.data) });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <p role="status" className="rounded-xl border border-gold p-6 text-sm">Thanks — we received your message and will reply within one business day.</p>;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Field label="Name" error={errors.name}><input name="name" className={field} autoComplete="name" /></Field>
      <Field label="Work email" error={errors.email}><input name="email" type="email" className={field} autoComplete="email" /></Field>
      <Field label="Company (optional)" error={errors.company}><input name="company" className={field} autoComplete="organization" /></Field>
      <Field label="What do you need help with?" error={errors.service}>
        <select name="service" className={field} defaultValue="other">
          {services.map((s) => <option key={s.slug} value={s.icon}>{s.title}</option>)}
          <option value="other">Something else</option>
        </select>
      </Field>
      <Field label="Message" error={errors.message}><textarea name="message" rows={5} className={field} /></Field>
      {status === "error" && <p role="alert" className="text-sm text-red-400">We couldn’t send your message. Check your connection and try again.</p>}
      <Button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"}</Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm">
      {label}
      {children}
      {error && <span role="alert" className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
