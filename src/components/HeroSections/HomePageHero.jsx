import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rudex/products/productActions";
import { FaArrowRight } from "react-icons/fa";

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
  // const [selectedWatch, setSelectedWatch] = useState(1);
  let selectedWatch = useRef(0);
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

  const nextProductHandle = () => {
    if (status === "onSwipe") return;
    setStatus("onSwipe");

    setTimeout(() => {
      if (selectedWatch.current >= 2) {
        // setSelectedWatch(0);
        selectedWatch.current = 0;
      } else {
        // setSelectedWatch((prev) => prev + 1);
        selectedWatch.current = selectedWatch.current + 1;
      }

      setStatus("loaded");
    }, 1000);
  };

  return (
    <div className="w-screen h-screen relative sm:container sm:mx-auto sm:h-[500px] 2xl:max-w-6xl flex items-center justify-center md:justify-start mb-16">
      {/* animate background color */}
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
            status === "onSwipe" ? "animate-typing" : "hidden"
          } text-xl line-clamp-1 neon-title text-center overflow-hidden whitespace-nowrap`}
        >
          {topProucts[selectedWatch.current] &&
            topProucts[selectedWatch.current].name}
        </h1>
      </div>

      {/* product card */}
      <div
        className={`${
          status === "onSwipe"
            ? "bg-opacity-40 backdrop-blur-0"
            : "bg-opacity-60 backdrop-blur-sm"
        } bg-white-100 w-11/12 md:w-2/5 md:h-full md:flex items-center justify-center px-4 py-2 z-20 rounded-md md:bg-opacity-0 md:px-0 md:py-0 md:backdrop-blur-0`}
      >
        <swiper-container
          slides-per-view="1"
          speed="1200"
          autoPlay="true"
          css-mode="false"
        >
          {topProucts.map((product) => (
            <swiper-slide key={product.id}>
              <img src={product.thumbnail} alt="" loading="lazy" />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div>
  );
}

export default HomePageHero;
