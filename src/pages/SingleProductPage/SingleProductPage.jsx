import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import LoaderSpinner from "../../components/Loaders/LoaderSpinner";
import Slider from "react-slick";

function SingleProductPage() {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const sliderRef = useRef();

  // slick.js settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: appendDotsFunc,
    dots: true,
    arrows: false,
  };

  function appendDotsFunc(e) {
    // change slide when click on image
    const goToSlide = (key) => {
      sliderRef.current.slickGoTo(key);
    };

    return (
      <>
        <div className="flex overflow-y-auto mt-4 items-center gap-x-1 px-2">
          {productData.images.map((image, index) => (
            <img
              onClick={() => goToSlide(e[index].key)}
              key={index}
              src={image}
              className={`${
                e[index].props.className === "" && "opacity-25"
              } h-20 w-20 border-[1px] border-EerieBlack-300`}
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

  if (loading)
    return (
      <div className="container h-screen mx-auto 2xl:max-w-6xl">
        <LoaderSpinner />
      </div>
    );

  if (!loading && productData.name)
    return (
      <div className="container mx-auto 2xl:max-w-6xl min-h-screen bg-Buff-100">
        <div
          id="wrapper"
          className="w-full min-h-full py-20 bg-white-100 bg-opacity-80"
        >
          <div className="">
            <Slider
              ref={sliderRef}
              {...settings}
              className="min-h-[300px] relative"
            >
              {productData.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="max-h-72 object-cover"
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
}

export default SingleProductPage;
