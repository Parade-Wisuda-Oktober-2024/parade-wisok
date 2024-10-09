import React from "react";
import type { HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

export default function Title({
  children,
  className,
}: { variants?: string } & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <>
      <h1
        className={cn("title mb-4 text-[70px]", className)}
        style={{
          background: "linear-gradient(to bottom, #FFFFFF, #F1A469)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow:
            "0 4px 40px rgba(255, 140, 217, 0.7), 0 2px 60px rgba(0, 0, 0, 0.25)",
        }}
      >
        {children}
      </h1>
    </>
  );
}
