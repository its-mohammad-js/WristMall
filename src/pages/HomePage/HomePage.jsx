import { useEffect, useRef, useState } from "react";
import HomePageHero from "../../components/HeroSections/HomePageHero";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rudex/products/productActions";
import Slider from "react-slick";

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
            className="rounded-tr-3xl rounded-bl-2xl custome-shadow"
          >
            {productsData[0].images.map((link, index) => (
              <img
                key={index}
                src={link}
                // alt={productsData[selectedProduct].name}
                className="rounded-tr-3xl rounded-bl-2xl w-full h-60 object-cover transition-all"
              />
            ))}
          </Slider>
        </div>
        <div className="md:w-2/3 ">
          <p className="text-white-100 mt-4 text-base ">
            {productsData[selectedProduct].description}
          </p>
        </div>
      </div>
    </div>
  );
}
