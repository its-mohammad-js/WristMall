import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rudex/products/productActions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowDown } from "react-icons/io";
import WatchSwiperLoader from "../Loaders/WatchSwiperLoader";
import { Link } from "react-router-dom";

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

  if (loading) return <WatchSwiperLoader />;

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

  // slick.js settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: appendDotsFunc,
    dots: true,
    arrows: false,
    useTransform: true,
  };

  // change selected watch state on swipe
  function afterSwipe(e) {
    // Preventing unnecessary and unexpected re-rendering
    if (status === "onSwipe") return;

    setStatus("onSwipe");

    setTimeout(() => {
      setSelectedWatch(e);

      setStatus("loaded");
    }, 1000);
  }

  // customize pagination dots (jsx)
  function appendDotsFunc(e) {
    return (
      <>
        <div className="flex justify-center mt-2 gap-x-2">
          {e.map((p) => (
            <span
              key={p.key}
              className={`${
                p.props.className === "" && "!bg-EerieBlack-100"
              } w-5 h-1 bg-Buff-400 transition-all`}
            ></span>
          ))}
        </div>
      </>
    );
  }

  // just scroll down :)
  const scrollDownHandle = () => {
    window.scrollTo({ top: 400 });
    // console.log(window.scrollY);
  };

  return (
    <div className="w-screen h-screen relative sm:container sm:mx-auto sm:h-[630px] 2xl:max-w-screen-2xl flex items-center justify-center md:justify-start">
      {/* background video  */}
      <video
        autoPlay
        loop
        muted
        className="h-screen w-screen md:w-1/3 md:h-full md:rounded-bl-md object-cover absolute z-10"
      >
        <source src="https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/gifs%2Fhero%20bg.webm?alt=media&token=e9695373-b9d7-4786-8d44-5891095b0734" />
      </video>

      {/* typing text animation */}
      <div className="absolute z-10 w-full flex justify-center items-center px-8 md:pl-52">
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
        } bg-white-90 relative w-11/12 md:w-1/3 md:h-full md:flex items-center justify-center px-4 py-2 z-20 rounded-md md:bg-opacity-0 md:px-0 md:py-0 md:backdrop-blur-0`}
      >
        {topProucts[selectedWatch] && (
          <div>
            {/* image slider */}
            <>
              <Slider
                {...settings}
                afterChange={(e) => afterSwipe(e)}
                className="bg-Buff-100 md:bg-Buff-400 backdrop-blur-sm bg-opacity-25 md:bg-opacity-10 rounded-md md:max-w-xs px-4 py-2 md:mt-40"
              >
                {topProucts.map((product) => (
                  <img
                    key={product.id}
                    src={product.thumbnail}
                    alt={product.name}
                    className={`w-44 h-44 object-contain md:h-56 md:w-fit`}
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
              <Link
                to={`/WristMall/SingleWatch/${topProucts[selectedWatch].id}`}
                className="bg-black text-white-100 px-4 py-2 rounded-md flex-1 text-center"
              >
                Show Detail
              </Link>
            </div>
          </div>
        )}
        {/* scroll button */}
        <button
          onClick={scrollDownHandle}
          className="text-Buff-300 absolute -bottom-10 animate-upDown w-10/12 z-10 text-4xl animate-puls md:hidden flex items-center justify-center"
        >
          <IoIosArrowDown />
        </button>
      </div>

      {/* details section (desktop vision) */}
      <div
        className={`${
          status === "onSwipe"
            ? "bg-opacity-0"
            : "bg-Buff-300 opacity-100 rounded-br-md"
        } w-2/3 h-full hidden md:flex  items-center transition-all relative`}
      >
        {topProucts[selectedWatch] && (
          <>
            <div
              style={{
                backgroundColor: topProucts[selectedWatch].secondaryColor,
              }}
              className={`${
                status === "onSwipe" && "animate-fadeIn opacity-40"
              } h-full w-full opacity-0 transition-all rounded-br-md absolute z-0`}
            ></div>

            <div className="w-full h-full absolute">
              <div id="wrapper" className="w-full h-full">
                <div
                  style={{
                    backgroundColor: topProucts[selectedWatch].secondaryColor,
                  }}
                  className={`${
                    status === "onSwipe" && "animate-swapeOut"
                  } w-52 h-52 rounded-full -z-20 -ml-20 transition-all`}
                ></div>
                <div
                  style={{
                    backgroundColor: topProucts[selectedWatch].primaryColor,
                  }}
                  className={`${
                    status === "onSwipe" && "animate-swapeIn"
                  } w-40 h-40 rounded-full -z-20 float-right mt-5 transition-all`}
                ></div>
              </div>
            </div>

            <div
              className={`${
                status === "onSwipe"
                  ? "invisible opacity-0"
                  : "visible opacity-100"
              } z-20 bg-EerieBlack-600 mt-4 bg-opacity-75 backdrop-blur-md border-[2px] border-white-100 ring-[3px] ring-Buff-400 w-full mx-16 transition-all text-white-100 px-4 py-2 rounded-md`}
            >
              <h2
                style={{ color: topProucts[selectedWatch].secondaryColor }}
                className="text-center text-xl transition-all"
              >
                {topProucts[selectedWatch].name}
              </h2>

              <p className="line-clamp-4 text-sm mt-1">
                {topProucts[selectedWatch].description}
              </p>

              <div className="my-4">
                <ul className="">
                  {topProucts[selectedWatch].summaryDetails.map(
                    (summary, index) => (
                      <li key={index} className="border-b-2 border-white-99 ">
                        {summary}
                      </li>
                    )
                  )}
                  <li className="border-b-2 border-white-99 ">
                    price : ${topProucts[selectedWatch].price}
                  </li>
                </ul>
              </div>
              <Link
                to={`/WristMall/SingleWatch/${topProucts[selectedWatch].id}`}
                className="bg-Buff-500 px-2 py-1 rounded-md text-white-100 border-b-2 hover:border-Buff-500 text-sm transition-all"
              >
                Show Details
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePageHero;
