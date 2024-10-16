import type {HTMLAttributes} from "react";
import {cn} from "~/lib/utils";

export default function OnoHeader({children, className}: { variants?: string } & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn("title bg-gradient-to-b from-text-alt to-text bg-clip-text text-transparent", "font-bold [text-shadow:2px_2px_10px_#FFF3D9]", className)}>
      {children}
    </h1>
  );
}