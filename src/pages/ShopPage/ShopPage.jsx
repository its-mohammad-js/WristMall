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
    dots: true,
    arrows: false,
    onSwipe: onSwipe,
    appendDots: appendDotsFunc,
  };
  //   handle slide image change
  const changeSlideHandler = (slideindex) => {
    setSelectedSlide(slideindex);
  };
  //   on title slider change
  function onSwipe(e) {
    // on next slide
    if (e === "right") {
      // if its first slide turn to last
      if (selectedSlide === 0) {
        setSelectedSlide(3);
      }
      //   else display prev slide
      else setSelectedSlide((prev) => prev - 1);
    }
    // on prev slide
    if (e === "left") {
      // if its last slide turn to first
      if (selectedSlide === 3) {
        setSelectedSlide(0);
      }
      //   else display next slide
      else setSelectedSlide((prev) => prev + 1);
    }
  }
  // customize pagination dots (jsx)
  function appendDotsFunc(e) {
    return (
      <>
        <div className="flex justify-center gap-x-1">
          {e.map((p) => (
            <span
              key={p.key}
              className={`${
                p.props.className === "" && "!bg-EerieBlack-100"
              } p-1 bg-Buff-300 transition-all rounded-full`}
            ></span>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto 2xl:max-w-6xl">
      <div id="wrapper" className="h-screen py-20 px-2 flex w-full gap-x-2">
        <div className="w-1/2 flex flex-col items-center justify-center gap-y-1">
          {/* title slider */}
          <Slider {...settings} className="bg-Buff-100 w-full h-1/3 rounded-md">
            {shopHeroSectionInfo.map((slide, index) => (
              <div
                key={index}
                className="text-center text-sm h-28 rounded-t-md py-8"
              >
                <span>{slide.title}</span>
              </div>
            ))}
          </Slider>
          {/* slide description */}
          <div className="bg-EerieBlack-600 text-white-100 text-xs px-2 py-1 w-full h-1/3 rounded-md overflow-auto">
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
                selectedSlide === index ? "flex-1" : "h-10 flex-none"
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
  );
}
