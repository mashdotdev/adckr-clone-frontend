"use client";

import clsx from "clsx";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function TransitionLink({
  children,
  href,
  className,
  onClick,
}: TransitionLinkProps) {
  const router = useTransitionRouter();
  const pathName = usePathname();

  function fadeInOut() {
    if (pathName === href) return;

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
        duration: 800,
        fill: "forwards",
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        pseudoElement: "::view-transition-old(root)",
      },
    );

    document.documentElement.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 800,
      fill: "forwards",
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      pseudoElement: "::view-transition-new(root)",
    });
  }

  return (
    <Link
      href={href}
      className={clsx(className)}
      onClick={(event) => {
        event.preventDefault();
        onClick?.();

        router.push(href, {
          onTransitionReady: fadeInOut,
        });
      }}
    >
      {children}
    </Link>
  );
}
