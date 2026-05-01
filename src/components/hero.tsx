"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [isAnimating, setIsAnimating] = useState(true);

  const introRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const introVideoRefs = useRef<HTMLVideoElement | null>(null);
  const introDivRef = useRef<HTMLDivElement | null>(null);
  const scrollVideoRef = useRef<HTMLVideoElement | null>(null);
  const videoSectionRef = useRef<HTMLDivElement | null>(null);

  const mainContentTextRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const lenis = useLenis();

  useEffect(() => {
    if (isAnimating) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [isAnimating, lenis]);

  useGSAP(() => {
    const introChars = introRefs.current.filter(Boolean);
    const mainTexts = mainContentTextRefs.current.filter(Boolean);

    const introTl = gsap.timeline({
      delay: 0.5,
      defaults: { ease: "power3.out" },
      onComplete: () => setIsAnimating(false),
    });

    introTl
      .to(introChars, { duration: 1, transform: "translateY(0)" }, 0)
      .to(
        introVideoRefs.current,
        { duration: 1, transform: "translateY(0)" },
        0,
      )
      .to(introDivRef.current, { duration: 1, opacity: 0 }, "+=2")
      .to(mainTexts, {
        duration: 1,
        transform: "translateY(0)",
        ease: "power3.inOut",
      });

    gsap.to(scrollVideoRef.current, {
      height: "100%",
      width: "100%",
      scrollTrigger: {
        trigger: videoSectionRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });

  return (
    <section className="relative">
      {/*intro div*/}
      <div
        ref={introDivRef}
        className="h-screen inset-0 flex items-center justify-center absolute bg-foreground z-999 text-[8vw] font-bold"
      >
        <div className="flex items-center justify-center gap-12 overflow-hidden">
          <span
            ref={(el) => {
              introRefs.current[0] = el;
            }}
            className="translate-y-full"
          >
            * (
          </span>
          <video
            ref={introVideoRefs}
            src={"/videos/Short-Version.mp4"}
            autoPlay
            loop
            muted
            className="object-cover h-48 w-48 translate-y-[150%]"
          />
          <span
            ref={(el) => {
              introRefs.current[1] = el;
            }}
            className="translate-y-full"
          >
            )
          </span>
        </div>
      </div>

      {/*main content*/}
      <div className="min-h-screen flex flex-col justify-center">
        <div className="overflow-hidden flex items-center justify-center">
          <span
            ref={(el) => {
              mainContentTextRefs.current[0] = el;
            }}
            className="text-[12vw] font-bold tracking-tighter leading-[10vw] translate-y-full"
          >
            THE ART
          </span>
        </div>
        <div className="flex items-center justify-center gap-12 overflow-hidden text-[12vw] leading-[10vw] font-bold">
          <span>* (</span>
          <video
            src={"/videos/Short-Version.mp4"}
            autoPlay
            loop
            muted
            className="object-cover aspect-video w-[18vw]"
          />
          <span>)</span>
          <span className="text-2xl font-medium">Showreel</span>
        </div>
        <div className="overflow-hidden flex items-center justify-center">
          <span
            ref={(el) => {
              mainContentTextRefs.current[1] = el;
            }}
            className="text-[12vw] font-bold tracking-tighter leading-none translate-y-full"
          >
            OF
          </span>
        </div>
        <div className="overflow-hidden flex items-center justify-center">
          <span
            ref={(el) => {
              mainContentTextRefs.current[2] = el;
            }}
            className="text-[11vw] font-bold tracking-tighter leading-[10vw] translate-y-full"
          >
            HACKING
          </span>
        </div>
        <div className="overflow-hidden flex items-center justify-center">
          <span
            ref={(el) => {
              mainContentTextRefs.current[3] = el;
            }}
            className="text-[11vw] font-bold tracking-tighter leading-[10vw] translate-y-full"
          >
            SOCIAL
          </span>
        </div>
      </div>

      <div ref={videoSectionRef} className="h-screen flex justify-center p-2">
        <video
          ref={scrollVideoRef}
          src={"/videos/Short-Version.mp4"}
          autoPlay
          loop
          muted
          className="object-cover h-0 w-0 will-change-auto"
        />
      </div>
    </section>
  );
}
