import type {HTMLAttributes} from "react";
import {cn} from "~/lib/utils";

export default function Title({children, className}: { variants?: string } & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn("title bg-gradient-to-b from-text-alt to-text shadow-rose-600 from-65% to-0%", className)}>
      {children}
    </h1>
  );
}