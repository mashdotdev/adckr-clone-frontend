import Hero from "@/components/hero";
import BeautySection from "@/components/beauty-section";
import React from "react";
import TransitionLink from "@/components/transition-link";

export default function Home() {
  return (
    <main>
      <TransitionLink href="/check">click me</TransitionLink>
      <Hero />
      <BeautySection />
    </main>
  );
}
