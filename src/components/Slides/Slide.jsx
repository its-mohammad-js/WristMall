import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useScrollOpacityEffect from "../../hooks/useScrollOpacityEffect";

function Slide({ backgroundUrl, title, subTitle }) {
  const elementRef = useRef(null);
  const { opacity } = useScrollOpacityEffect(elementRef);

  return (
    <div className="container mx-auto 2xl:max-w-screen-2xl transition-all relative">
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
        <span
          data-aos="fade-right"
          className="text-Buff-300 font-extrabold md:text-2xl"
        >
          {subTitle}
        </span>
        <h2
          data-aos="fade-left"
          className="text-xl md:text-4xl text-white-100 bg-Buff-500 bg-opacity-50 font-bold px-2 py-1"
        >
          {title}
        </h2>

        <Link
          // to="Shop"
          data-aos="zoom-in"
          className="bg-white-90 bg-opacity-20 backdrop-blur-md rounded-md text-white-100-500 px-4 py-2 md:text-2xl"
        >
          Learn More...
        </Link>
      </div>
    </div>
  );
}

export default Slide;
