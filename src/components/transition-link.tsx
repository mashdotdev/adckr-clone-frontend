"use client";

import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function TransitionLink({
  children,
  href,
}: TransitionLinkProps) {
  const router = useTransitionRouter();

  function fadeInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 500,
        fill: "forwards",
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        pseudoElement: "::view-transition-old(root)",
      },
    );

    document.documentElement.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 500,
      fill: "forwards",
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      pseudoElement: "::view-transition-new(root)",
    });
  }

  return (
    <Link
      href={href}
      onClick={(event) => {
        event.preventDefault();

        router.push(href, {
          onTransitionReady: fadeInOut,
        });
      }}
    >
      {children}
    </Link>
  );
}
