"use client";

import { useEffect, useRef } from "react";

export function SiteCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const supportsCustomCursor = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!cursor || !supportsCustomCursor.matches) return;

    const root = document.documentElement;
    const interactiveSelector = "a, button:not(:disabled), input, textarea, select, label, [role='button'], [tabindex]";

    const onPointerMove = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.classList.add("is-visible");

      const target = event.target instanceof Element ? event.target : null;
      cursor.classList.toggle("is-interactive", Boolean(target?.closest(interactiveSelector)));
    };
    const onPointerDown = () => cursor.classList.add("is-pressed");
    const onPointerUp = () => cursor.classList.remove("is-pressed");
    const onPointerLeave = () => cursor.classList.remove("is-visible", "is-pressed");

    root.classList.add("custom-cursor-ready");
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);
    window.addEventListener("blur", onPointerLeave);

    return () => {
      root.classList.remove("custom-cursor-ready");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
    };
  }, []);

  return (
    <div ref={cursorRef} className="site-cursor" aria-hidden="true">
      <span className="site-cursor-halo" />
      <svg className="site-cursor-pointer" viewBox="0 0 24 28" fill="none" focusable="false">
        <path d="M2.5 2.25 20.5 12l-8.1 2.65 4.45 8.55-4.2 2.15-4.4-8.45-5.75 6.15V2.25Z" />
      </svg>
      {/* Pointing hand shown over links and buttons; shape from Material Design Icons "cursor-pointer" (Apache 2.0). */}
      <svg className="site-cursor-hand" viewBox="0 0 24 24" fill="none" focusable="false">
        <path d="m13.75 10.19l.63.13l4.17 2.08c.7.23 1.16.92 1.1 1.66v.26l-.9 6.12c-.06.43-.25.83-.6 1.11c-.31.3-.72.45-1.15.45h-6.88c-.49 0-.94-.18-1.27-.53L2.86 15.5l.9-1c.24-.25.62-.39.98-.37h.29L9 15V4.5a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5.69z" />
      </svg>
    </div>
  );
}
