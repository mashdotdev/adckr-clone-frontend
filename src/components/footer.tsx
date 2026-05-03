"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const nameSplit = SplitText.create(nameRef.current, {
      type: "chars",
      charsClass: "char-class",
      autoSplit: true,
    });

    gsap.to(paraRef.current, {
      opacity: 1,
      transform: "translateY(0%)",
      duration: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "-10% center",
        end: "top center",
        scrub: true,
      },
    });

    gsap.to(nameSplit.chars, {
      duration: 1,
      stagger: {
        each: 0.05,
        from: "center",
      },
      transform: "translateY(0%)",
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "center center",
      },
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="min-h-screen bg-[#191919] text-foreground pt-24 md:pt-64 flex flex-col overflow-hidden"
    >
      <div
        ref={paraRef}
        className="flex flex-col gap-12 translate-y-full opacity-0"
      >
        <p className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl px-6 sm:px-12 md:px-24 font font-serif">
          We don&apos;t just do social media, we master it. From scroll-stopping
          content to high-impact designs that drives real results, we make
          brands impossible to ignore. Let&apos;s create something
          unforgettable.
        </p>

        <button className="underline underline-offset-4 font-semibold">
          Don&apos;t be shy, contact us now
        </button>
      </div>

      <div className="my-16 md:my-80"></div>

      <p
        ref={nameRef}
        className="text-[40vw] text-center font-bold mt-auto leading-[33vw]"
      >
        adkr.
      </p>
    </footer>
  );
}
