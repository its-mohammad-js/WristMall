import { useState } from "react";
import { shopHeroSectionInfo } from "../../constants";

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

  const changeSlideHandler = (slideindex) => {
    setSelectedSlide(slideindex);
  };

  return (
    <div className="container mx-auto 2xl:max-w-6xl">
      <div id="wrapper" className="h-screen py-20 px-2 flex w-full gap-x-2">
        <div className="w-1/2 flex flex-col items-center justify-center gap-y-1">
          {/* slide description */}
          <div className="bg-yellow-300 w-full h-1/3 rounded-md">
            {shopHeroSectionInfo[selectedSlide].title}
          </div>
          <div className="bg-emerald-400 w-full h-1/3 rounded-md overflow-auto">
            {shopHeroSectionInfo[selectedSlide].desc}
          </div>
        </div>
        {/* slide images */}
        <div className="w-1/2 flex flex-col items-center  gap-y-1 max-h-full overflow-hidden">
          {shopHeroSectionInfo.map((slide, index) => (
            <div
              key={index}
              onClick={() => changeSlideHandler(index)}
              className={`${
                selectedSlide === index
                  ? "bg-red-600 flex-1"
                  : "bg-gray-700 flex-none h-10"
              }  flex-1 rounded-md transition-all !duration-700`}
            >
              <img
                src={slide.bgUrl}
                alt="slide-bg"
                className={`h-full w-full object-cover rounded-md duration-1000 transition-all`}
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
