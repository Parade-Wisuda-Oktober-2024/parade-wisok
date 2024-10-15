import type { HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

export default function MerchHeader({
  children,
  className,
}: { variants?: string } & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn("title bg-clip-text text-transparent", "font-bold", "bg-gradient-to-b from-[#FFF3D9] to-[#FFD787]", "[text-shadow:4px_4px_10px_rgba(255,191,81,0.75)]", className)} >
      {children}
    </h1>
  );
}
