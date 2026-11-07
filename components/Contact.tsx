import { InquiryForm } from "./InquiryForm";
import { contact } from "@/lib/contact";

/**
 * Section 9 — Contact.
 *
 * A spacious closing composition on a deep forest-green background. Client-
 * supplied contact details (email, phone, location) are shown alongside the
 * enquiry form. The form submits honestly via a pre-filled email draft.
 */
export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-forest py-28 text-primary-foreground md:py-40">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-6 md:grid-cols-12 md:gap-10 md:px-[5vw]">
        <div className="md:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cream/70">
            Get in touch
          </p>
          <h2 className="mt-6 font-display text-[clamp(32px,4.4vw,52px)] font-semibold leading-[1.08] tracking-[-0.035em]">
            Let&apos;s discuss your project
          </h2>
          <p className="mt-6 max-w-[52ch] text-base leading-[1.75] text-cream/80">
            Have a project in mind or need professional consultancy? Share a few
            details about what you are planning and start a conversation with
            Tobiya.
          </p>

          <dl className="mt-10 text-[15px]">
            <div className="flex items-baseline gap-6 border-t border-cream/15 py-4 first:border-t-0 first:pt-0">
              <dt className="w-24 shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/50">
                Email
              </dt>
              <dd>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-cream underline decoration-cream/40 underline-offset-4 transition-colors hover:decoration-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
                >
                  {contact.email}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline gap-6 border-t border-cream/15 py-4">
              <dt className="w-24 shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/50">
                Phone
              </dt>
              <dd className="text-cream">
                {contact.phone}
                {contact.phonePlaceholder && (
                  <span className="ml-2 text-[12px] text-cream/45">(digits to be confirmed)</span>
                )}
              </dd>
            </div>
            <div className="flex items-baseline gap-6 border-t border-cream/15 py-4">
              <dt className="w-24 shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/50">
                Office
              </dt>
              <dd className="text-cream">
                {contact.city}, {contact.country}
              </dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
