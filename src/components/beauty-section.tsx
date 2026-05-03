"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "/images/chimg.jpg",
  "/images/chimg.jpg",
  "/images/chimg.jpg",
  "/images/chimg.jpg",
  "/images/chimg.jpg",
];

export default function BeautySection() {
  const paraRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    const images = imagesRefs.current.filter(Boolean);
    const headings = headingRefs.current.filter(Boolean);
    if (!paraRef.current || !containerRef.current || images.length === 0)
      return;

    headings.forEach((el) => {
      gsap.to(el, {
        transform: "translateY(0%)",
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
        },
      });
    });

    gsap.to(paraRef.current, {
      filter: "blur(0px)",
      opacity: 1,
      transform: "translateY(0%)",
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "60% center",
        scrub: true,
      },
    });

    gsap.to(images, {
      filter: "blur(0px)",
      opacity: 1,
      transform: "translateY(0%)",
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "70% center",
        end: "77% center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative py-24 md:py-64 overflow-hidden"
    >
      {/* FOR */}
      <div className="flex items-center justify-center overflow-hidden">
        <span
          ref={(el) => {
            headingRefs.current[0] = el;
          }}
          className="text-[12vw] font-bold tracking-tighter leading-[10vw] translate-y-full"
        >
          FOR
        </span>
      </div>

      {/* BEAUTY + video */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="overflow-hidden">
          <span
            ref={(el) => {
              headingRefs.current[1] = el;
            }}
            className="text-[12vw] font-bold tracking-tighter leading-[10vw] translate-y-full block"
          >
            BEAUTY
          </span>
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-12 text-[12vw] leading-[10vw] font-bold">
          <div className="overflow-hidden">
            <span
              ref={(el) => {
                headingRefs.current[2] = el;
              }}
              className="translate-y-full block"
            >
              (
            </span>
          </div>
          <video
            src={"/videos/chicago.mp4"}
            autoPlay
            loop
            muted
            className="object-cover h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64"
          />
          <div className="overflow-hidden">
            <span
              ref={(el) => {
                headingRefs.current[3] = el;
              }}
              className="translate-y-full block"
            >
              )
            </span>
          </div>
          <span className="hidden md:block text-2xl font-medium">
            {"<-"} Click me
          </span>
        </div>
      </div>

      {/* FASHION */}
      <div className="flex items-center justify-center overflow-hidden">
        <span
          ref={(el) => {
            headingRefs.current[4] = el;
          }}
          className="text-[12vw] font-bold tracking-tighter leading-[10vw] translate-y-full"
        >
          FASHION
        </span>
      </div>

      {/* video + AND */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="flex items-center justify-center gap-4 md:gap-12 text-[12vw] leading-[10vw] font-bold">
          <span className="hidden md:block text-2xl font-medium">
            Click me {"->"}
          </span>
          <div className="overflow-hidden">
            <span
              ref={(el) => {
                headingRefs.current[5] = el;
              }}
              className="translate-y-full block"
            >
              (
            </span>
          </div>
          <video
            src={"/videos/chicago.mp4"}
            autoPlay
            loop
            muted
            className="object-cover h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64"
          />
          <div className="overflow-hidden">
            <span
              ref={(el) => {
                headingRefs.current[6] = el;
              }}
              className="translate-y-full block"
            >
              )
            </span>
          </div>
        </div>
        <div className="overflow-hidden">
          <span
            ref={(el) => {
              headingRefs.current[7] = el;
            }}
            className="text-[12vw] font-bold tracking-tighter leading-[10vw] translate-y-full block"
          >
            AND
          </span>
        </div>
      </div>

      {/* WELLNESS */}
      <div className="flex items-center justify-center overflow-hidden">
        <span
          ref={(el) => {
            headingRefs.current[8] = el;
          }}
          className="text-[12vw] font-bold tracking-tighter leading-[10vw] translate-y-full"
        >
          WELLNESS
        </span>
      </div>

      {/* standalone video */}
      <div className="flex items-center justify-center gap-4 md:gap-12 text-[12vw] leading-[10vw] font-bold">
        <div className="overflow-hidden">
          <span
            ref={(el) => {
              headingRefs.current[9] = el;
            }}
            className="translate-y-full block"
          >
            (
          </span>
        </div>
        <video
          src={"/videos/chicago.mp4"}
          autoPlay
          loop
          muted
          className="object-cover h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64"
        />
        <div className="overflow-hidden">
          <span
            ref={(el) => {
              headingRefs.current[10] = el;
            }}
            className="translate-y-full block"
          >
            )
          </span>
        </div>
      </div>

      {/* paragraph */}
      <div
        ref={paraRef}
        className="my-24 md:my-48 flex flex-col items-center justify-center px-4 md:px-8 translate-y-full opacity-0 blur-md"
      >
        <p className="font-serif text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight md:leading-none">
          In a world where everyone is trying to do everything, we choose to
          specialize in the beauty, fashion, and wellness industries.
        </p>

        <button className="underline underline-offset-2 mt-12 font-semibold text-lg">
          More about us
        </button>
      </div>

      {/* images */}
      <div className="mt-16 md:mt-32 flex flex-col items-center gap-8 md:flex-row md:justify-between px-4">
        {IMAGES.map((image, index: number) => (
          <div
            ref={(el) => {
              imagesRefs.current[index] = el;
            }}
            key={`${index}-${image}`}
            className="flex flex-col gap-2 w-48 sm:w-52 md:w-[8vw] translate-y-full opacity-0 blur-md"
          >
            <span className="text-sm font-semibold">( 0{index + 1} )</span>
            <div className="relative w-full aspect-square">
              <Image
                src={image}
                alt={`ana-${index + 1}`}
                className="object-cover"
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
