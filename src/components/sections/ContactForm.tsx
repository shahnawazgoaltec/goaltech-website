"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactSchema, type ContactInput } from "@/lib/schemas";

type Errors = Partial<Record<keyof ContactInput, string>>;
type Status = "idle" | "sending" | "sent" | "error";

const MAX_MESSAGE = 1500;
const input =
  "mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [count, setCount] = useState(0);

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setCount(0);
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p role="status" className="rounded-xl border border-gold bg-gold/10 p-6 text-sm text-gray-900">
        Thanks — we received your message and will reply within one business day.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full Name" required error={errors.name} htmlFor="name">
          <input id="name" name="name" className={input} autoComplete="name" />
        </Field>
        <Field label="Email Address" required error={errors.email} htmlFor="email">
          <input id="email" name="email" type="email" className={input} autoComplete="email" />
        </Field>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Phone Number" error={errors.phone} htmlFor="phone">
          <input id="phone" name="phone" type="tel" className={input} autoComplete="tel" />
        </Field>
        <Field label="Company" error={errors.company} htmlFor="company">
          <input id="company" name="company" className={input} autoComplete="organization" />
        </Field>
      </div>

      <Field label="Subject" required error={errors.subject} htmlFor="subject">
        <input id="subject" name="subject" className={input} />
      </Field>

      <Field
        label="Message"
        required
        error={errors.message}
        htmlFor="message"
        hint={`(${count}/${MAX_MESSAGE})`}
      >
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={MAX_MESSAGE}
          onChange={(e) => setCount(e.target.value.length)}
          className={input}
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          We couldn’t send your message. Check your connection and try again.
        </p>
      )}

      <Button type="submit" disabled={status === "sending"}>
        <Send size={16} aria-hidden />
        {status === "sending" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

function Field({
  label, required, hint, error, htmlFor, children,
}: {
  label: string; required?: boolean; hint?: string; error?: string; htmlFor: string; children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span aria-hidden> *</span>}
        {hint && <span className="ml-1 text-xs font-normal text-gray-400">{hint}</span>}
      </label>
      {children}
      {error && <p role="alert" className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}