"use client";

import Image from "next/image";

const IMAGES = [
  "/images/ana.jpg",
  "/images/ana.jpg",
  "/images/ana.jpg",
  "/images/ana.jpg",
  "/images/ana.jpg",
];

export default function BeautySection() {
  return (
    <section className="min-h-screen relative py-64 overflow-hidden">
      <div className="flex items-center justify-center gap-6">
        {/*<span className="text-2xl font-medium">Our services</span>*/}
        <span className="text-[12vw] font-bold tracking-tighter leading-[10vw]">
          FOR
        </span>
      </div>

      <div className="flex items-center justify-center gap-8">
        <span className="text-[12vw] font-bold tracking-tighter leading-[10vw]">
          BEAUTY
        </span>
        <div className="flex items-center justify-center gap-12 overflow-hidden text-[12vw] leading-[10vw] font-bold">
          <span>(</span>
          <video
            src={"/videos/Short-Version.mp4"}
            autoPlay
            loop
            muted
            className="object-cover h-64 w-64"
          />
          <span>)</span>
          <span className="text-2xl font-medium">{"<-"} Click me</span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <span className="text-[12vw] font-bold tracking-tighter leading-[10vw]">
          FASHION
        </span>
      </div>

      <div className="flex items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-12 overflow-hidden text-[12vw] leading-[10vw] font-bold">
          <span className="text-2xl font-medium">Click me {"->"} </span>
          <span>(</span>
          <video
            src={"/videos/Short-Version.mp4"}
            autoPlay
            loop
            muted
            className="object-cover h-64 w-64"
          />
          <span>)</span>
        </div>
        <span className="text-[12vw] font-bold tracking-tighter leading-[10vw]">
          AND
        </span>
      </div>

      <div className="flex items-center justify-center">
        <span className="text-[12vw] font-bold tracking-tighter leading-[10vw]">
          WELLNESS
        </span>
      </div>

      <div className="flex items-center justify-center gap-12 overflow-hidden text-[12vw] leading-[10vw] font-bold">
        <span>(</span>
        <video
          src={"/videos/Short-Version.mp4"}
          autoPlay
          loop
          muted
          className="object-cover h-64 w-64"
        />
        <span>)</span>
      </div>

      <div className="my-48 flex flex-col justify-center px-8">
        <p className="font-serif text-center text-6xl max-w-9xl leading-none">
          In a world where everyone is trying to do everything, we choose to
          specialize in the beauty, fashion, and wellness industries.
        </p>

        <button className="underline underline-offset-2 mt-12 font-semibold text-lg">
          More about us
        </button>
      </div>

      <div className="mt-32 flex flex-col items-center max-md:gap-12 md:flex-row md:justify-between px-4 transition-all duration-500">
        {IMAGES.map((image, index: number) => (
          <div
            key={`${index}-${image}`}
            className="flex flex-col gap-2 w-52 md:w-[8vw]"
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
