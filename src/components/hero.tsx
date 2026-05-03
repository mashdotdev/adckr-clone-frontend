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
  const mainContentVideoRef = useRef<HTMLVideoElement | null>(null);

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
      .to(introDivRef.current, { duration: 1, autoAlpha: 0 }, "+=2")
      .to([...mainTexts, mainContentVideoRef.current], {
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
        className="h-screen inset-0 flex items-center justify-center absolute bg-foreground z-999 text-[4vw] font-bold"
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
            src={"/videos/chicago.mp4"}
            autoPlay
            loop
            muted
            className="object-cover h-24 w-24 translate-y-[150%]"
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
            className="text-[12vw] font-bold tracking-tight leading-[10vw] translate-y-full"
          >
            THE ART
          </span>
        </div>
        <div className="flex items-center justify-center gap-12 overflow-hidden text-[12vw] leading-[10vw] font-bold">
          <span
            ref={(el) => {
              mainContentTextRefs.current[4] = el;
            }}
            className="translate-y-full"
          >
            * (
          </span>
          <video
            ref={mainContentVideoRef}
            src={"/videos/chicago.mp4"}
            autoPlay
            loop
            muted
            className="object-cover aspect-video h-[8vh] w-[20vw] md:h-[16vh] md:w-[10vw] translate-y-[150%]"
          />
          <span
            ref={(el) => {
              mainContentTextRefs.current[5] = el;
            }}
            className="translate-y-full"
          >
            )
          </span>
          <span
            ref={(el) => {
              mainContentTextRefs.current[6] = el;
            }}
            className="text-2xl font-medium translate-y-full"
          >
            Showreel
          </span>
        </div>
        <div className="overflow-hidden flex items-center justify-center">
          <span
            ref={(el) => {
              mainContentTextRefs.current[1] = el;
            }}
            className="text-[12vw] font-bold tracking-tight leading-none translate-y-full"
          >
            OF
          </span>
        </div>
        <div className="overflow-hidden flex items-center justify-center">
          <span
            ref={(el) => {
              mainContentTextRefs.current[2] = el;
            }}
            className="text-[11vw] font-bold tracking-tight leading-[10vw] translate-y-full"
          >
            HACKING
          </span>
        </div>
        <div className="overflow-hidden flex items-center justify-center">
          <span
            ref={(el) => {
              mainContentTextRefs.current[3] = el;
            }}
            className="text-[11vw] font-bold tracking-tight leading-[10vw] translate-y-full"
          >
            SOCIAL
          </span>
        </div>
      </div>

      <div ref={videoSectionRef} className="h-screen flex justify-center p-2">
        <video
          ref={scrollVideoRef}
          src={"/videos/chicago.mp4"}
          autoPlay
          loop
          muted
          className="object-cover h-0 w-0 will-change-auto"
        />
      </div>
    </section>
  );
}
