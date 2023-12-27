import { useEffect, useRef, useState } from "react";
import HomePageHero from "../../components/HeroSections/HomePageHero";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rudex/products/productActions";
import Slider from "react-slick";
import { TbTruckDelivery } from "react-icons/tb";
import { BsWatch } from "react-icons/bs";
import { FaGift, FaMoneyBillWave } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

function HomePage() {
  //  products state
  const { loading, productsData, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  //   get all products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <HomePageHero />

      {/* {productsData.length && <OverviewSection productsData={productsData} />} */}
      <Slide srcGif="https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/gifs%2Fslide%20bg%2001.mp4?alt=media&token=e2a3fbfa-10ee-4260-a1fb-6de4bed82828" />
      <Slide srcGif="https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/gifs%2Fslide%20bg%2002.mp4?alt=media&token=9711c7c5-0d78-4e63-ae3f-13156e1a8b0e" />
    </>
  );
}

export default HomePage;

function OverviewSection({ productsData }) {
  // slick.js settings
  const settings = {
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    vertical: true,
    touchMove: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container 2xl:max-w-6xl mx-auto flex flex-col mt-1 px-4 py-2 gap-y-4">
      <h2 className="text-4xl font-bold text-EerieBlack-100 neon-title">
        Overview
      </h2>
      <div className="md:flex md:gap-x-8">
        <div className="md:w-1/3">
          <Slider
            {...settings}
            className="rounded-tr-3xl h-64 md:h-96 rounded-bl-2xl custome-shadow bg-EerieBlack-400"
          >
            {productsData[0].images.map(
              (link, index) =>
                index !== 0 && (
                  <img
                    key={index}
                    src={link}
                    className="rounded-tr-3xl rounded-bl-2xl w-full h-64 md:h-96 object-cover transition-all"
                  />
                )
            )}
          </Slider>
        </div>
        <div className="md:w-2/3 flex flex-col items-center">
          <p className="text-white-100 mt-4 text-base text-center md:text-start">
            Welcome to Wrist Mall, where time meets style! ⌚️ Step into a world
            of exquisite timepieces that redefine luxury and elegance. Our
            collection boasts a fusion of classic and contemporary designs,
            ensuring there's a watch for every taste.{" "}
            <span className="hidden md:inline-block">
              {" "}
              Whether you're a horology enthusiast or seeking the perfect gift,
              we've got you covered. Our expert staff is dedicated to providing
              personalized service to help you find the perfect timepiece. At
              Wrist Mall, every watch tells a story and becomes a cherished
              companion. Visit us today and discover the art of keeping time in
              style! ⏱️
            </span>
          </p>

          <div className="w-full flex flex-col gap-y-4 md:flex-row items-center justify-between px-4 py-3 md:py-10 md:mt-5">
            <p className="text-5xl flex flex-col md:flex-row text-Buff-200 items-center gap-x-2 cursor-pointer group">
              <TbTruckDelivery className="group-hover:-translate-y-3 transition-all" />
              <span className="!text-lg">Delivery</span>
            </p>
            <p className="text-5xl flex flex-col md:flex-row text-Buff-200 items-center gap-x-2 cursor-pointer group">
              <BsWatch className="group-hover:-translate-y-3 transition-all" />
              <span className="!text-lg">Unique Products</span>
            </p>
            <p className="text-5xl flex flex-col md:flex-row text-Buff-200 items-center gap-x-2 cursor-pointer group">
              <FaMoneyBillWave className="group-hover:-translate-y-3 transition-all" />
              <span className="!text-lg">Expert Advice </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        {/* title */}
        <h2 className="neon-title text-3xl my-1">Key Features</h2>
        {/* description */}
        <p className="text-white-100 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          sint doloribus cum
        </p>
        {/* cards */}
        <div className="flex flex-col md:flex-row gap-x-4 md:mx-4 items-center justify-center gap-y-4">
          <div className="bg-Buff-100 rounded-md flex flex-col items-start justify-between px-2 py-1 w-3/4 h-32">
            <p className="bg-Buff-400 p-1.5 text-3xl m-1 rounded-full">
              <FaClock className="text-Buff-100" />
            </p>
            <span className="text-EerieBlack-600 font-semibold px-1">
              24-hour car delivery
            </span>
          </div>

          <div className="bg-Buff-100 rounded-md flex flex-col items-start justify-between px-2 py-1 w-3/4 h-32">
            <p className="bg-Buff-400 p-1.5 text-3xl m-1 rounded-full">
              <BiSupport className="text-Buff-100" />
            </p>
            <span className="text-EerieBlack-600 font-semibold px-1">
              24-7 technical support
            </span>
          </div>

          <div className="bg-Buff-100 rounded-md flex flex-col items-start justify-between px-2 py-1 w-3/4 h-32">
            <p className="bg-Buff-400 p-1.5 text-3xl m-1 rounded-full">
              <FaGift className="text-Buff-100" />
            </p>
            <span className="text-EerieBlack-600 font-semibold px-1">
              All watches send with a gift
            </span>
          </div>

          <div className="bg-Buff-100 rounded-md flex flex-col items-start justify-between px-2 py-1 w-3/4 h-32">
            <p className="bg-Buff-400 p-1.5 text-3xl m-1 rounded-full">
              {/* <SiSpringsecurity className="text-Buff-100" /> */}
            </p>
            <span className="text-EerieBlack-600 font-semibold px-1">
              Absolute confidentiality
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide({ srcGif }) {
  const elementRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const elementPosition = elementRef.current.getBoundingClientRect();

        const scrollPosition = window.scrollY;

        const scrollEl = Math.ceil(scrollPosition / elementPosition.top);

        console.log(Math.ceil(scrollPosition / elementPosition.top));

        if (scrollEl <= 1) {
          console.log("ok");
          setOpacity(0.8);
        }
        if (scrollEl >= 1) {
          setOpacity((prev) => prev + 0.1);
        }

        // if (scrollPosition >= elementPosition) {
        //   // setIsElementVisible(true);

        //   setOpacity((prev) => prev + 0.1);
        // }
        // if (elementPosition < 0) {
        //   // setIsElementVisible(false);
        //   // if (opacity <= 0.3) return;
        //   setOpacity(0.2);
        // }
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={elementRef} className="container mx-auto transition-all relative">
      <div style={{ opacity: opacity }} className="transition-all">
        <video
          id="targetElement"
          autoPlay
          muted
          loop
          className="w-screen h-screen"
        >
          <source src={srcGif} />
        </video>
      </div>

      <div
        style={{ display: opacity === 0.8 ? "none" : "block" }}
        className="w-full h-full bg-white-100 bg-opacity-0 backdrop-blur-sm absolute inset-0 transition-all"
      >
        glass
      </div>
    </div>
  );
}
