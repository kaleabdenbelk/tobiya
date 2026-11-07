"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contact } from "@/lib/contact";

/**
 * Contact enquiry form.
 *
 * No backend/form service endpoint exists yet, so the form validates its input
 * and then opens a pre-filled email draft in the visitor's mail application via
 * a `mailto:` link. This is an honest, functional submission path — we never
 * pretend a message was sent to a server.
 */

const initialValues = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

type FieldName = keyof typeof initialValues;

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] font-medium text-cream/80">
        {label} {required && <span className="text-cream/50">*</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-[13px] text-red-200">{error}</span>}
    </label>
  );
}

export function InquiryForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [feedback, setFeedback] = useState<string | null>(null);

  const clearError = (field: FieldName) => {
    setErrors((er) => ({ ...er, [field]: undefined }));
    setFeedback(null);
  };

  const update =
    (field: FieldName) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setValues((v) => ({ ...v, [field]: value }));
      clearError(field);
    };

  const updateSelect = (value: string | null) => {
    setValues((v) => ({ ...v, projectType: value ?? "" }));
    clearError("projectType");
  };

  const validate = () => {
    const next: Partial<Record<FieldName, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your full name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Please tell us briefly about your project.";
    return next;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    const subject = encodeURIComponent(`Project enquiry from ${values.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Organization: ${values.organization || "—"}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone || "—"}`,
        `Project type: ${values.projectType || "Not specified"}`,
        "",
        "Message:",
        values.message,
      ].join("\n"),
    );

    setFeedback(
      "Your email draft has been prepared in your mail app. If it did not open, please email us directly at the address shown.",
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const fieldClass =
    "w-full rounded-lg border border-cream/25 bg-cream/5 px-4 py-3 text-[15px] text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-cream/60 focus-visible:ring-2 focus-visible:ring-cream/40 aria-invalid:border-red-300/70";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name}>
          <input
            className={fieldClass}
            value={values.name}
            onChange={update("name")}
            placeholder="Your full name"
            autoComplete="name"
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label="Organization">
          <input
            className={fieldClass}
            value={values.organization}
            onChange={update("organization")}
            placeholder="Company or organization"
            autoComplete="organization"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email address" required error={errors.email}>
          <input
            type="email"
            className={fieldClass}
            value={values.email}
            onChange={update("email")}
            placeholder="you@company.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
          />
        </Field>
        <Field label="Phone number (optional)">
          <input
            type="tel"
            className={fieldClass}
            value={values.phone}
            onChange={update("phone")}
            placeholder={contact.phone}
            autoComplete="tel"
          />
        </Field>
      </div>

      <Field label="Project type">
        <Select value={values.projectType} onValueChange={updateSelect}>
          <SelectTrigger className="w-full h-auto rounded-lg border border-cream/25 bg-cream/5 px-4 py-3 text-left text-[15px] text-cream data-placeholder:text-cream/40 focus:border-cream/60 focus-visible:ring-2 focus-visible:ring-cream/40">
            <SelectValue placeholder="Select your project type" />
          </SelectTrigger>
          <SelectContent align="start" className="min-w-[var(--anchor-width)]">
            <SelectItem value="Architectural Consultancy">Architectural Consultancy</SelectItem>
            <SelectItem value="Engineering Consultancy">Engineering Consultancy</SelectItem>
            <SelectItem value="Construction Management Consultancy">
              Construction Management Consultancy
            </SelectItem>
            <SelectItem value="Other / Not sure yet">Other / Not sure yet</SelectItem>
          </SelectContent>
        </Select>
      </Field>

      <Field label="Brief description or message" required error={errors.message}>
        <textarea
          rows={5}
          className={fieldClass}
          value={values.message}
          onChange={update("message")}
          placeholder="Briefly describe your project…"
          aria-invalid={!!errors.message}
        />
      </Field>

      {feedback && (
        <p className="rounded-lg border border-cream/25 bg-cream/10 px-4 py-3 text-sm leading-relaxed text-cream">
          {feedback}
        </p>
      )}

      <button
        type="submit"
        className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-cream px-7 py-3.5 text-base font-semibold text-forest transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
      >
        Send enquiry
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      </button>
    </form>
  );
}
