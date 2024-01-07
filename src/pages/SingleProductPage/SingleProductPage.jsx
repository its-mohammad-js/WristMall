import { useEffect, useState } from "react";
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

  // slick.js settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // appendDots: appendDotsFunc,
    dots: true,
    arrows: true,
    useTransform: true,
  };

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
            <Slider {...settings}>
              {productData.images.map((image, index) => (
                <img key={index} src={image}></img>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
}

export default SingleProductPage;
