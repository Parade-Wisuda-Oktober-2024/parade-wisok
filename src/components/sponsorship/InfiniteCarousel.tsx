import { type ReactNode } from "react";

interface Props {
  children?: ReactNode;
  direction?: "left" | "right"; // Add direction prop
}

const InfiniteCarousel: React.FC<Props> = ({ children, direction = "left" }) => {
  return (
    <div className="sponsor-slider overflow-hidden w-full relative">
      <div className={`mt-3 md:mt-6 lg:mt-9 ${direction === "left" ? "scroll-left" : "scroll-right"}`}>
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
