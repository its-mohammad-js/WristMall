import { useEffect } from "react";
import HomePageHero from "../../components/HeroSections/HomePageHero";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rudex/products/productActions";
import Slider from "react-slick";
import { TbTruckDelivery } from "react-icons/tb";
import { BsWatch } from "react-icons/bs";
import { FaGift, FaMoneyBillWave } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import Slide from "../../components/Slides/Slide";
import { categoriesInformation, slidesInformation } from "../../constants";

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
      {/* watch swiper */}
      <HomePageHero />
      {/* top slides */}
      {slidesInformation.map((info) => (
        <Slide key={info.id} {...info} />
      ))}
      {/* categories section */}
      <CategoriesSection />
      {/* {productsData.length && <OverviewSection productsData={productsData} />} */}
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

function CategoriesSection() {
  return (
    <div className="container mx-auto 2xl:max-w-6xl">
      <div
        id="wrapper"
        className="w-full h-screen flex flex-col bg-white-100 bg-opacity-95 relative"
      >
        {/* background image & color */}
        <div className="w-full h-full z-0 absolute">
          <div id="imageWrapper" className="w-full h-full">
            <img
              src={categoriesInformation.backgorungUrl}
              alt="categoreis-section-background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
        </div>

        {/* title */}
        <h2 className="z-10 text-center text-xl font-extrabold bg-opacity-5 py-4">
          Category
        </h2>

        {/* category slides */}
        <div className="flex flex-wrap items-center justify-evenly z-10 py-4 gap-y-4">
          {categoriesInformation.listOfcategories.map((c, index) => (
            <div
              data-aos="fade-right"
              key={index}
              className="w-36 h-32 relative group"
            >
              <img
                src={c.bgUrl}
                alt={c.categoryTitle}
                className="object-cover w-full h-full"
              />

              <div
                data-aos="fade-left"
                data-aos-duration="600"
                className="absolute inset-0 bg-Buff-500 bg-opacity-20 border-4 border-white-100 backdrop-blur-sm group-hover:backdrop-blur-none duration-500 transition-all flex justify-center items-center"
              >
                <h3 className="text-white-100 text-lg neon-title">
                  {c.categoryTitle}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
