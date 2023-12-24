import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rudex/products/productActions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HomePageHero() {
  //  products state
  const { loading, productsData } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // filter top products
  const topProucts = productsData.filter((product) => product.isOnTop);

  //   get all products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) return <p className="text-white-100">Loading ...</p>;

  if (!loading && productsData)
    return (
      <>
        <WatchSwiper topProucts={topProucts} />
      </>
    );
}

function WatchSwiper({ topProucts }) {
  // selected product state (index)
  const [selectedWatch, setSelectedWatch] = useState(0);
  // animation status => loaded || onSwipe
  const [status, setStatus] = useState("loaded");
  // background color state
  const [bg, setBg] = useState({
    currentBg: "",
    nextBg: "",
  });

  // useEffect(() => {
  //   if (topProucts.length && topProucts[selectedWatch.current]) {
  //     setBg((prev) => {
  //       if (selectedWatch.current >= 2) {
  //         return {
  //           currentBg: topProucts[selectedWatch.current].secondaryColor,
  //           nextBg: topProucts[0].secondaryColor,
  //         };
  //       } else {
  //         return {
  //           currentBg: topProucts[selectedWatch.current].secondaryColor,
  //           nextBg: topProucts[selectedWatch.current + 1].secondaryColor,
  //         };
  //       }
  //     });
  //   }
  // }, [status]);

  // slick.js settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    onSwipe: onSwipe,
    dots: false,
    arrows: false,
  };

  // change selected watch state on swipe
  function onSwipe(e) {
    setStatus("onSwipe");

    setTimeout(() => {
      if (e === "left") {
        if (selectedWatch === 2) setSelectedWatch(0);

        setSelectedWatch((prev) => prev + 1);
      } else if (e === "right") {
        if (selectedWatch === 0) setSelectedWatch(2);

        setSelectedWatch((prev) => prev - 1);
      }

      setStatus("loaded");
    }, 1000);
  }

  return (
    <div className="w-screen h-screen relative sm:container sm:mx-auto sm:h-[500px] 2xl:max-w-6xl flex items-center justify-center md:justify-start mb-16">
      {/* background video  */}
      <video
        autoPlay
        loop
        muted
        className="h-screen w-screen md:h-full object-cover absolute"
      >
        <source src="./sample.webm" />
      </video>

      {/* typing text animation */}
      <div className="absolute z-10 w-full flex justify-center items-center px-8">
        <h1
          className={`${
            status === "onSwipe" ? "animate-typing duration-1000" : "hidden"
          } text-xl line-clamp-1 neon-title text-center overflow-hidden whitespace-nowrap`}
        >
          {topProucts[selectedWatch] && topProucts[selectedWatch].name}
        </h1>
      </div>

      {/* product card */}
      <div
        className={`${
          status === "onSwipe"
            ? "bg-opacity-40 backdrop-blur-0"
            : "bg-opacity-60 backdrop-blur-sm"
        } bg-white-90 w-11/12 md:w-2/5 md:h-full md:flex items-center justify-center px-4 py-2 z-20 rounded-md md:bg-opacity-0 md:px-0 md:py-0 md:backdrop-blur-0`}
      >
        {topProucts.length > 0 && (
          <div>
            {/* image container */}
            <>
              <Slider
                {...settings}
                className="bg-white-100 backdrop-blur-sm bg-opacity-25 md:bg-opacity-0 rounded-md md:max-w-xs px-4 py-2 md:mt-40"
              >
                {topProucts.map((product) => (
                  <img
                    key={product.id}
                    src={product.thumbnail}
                    alt={product.name}
                    className={`${
                      status !== "loaded" && "animate-spin duration-500"
                    } w-44 h-44 object-contain md:h-full`}
                  />
                ))}
              </Slider>
            </>
            {/* description  */}
            <div className="w-full text-center py-4 px-2 flex flex-col justify-center items-center gap-y-2 md:invisible">
              {/* title */}
              <h2
                className={`${
                  status !== "onSwipe" && "animate-typing"
                } text-lg line-clamp-1 text-center overflow-hidden whitespace-nowrap`}
              >
                {topProucts[selectedWatch].name}
              </h2>
              {/* price */}
              <p
                className={`${
                  status === "onSwipe" && "animate-pulse w-20 h-8"
                } bg-black text-white-100 px-2 py-1 rounded-full transition-all`}
              >
                {status === "loaded" && `$${topProucts[selectedWatch].price}`}
              </p>
            </div>
            {/* card buttons */}
            <div className="flex items-center justify-center md:justify-between gap-x-2 md:invisible">
              <button className="bg-black text-white-100 px-4 py-2 rounded-md flex-1 ">
                Show Detail
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePageHero;
