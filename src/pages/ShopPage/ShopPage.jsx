import { useState } from "react";
import { shopHeroSectionInfo } from "../../constants";
import Slider from "react-slick";

function ShopPage() {
  return (
    <>
      <ShopHeroSection />
    </>
  );
}

export default ShopPage;

function ShopHeroSection() {
  const [selectedSlide, setSelectedSlide] = useState(0);
  // slick.js settings
  const settings = {
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    autoplay: true,
    autoplaySpeed: 3000,
  };
  //   handle slide image change
  const changeSlideHandler = (slideindex) => {
    setSelectedSlide(slideindex);
  };

  return (
    <div className="container mx-auto 2xl:max-w-6xl relative">
      {/* hero background */}
      <div className="h-full w-full absolute -z-10">
        <div className="w-52 h-52 bg-Buff-100 rounded-full -z-20 float-left"></div>
        <div className="w-52 h-52 bg-Buff-200 rounded-full -z-20 float-right"></div>
        <div className="w-52 h-52 bg-Buff-300 rounded-full -z-20 float-left"></div>
      </div>

      {/* content wrapper */}
      <div
        id="slide-wrapper"
        className="h-screen md:h-[450px] md:flex md:items-center md:justify-between md:gap-x-10 pt-20 md:pt-24 px-2 w-full z-30 bg-Buff-300 bg-opacity-25 backdrop-blur-lg"
      >
        {/*  */}
        <div className="hidden md:block w-2/3 h-full bg-red-600">hey</div>
        {/* slides wrapper */}
        <div className="flex gap-x-2 h-full md:w-1/3">
          {/* slide text */}
          <div className="w-1/2 flex flex-col items-center justify-center gap-y-1">
            {/* title slider */}
            <Slider
              afterChange={(e) => setSelectedSlide(e)}
              {...settings}
              className="bg-Buff-100 w-full h-1/3 md:h-1/2 rounded-md flex items-center md:px-4 md:py-2"
            >
              {shopHeroSectionInfo.map((slide, index) => (
                <p key={index} className="text-center text-sm">
                  {slide.title}
                </p>
              ))}
            </Slider>
            {/* slide description */}
            <div className="bg-EerieBlack-600 text-white-100 text-xs px-3 py-2 w-full h-1/3  md:h-1/2 rounded-md overflow-auto md:overflow-hidden">
              {shopHeroSectionInfo[selectedSlide].desc}
            </div>
          </div>
          {/* slide images */}
          <div className="w-1/2 flex flex-col gap-y-1 max-h-full">
            {shopHeroSectionInfo.map((slide, index) => (
              <div
                key={index}
                onClick={() => changeSlideHandler(index)}
                className={`${
                  selectedSlide === index ? "flex-1 h-10" : "h-10 flex-none"
                }  rounded-md transition-all duration-1000`}
              >
                <img
                  src={slide.bgUrl}
                  alt="slide-bg"
                  className={`h-full w-full object-cover rounded-md`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
