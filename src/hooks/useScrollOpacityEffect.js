import { useEffect, useState } from "react";

const useScrollOpacityEffect = (elementRef) => {
  //  default opacity value
  const [opacity, setOpacity] = useState(1);

  //   increase opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const elementPosition = elementRef.current.getBoundingClientRect();

        const scrollPosition = window.scrollY;

        const scrollEl = Math.ceil(scrollPosition / elementPosition.y);

        if (scrollEl >= 1) {
          setOpacity(0.4);
        } else {
          setOpacity(opacity - 0.1);
        }
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { opacity };
};

export default useScrollOpacityEffect;
