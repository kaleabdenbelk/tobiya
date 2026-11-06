import Image from "next/image";
import { Introduction } from "./Introduction";

/**
 * Section 3 — Immersive architectural visual chapter.
 *
 * The architectural photograph sits pinned behind the Introduction section. The
 * introduction is an opaque, warm-ivory foreground layer. As the visitor
 * scrolls, the introduction moves up through the viewport and the photograph
 * underneath is gradually revealed, filling almost the entire viewport.
 *
 * Implementation note: the photo is `position: sticky` with a negative bottom
 * margin so it occupies zero layout height while remaining pinned behind the
 * opaque introduction. A transparent spacer lets the fully revealed image
 * linger before Section 4 begins.
 */
export function VisualChapter() {
  return (
    <div className="relative">
      {/* Pinned photographic layer */}
      <div className="sticky top-0 -mb-[100svh] h-[100svh] w-full overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/images/visual-chapter.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent"
        />
        <p className="absolute bottom-10 left-6 max-w-xs text-sm leading-relaxed tracking-wide text-white/90 md:left-[5vw]">
          The thinking behind the built environment
        </p>
      </div>

      {/* Foreground: opaque introduction slides over the photograph */}
      <Introduction />

      {/* Quiet lingering space so the fully revealed photograph can breathe */}
      <div className="relative h-[45vh]" aria-hidden />
    </div>
  );
}
