"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import TransitionLink from "./transition-link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const timeLineRef = useRef<gsap.core.Timeline>(
    gsap.timeline({ paused: true }),
  );
  const menuRef = useRef<HTMLDivElement>(null);

  const lenis = useLenis();

  useEffect(() => {
    if (isMenuOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [lenis, isMenuOpen]);

  useGSAP(() => {
    const tl = timeLineRef.current;

    tl.to(menuRef.current, {
      transform: "translateY(0)",
      duration: 0.6,
      ease: "power3.inOut",
    });
  });

  const toggleMenu = () => {
    if (isMenuOpen) {
      timeLineRef.current.reverse();
      setIsMenuOpen(false);
    } else {
      timeLineRef.current.play();
      setIsMenuOpen(true);
    }
  };

  return (
    <header className="z-999 p-4 flex items-center justify-between fixed w-full">
      <TransitionLink
        href="/"
        className="text-xl font-bold mix-blend-difference relative z-1000 text-white"
      >
        adckr
      </TransitionLink>
      <button
        className="text-lg font-bold cursor-pointer text-white relative z-1000"
        onClick={toggleMenu}
      >
        MENU
      </button>

      {/*full menu div*/}
      <div
        ref={menuRef}
        className="h-screen w-screen fixed z-999 bg-[#191919] inset-0 -translate-y-full text-white flex flex-col items-center justify-center"
      >
        <div>
          <TransitionLink
            href="/"
            className="text-[7vw] font-semibold tracking-tighter leading-[6vw]"
          >
            INDEX
          </TransitionLink>
        </div>

        <div>
          <TransitionLink
            href="/check"
            onClick={toggleMenu}
            className="text-[7vw] font-semibold tracking-tighter leading-[6vw]"
          >
            SERVICES
          </TransitionLink>
        </div>

        <div>
          <TransitionLink
            href="/our-work"
            className="text-[7vw] font-semibold tracking-tighter leading-[6vw]"
          >
            OUR WORK
          </TransitionLink>
        </div>

        <div className="flex items-center justify-center gap-12 overflow-hidden text-[7vw] leading-[6vw] font-bold">
          <span className="">* (</span>
          <video
            src={"/videos/Short-Version.mp4"}
            autoPlay
            loop
            muted
            className="object-cover aspect-video h-[12vh] w-[8vw]"
          />
          <span className="">)</span>
          <span className="text-2xl font-medium">Showreel</span>
        </div>

        <div>
          <TransitionLink
            href="/about"
            className="text-[7vw] font-semibold tracking-tighter leading-[6vw]"
          >
            ABOUT
          </TransitionLink>
        </div>

        <div>
          <TransitionLink
            href="/contact"
            className="text-[7vw] font-semibold tracking-tighter leading-[6vw]"
          >
            CONTACT
          </TransitionLink>
        </div>
      </div>
    </header>
  );
}
