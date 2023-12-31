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
    dots: false,
    arrows: false,
    onSwipe: onSwipe,
  };

  const changeSlideHandler = (slideindex) => {
    setSelectedSlide(slideindex);
  };

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

  return (
    <div className="container mx-auto 2xl:max-w-6xl">
      <div id="wrapper" className="h-screen py-20 px-2 flex w-full gap-x-2">
        <div className="w-1/2 flex flex-col items-center justify-center gap-y-1">
          {/* slide description */}

          <Slider
            {...settings}
            className="bg-Buff-100 w-full h-1/3 rounded-md flex items-center"
          >
            {shopHeroSectionInfo.map((slide, index) => (
              <p key={index} className="text-center text-sm">
                {slide.title} &nbsp;
              </p>
            ))}
          </Slider>

          <div className="bg-emerald-400 w-full h-1/3 rounded-md overflow-auto">
            {shopHeroSectionInfo[selectedSlide].desc}
          </div>
        </div>
        {/* slide images */}
        <div className="w-1/2 flex flex-col gap-y-1 max-h-full overflow-hidden">
          {shopHeroSectionInfo.map((slide, index) => (
            <div
              key={index}
              onClick={() => changeSlideHandler(index)}
              className={`${
                selectedSlide === index
                  ? "bg-red-600 flex-1 h-10"
                  : "bg-gray-700 flex-none h-10"
              }  flex-1 rounded-md transition-all duration-1000`}
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

{
  /* <div id="wrapper" className="h-screen py-20 px-2 flex w-full gap-x-2">
  <div className="w-1/2 flex flex-col items-center justify-center gap-y-1">
    <div className="bg-yellow-300 w-full h-1/3 rounded-md">1</div>
    <div className="bg-emerald-400 w-full h-1/3 rounded-md">2</div>
  </div>
  <div className="w-1/2 flex flex-col gap-y-1">
    {[1, 2, 3, 4].map((slide, index) => (
      <div
        key={index}
        onClick={() => changeSlideHandler(index)}
        className={`${
          selectedSlide === index
            ? "bg-red-600 flex-1"
            : "bg-gray-700 flex-none"
        }  flex-1 rounded-md transition-all !duration-500 py-4`}
      >
        slide {slide}
      </div>
    ))}
  </div>
</div>; */
}
