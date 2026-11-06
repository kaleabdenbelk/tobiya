import { InquiryForm } from "./InquiryForm";

/**
 * Section 9 — Contact.
 *
 * A spacious closing composition on a deep forest-green background. Contact
 * details are not yet verified, so only a mail link (placeholder address) is
 * shown alongside the enquiry form. The form submitts honestly via a pre-filled
 * email draft.
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

          <div className="mt-10">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-cream underline decoration-cream/40 underline-offset-4 transition-colors hover:decoration-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              hello@example.com
            </a>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
