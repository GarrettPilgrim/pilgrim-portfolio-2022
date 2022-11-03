import React from "react";
import { useInView } from "react-intersection-observer";
import "./scroll-animation.scss";

const ScrollAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-10% 0px",
  });

  return (
    <div ref={ref}>
      <div className={inView ? "animated" : "out-of-view"}>{children}</div>
    </div>
  );
};

export default ScrollAnimation;