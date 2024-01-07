import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import LoaderSpinner from "../../components/Loaders/LoaderSpinner";
import Slider from "react-slick";
import {
  FaCartPlus,
  FaCartShopping,
  FaLocationPinLock,
  FaRegCircleCheck,
  FaSquareArrowUpRight,
} from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { FaMailBulk } from "react-icons/fa";

function SingleProductPage() {
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const sliderRef = useRef();

  // slick.js settings
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: AppendDotsFunc,
    dots: true,
    arrows: false,
  };

  // append product images as slider dots
  function AppendDotsFunc(e) {
    // change slide when click on image
    const goToSlide = (key) => {
      sliderRef.current.slickGoTo(key);
    };

    return (
      <>
        <div className="flex overflow-y-auto mt-2 items-center md:justify-center gap-x-1 px-2">
          {productData.images.map((image, index) => (
            <img
              onClick={() => goToSlide(e[index].key)}
              key={index}
              src={image}
              className={`${
                e[index].props.className === "" && "opacity-25 border-white-100"
              } h-20 w-20 border-[1px] border-EerieBlack-300 rounded-md transition-all duration-300`}
            />
          ))}
        </div>
      </>
    );
  }

  // get product data from firebase
  useEffect(() => {
    // fetch product function
    const fetchProduct = async () => {
      // dispatch loading
      setLoading(true);

      try {
        // get single doc (product) from firebase
        const productRes = await getDoc(doc(db, "Products", id));
        // set product data with response
        setProductData(productRes?.data((product) => product));
      } catch (error) {
        console.log();
      } finally {
        // set loading false
        setLoading(false);
      }
    };
    // call fetch function
    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="container h-screen mx-auto 2xl:max-w-6xl">
        <LoaderSpinner />
      </div>
    );
  }

  if (!loading && productData.name)
    return (
      <div className="container mx-auto 2xl:max-w-6xl min-h-screen">
        <div
          id="wrapper"
          className="w-full min-h-full bg-white-100 pt-[71px] md:pt-[78px]"
        >
          {/* bread crumbs */}
          <div className="flex w-full items-center font-semibold px-4 py-2 md:py-4 cursor-pointer">
            <Link
              to="/WristMall/"
              className="flex items-center justify-center gap-x-0.5 hover:-translate-y-2 transition-all duration-500"
            >
              Home <MdArrowForwardIos />
            </Link>
            <p className="flex items-center justify-center gap-x-0.5">
              Wathes <MdArrowForwardIos />
            </p>
            <p className="line-clamp-1">{productData.name}</p>
          </div>

          <div className="md:fl ex items-center justify-between">
            {/* image slider */}
            <div className="min-h-[300px] md:py-2 relative">
              <Slider ref={sliderRef} {...settings} className="md:py-4">
                {productData.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="max-h-72 object-contain"
                  />
                ))}
              </Slider>
            </div>

            {/* product summary detail */}
            <div className="px-4 py-2">
              {/* product name */}
              <h2 className="text-center text-3xl mt-2 font-bold border-b-[1px] border-EerieBlack-300">
                {productData.name}
              </h2>
              {/* product summary details */}
              <p className="flex items-center justify-center gap-x-2 py-2 text-lg group">
                {productData.summaryDetails.map((summary, index) => (
                  <span
                    key={index}
                    className={`${
                      index === productData.summaryDetails.length - 1 &&
                      "border-none"
                    } border-r-[1px] px-2 border-EerieBlack-600`}
                  >
                    {summary}
                  </span>
                ))}
              </p>
              {/* product price */}
              <p className="text-center py-4 text-3xl">${productData.price}</p>
              {/* product description */}
              <ProductDescMenu productData={productData} />
              {/* add to cart btn */}
              <button className="w-full bg-EerieBlack-600 py-4 text-white-100 rounded-md my-3 flex items-center gap-x-2 justify-center">
                <FaCartShopping className="text-xl" /> Add To Cart
              </button>
            </div>
          </div>

          {/* secondary icons */}
          <div className="flex items-center justify-center gap-x-3 md:gap-x-6 py-2 md:py-6">
            <div className="flex flex-col text-4xl gap-y-1.5">
              <FaLocationPinLock className="self-center" />
              <p className="text-xs text-center">BOUTIQUES & RETAILERS</p>
            </div>
            <div className="flex flex-col text-4xl gap-y-1.5">
              <FaMailBulk className="self-center" />
              <p className="text-xs line-clamp-2 text-center">CONTACT US</p>
            </div>
            <div className="flex flex-col text-4xl gap-y-1.5">
              <FaRegCircleCheck className="self-center" />
              <p className="text-xs line-clamp-2 text-center">
                ONLINE SERVICES
              </p>
            </div>
          </div>

          {/* footer */}
          <div className="w-full flex flex-col md:flex-row md:gap-x-4 items-center justify-center px-4 py-2">
            <img
              className="w-full max-h-80 object-contain md:object-cover"
              src={productData.images[productData.images.length - 1]}
              alt={productData.name}
            />

            <div className="md:flex flex-col items-center justify-center md:justify-between">
              <p className="text-lg py-2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus ipsam sunt numquam qui accusamus eum, aliquam nesciunt
                cumque omnis id! Voluptates, dolorum?
              </p>

              <Link
                to="/WristMall/Shop"
                className="px-4 py-4 mt-4 md:mt-20 text-center hover:bg-EerieBlack-600 hover:text-white-100 transition-all border-2 border-EerieBlack-300 text-EerieBlack-600 w-full"
              >
                Descover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SingleProductPage;

function ProductDescMenu({ productData }) {
  // Description | Specifactions
  const [detailToShow, setDetailToShow] = useState("description");

  return (
    <>
      <div className="flex justify-evenly border-b-[1px] border-EerieBlack-200">
        <button
          onClick={() => setDetailToShow("description")}
          className={`${
            detailToShow === "description" && "!border-EerieBlack-600"
          } text-base md:text-lg text-center border-b-2 border-white-100 transition-all duration-300 py-2`}
        >
          Description
        </button>
        <button
          onClick={() => setDetailToShow("specifactions")}
          className={`${
            detailToShow === "specifactions" && "!border-EerieBlack-600"
          } text-base md:text-lg text-center border-b-2 border-white-100 transition-all duration-300 py-2`}
        >
          Specifactions
        </button>
      </div>

      {detailToShow === "description" && (
        <p className="py-2 md:text-lg">{productData.description}</p>
      )}

      {detailToShow === "specifactions" && (
        <table className="md:w-full">
          <tbody>
            {Object.entries(productData.specifications).map(([key, value]) => (
              <tr key={key} className="border-b-2 ">
                <td className="text-sm md:text-base px-2 py-2 border-r-2 text-center font-bold">
                  {key}
                </td>
                <td className="text-xs md:text-sm px-2 py-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
