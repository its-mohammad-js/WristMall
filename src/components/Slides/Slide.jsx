import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Slide({ backgroundUrl, title, subTitle }) {
  const elementRef = useRef(null);
  //   opacity of glass background
  const [opacity, setOpacity] = useState(1);

  //   increase glass opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const elementPosition = elementRef.current.getBoundingClientRect();

        const scrollPosition = window.scrollY;

        const scrollEl = Math.ceil(scrollPosition / elementPosition.y);

        console.log(Math.ceil(scrollPosition / elementPosition.top));

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

  return (
    <div className="container mx-auto 2xl:max-w-6xl transition-all relative">
      {/* background gif */}
      <div data-aos="zoom-in-up" className="transition-all">
        <video
          id="targetElement"
          autoPlay
          muted
          loop
          className="w-full h-[600px] md:h-screen object-cover"
        >
          <source src={backgroundUrl} />
        </video>
      </div>

      {/* background glassEffect */}
      <div
        ref={elementRef}
        style={{
          opacity: opacity,
        }}
        className="w-full h-full bg-Buff-300 bg-opacity-5 backdrop-blur-md absolute inset-0 transition-all duration-1000"
      >
        &nbsp;
      </div>

      {/* title & subTitle */}
      <div className="w-full h-full text-white-90 absolute inset-0 flex flex-col justify-center items-center gap-y-6">
        <span data-aos="fade-right" className="text-Buff-300 font-extrabold">
          {subTitle}
        </span>
        <h2
          data-aos="fade-left"
          className="text-xl text-white-100 bg-Buff-500 bg-opacity-50 font-bold px-2 py-1"
        >
          {title}
        </h2>

        <Link
          // to="Shop"
          data-aos="zoom-in"
          className="bg-white-90 bg-opacity-20 backdrop-blur-md rounded-md text-white-100-500 px-4 py-2"
        >
          Learn More...
        </Link>
      </div>
    </div>
  );
}

export default Slide;
