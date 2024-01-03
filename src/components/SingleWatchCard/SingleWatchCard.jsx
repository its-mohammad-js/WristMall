import { FaCartPlus } from "react-icons/fa";
import { AddProductToCart } from "../../rudex/cart/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../config/firebase";
import { useEffect, useState } from "react";

function SingleWatchCard({ name, thumbnail, summaryDetails, price, id }) {
  // user local data
  const { isAuthenticated } = useSelector((state) => state.authData);
  // cart data
  const { cartData, loading } = useSelector((state) => state.cartData);
  // selcted product id
  const [selectedProduct, setSlectedProduct] = useState("");

  const dispatch = useDispatch();
  
  // add to cart function
  function addToCart() {
    //
    setSlectedProduct(`${id}`);
    // redux action
    dispatch(AddProductToCart(id, isAuthenticated, auth?.currentUser?.uid));
  }

  useEffect(() => {
    if (!loading) setSlectedProduct("");
  }, [loading]);

  return (
    <div
      id="card-wrapper"
      className="w-1/2 sm:w-1/4 h-80 md:h-96 max-h-96 flex flex-col items-center bg-Buff-300 bg-opacity-50 backdrop-blur-sm rounded-md group hover:ring-2 ring-EerieBlack-100"
    >
      {/* product cover */}
      <div className="h-3/4 w-full px-4 py-2 rounded-t-md">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-contain py-2 group-hover:-translate-y-2 duration-500 ease-in-out"
        />
      </div>
      {/* product details */}
      <div className="w-full px-2 py-1 cursor-pointer">
        <p className="text-sm text-center font-semibold group-hover:text-white-100 transition-all">
          {name}
        </p>
        <p className="text-center group-hover:text-white-90 duration-200 line-clamp-1">
          {summaryDetails.map((summary, index) => (
            <span key={index} className="text-xs">
              {summary} &nbsp;
            </span>
          ))}
        </p>
        <div className="w-full max-h-full flex justify-between items-center px-2 py-2">
          <span className="group-hover:text-white-90 group-hover:-translate-y-1 duration-500 ease-in-out">
            ${price}
          </span>

          <button
            onClick={() => addToCart()}
            className={`${
              loading &&
              selectedProduct === id &&
              "flex-1 ml-1.5 md:ml-2 duration-1000 animate-pulse"
            } p-1.5 rounded-md bg-Buff-200 duration-500`}
          >
            {loading && selectedProduct === id ? (
              <p className="text-EerieBlack-600 text-xs md:text-sm animate-bounce">
                adding...
              </p>
            ) : (
              <FaCartPlus className="text-EerieBlack-600 text-lg md:text-xl group-hover:animate-bounce" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleWatchCard;
