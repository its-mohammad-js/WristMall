import { useEffect, useRef, useState } from "react";
import HomePageHero from "../../components/HeroSections/HomePageHero";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rudex/products/productActions";
import Slider from "react-slick";
import { TbTruckDelivery } from "react-icons/tb";
import { BsWatch } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";

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

      {productsData.length && <OverviewSection productsData={productsData} />}
    </>
  );
}

export default HomePage;

function OverviewSection({ productsData }) {
  const [selectedProduct, setSelelctedProduct] = useState(0);
  // let selectedProduct = useRef(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     const index = Math.ceil(Math.random() * productsData.length);

  //     console.log(index);

  //     setSelelctedProduct(index);
  //   }, 5000);
  // }, []);

  // slick.js settings
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    vertical: true,
    touchMove: false,
    fade: true,
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
            className="rounded-tr-3xl rounded-bl-2xl custome-shadow bg-EerieBlack-400"
          >
            {productsData[0].images.map(
              (link, index) =>
                index !== 0 && (
                  <img
                    key={index}
                    src={link}
                    className="rounded-tr-3xl rounded-bl-2xl w-full h-72 md:h-96 object-cover transition-all"
                  />
                )
            )}
          </Slider>
        </div>
        <div className="md:w-2/3 flex flex-col items-center">
          <p className="text-white-100 mt-4 text-base ">
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
            <p className="text-5xl flex flex-col md:flex-row text-Buff-300 items-center gap-x-2 cursor-pointer group">
              <TbTruckDelivery className="group-hover:-translate-y-3 transition-all" />
              <span className="!text-lg">Delivery</span>
            </p>
            <p className="text-5xl flex flex-col md:flex-row text-Buff-300 items-center gap-x-2 cursor-pointer group">
              <BsWatch className="group-hover:-translate-y-3 transition-all" />
              <span className="!text-lg">Unique Products</span>
            </p>
            <p className="text-5xl flex flex-col md:flex-row text-Buff-300 items-center gap-x-2 cursor-pointer group">
              <FaMoneyBillWave className="group-hover:-translate-y-3 transition-all" />
              <span className="!text-lg">Expert Advice </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
