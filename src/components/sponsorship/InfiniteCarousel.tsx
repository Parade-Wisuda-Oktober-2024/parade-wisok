import { type ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const InfiniteCarousel: React.FC<Props> = ({ children }) => {
  return (
    <div className="sponsor-slider">
      <div className="sponsor-cards mt-10">
        {children}
        {children} 
        {children} 
      </div>
    </div>
  );
};

export default InfiniteCarousel;
