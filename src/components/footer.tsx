import React from "react";

export default function Footer() {
  return (
    <footer className="min-h-screen bg-[#191919] text-foreground pt-64 flex flex-col overflow-hidden">
      <div className="flex flex-col gap-12">
        <p className="text-center text-6xl px-24 font font-serif">
          We don&apos;t just do social media, we master it. From scroll-stopping
          content to high-impact designs that drives real results, we make
          brands impossible to ignore. Let&apos;s create something
          unforgettable.
        </p>

        <button className="underline underline-offset-4 font-semibold">
          Don&apos;t be shy, contact us now
        </button>
      </div>

      <div className="my-80">s</div>

      <p className="text-[43vw] text-center font-bold mt-auto leading-[33vw]">
        adkr.
      </p>
    </footer>
  );
}
