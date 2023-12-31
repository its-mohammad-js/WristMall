import { useEffect } from "react";
import HomePageHero from "../../components/HeroSections/HomePageHero";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rudex/products/productActions";
import Slider from "react-slick";
import { TbTruckDelivery } from "react-icons/tb";
import { BsWatch } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";
import Slide from "../../components/Slides/Slide";
import { categoriesInformation, slidesInformation } from "../../constants";
import { fetchNews } from "../../rudex/news/newsActions";

function HomePage() {
  //  products state
  const { loading, productsData, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  //   get all products
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchNews());
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
      {/* news section */}
      <NewsSection />
      {/* overview section */}
      {productsData.length && <OverviewSection productsData={productsData} />}
    </>
  );
}

export default HomePage;

function CategoriesSection() {
  return (
    <div className="container mx-auto 2xl:max-w-6xl">
      <div
        id="wrapper"
        data-aos="fade-right"
        data-aos-duration="800"
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
        <h2 className="z-10 text-center text-xl md:text-4xl font-extrabold bg-opacity-5 py-4">
          Category
        </h2>

        {/* category slides */}
        <div className="flex flex-wrap items-center justify-evenly z-10 py-4 gap-y-4">
          {categoriesInformation.listOfcategories.map((c, index) => (
            <div
              key={index}
              className="w-36 h-32 md:w-72 md:h-64 relative group"
            >
              {/* category background image */}
              <img
                src={c.bgUrl}
                alt={c.categoryTitle}
                className="object-cover w-full h-full"
              />
              {/* category title */}
              <div
                data-aos="zoom-in"
                data-aos-duration="950"
                className="absolute inset-0 bg-Buff-500 bg-opacity-20  border-4 border-white-100 backdrop-blur-sm group-hover:backdrop-blur-none flex justify-center items-center"
              >
                <h3 className="text-white-100 text-sm md:text-lg neon-title py-1 group-hover:-translate-y-4 transition-all duration-500">
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

function NewsSection() {
  const settings = {
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  };
  const { loading, newsData, error } = useSelector((state) => state.news);

  if (loading) return <p>Loading...</p>;

  if (!loading)
    return (
      <div className="container mx-auto 2xl:max-w-6xl">
        <div id="wrapper" className="px-4 py-2 flex flex-col gap-y-4">
          {/* title  */}
          <h2 className="neon-title text-center !text-Buff-300 text-xl font-extrabold">
            Last News
          </h2>

          {/* news slider */}

          <Slider {...settings} className="">
            {newsData.map((news, index) => {
              return (
                <div
                  key={news.id}
                  className="text-EerieBlack-600 w-full h-full"
                >
                  <h3 className="text-center line-clamp-1 text-lg text-white-100">
                    {news.title}
                  </h3>
                  <p className="text-sm text-white-90">{news.description}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
}

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
    <div className="container 2xl:max-w-6xl mx-auto flex flex-col px-4 py-2 md:py-4 gap-y-4">
      <h2 className="text-4xl font-bold text-EerieBlack-100 neon-title">
        Overview
      </h2>
      <div className="md:flex md:gap-x-8">
        <div className="md:w-1/3" data-aos="fade-right">
          <Slider {...settings} className="h-64 md:h-96 rounded-md">
            {productsData[0].images.map(
              (link, index) =>
                index !== 0 && (
                  <img
                    key={index}
                    src={link}
                    className="w-full h-64 md:h-96 object-cover transition-all"
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
            <p
              data-aos="fade-up"
              data-aos-duration="400"
              className="text-5xl flex flex-col md:flex-row text-Buff-200 items-center gap-x-2 cursor-pointer group"
            >
              <TbTruckDelivery className="group-hover:-translate-y-3 transition-all" />
              <span className="!text-lg">Delivery</span>
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-5xl flex flex-col md:flex-row text-Buff-200 items-center gap-x-2 cursor-pointer group"
            >
              <BsWatch className="group-hover:-translate-y-3 transition-all" />
              <span className="!text-lg">Unique Products</span>
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              className="text-5xl flex flex-col md:flex-row text-Buff-200 items-center gap-x-2 cursor-pointer group"
            >
              <FaMoneyBillWave className="group-hover:-translate-y-3 transition-all" />
              <span className="!text-lg">Expert Advice </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
