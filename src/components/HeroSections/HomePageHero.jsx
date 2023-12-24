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
  // let selectedWatch = useRef(0);
  const swiperElRef = useRef(null);

  // animation status => loaded || onSwipe
  const [status, setStatus] = useState("loaded");
  // background color state
  const [bg, setBg] = useState({
    currentBg: "",
    nextBg: "",
  });

  useEffect(() => {
    if (topProucts.length && topProucts[selectedWatch.current]) {
      setBg((prev) => {
        if (selectedWatch.current >= 2) {
          return {
            currentBg: topProucts[selectedWatch.current].secondaryColor,
            nextBg: topProucts[0].secondaryColor,
          };
        } else {
          return {
            currentBg: topProucts[selectedWatch.current].secondaryColor,
            nextBg: topProucts[selectedWatch.current + 1].secondaryColor,
          };
        }
      });
    }
  }, [status]);

  useEffect(() => {
    if (!swiperElRef.current) return;
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;

      setStatus("onSwipe");

      if (progress === 0) {
        setSelectedWatch(0);
      }
      if (progress === 0.5) {
        setSelectedWatch(1);
      }
      if (progress === 1) {
        setSelectedWatch(2);
      }
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      setStatus("loaded");
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    onSwipe: (e) => console.log(e),
    dots: false,
    arrows: false,
  };

  return (
    <div className="w-screen h-screen relative sm:container sm:mx-auto sm:h-[500px] 2xl:max-w-6xl flex items-center justify-center md:justify-start mb-16">
      {/* background video  */}
      <video
        autoPlay
        loop
        muted
        className="h-screen w-screen object-cover absolute"
      >
        <source src="./sample.webm" />
      </video>

      {/* typing text animation */}
      <div className="absolute z-10 w-full flex justify-center items-center px-8">
        <h1
          className={`${
            status === "onSwipe" && "animate-typing"
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
            {/* <div
              className={`flex px-4 py-2 bg-white-100 bg-opacity-20 md:bg-opacity-0 rounded-lg`}
            > */}
            <Slider {...settings} className="bg-red-400 md:max-w-xs px-4 py-2">
              {topProucts.map((product) => (
                <img
                  key={product.id}
                  src={product.thumbnail}
                  alt={product.name}
                  className="w-44 h-44 object-contain"
                />
              ))}
            </Slider>
            {/* </div> */}
            {/* description  */}
            <div className="w-full text-center py-4 px-2 flex flex-col justify-center items-center gap-y-2 md:hidden">
              {/* title */}
              <h2
                className={`${
                  status !== "onSwipe" && "animate-typing"
                } text-lg line-clamp-1 text-center overflow-hidden whitespace-nowrap`}
              >
                {topProucts[selectedWatch].name}
              </h2>
              {/* price */}
              <p className="bg-black text-white-100 px-2 py-1 rounded-full transition-all ">
                ${topProucts[selectedWatch].price}
              </p>
            </div>
            {/* card buttons */}
            <div className="flex items-center justify-center md:justify-between gap-x-2 md:hidden">
              <button className="bg-black text-white-100 px-4 py-2 rounded-md flex-1 ">
                show detail
              </button>
              <div className="hidden md:block">....</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePageHero;
