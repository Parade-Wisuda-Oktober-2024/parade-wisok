import React from "react";
import type { HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

export default function Title2({
  children,
  className,
}: { variants?: string } & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("title mb-4 text-[75px]", className)}
      style={{
        background: "linear-gradient(180deg, #FFF 0%, #DD62D1 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </h1>
  );
}
