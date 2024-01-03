import { useDispatch, useSelector } from "react-redux";
import { cartPageBgUrl } from "../../constants";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import {
  removeProductFromCart,
  updateCartData,
} from "../../rudex/cart/cartActions";
import { auth } from "../../config/firebase";
import toast from "react-hot-toast";

function CartPage() {
  // get cart data from redux
  const { cartData } = useSelector((state) => state.cartData);

  return (
    <div
      style={{
        backgroundImage: `url(${cartPageBgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="container mx-auto 2xl:max-w-6xl min-h-screen relative"
    >
      <div
        id="wrapper"
        className="w-full min-h-full flex items-start py-20 md:py-28 px-2"
      >
        <div className="w-full bg-white-100 bg-opacity-20 backdrop-blur-md rounded-md">
          <div className="px-4">
            <h2 className="text-xl neon-title py-4">My Cart</h2>
            <hr className="w-full text-black font-extrabold" />
          </div>

          {cartData.length ? (
            <div className="flex flex-col px-2 py-2 gap-y-2">
              {cartData.map((p) => (
                <ProductRowCard
                  key={p.productId}
                  productData={p.productData}
                  quantity={p.quantity}
                />
              ))}
            </div>
          ) : (
            <div className="h-64 flex items-center justify-center">
              <p className="text-lg text-white-100 font-semibold text-center">
                Cart Is Empty...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;

function ProductRowCard({ productData, quantity }) {
  const { isAuthenticated } = useSelector((state) => state.authData);
  const { cartData, loading } = useSelector((state) => state.cartData);

  console.log(cartData);

  const dispatch = useDispatch();

  // remove one product from cart
  const removeProduct = () => {
    dispatch(
      removeProductFromCart(
        productData.id,
        isAuthenticated,
        auth?.currentUser?.uid,
        cartData
      )
    );
  };

  // decrease product quantity
  const decreaseQuantity = () => {
    // in case quantity is 1 remove it from cart
    if (quantity === 1) {
      removeProduct();

      toast(`${productData.name} reomved from your cart`);
    } else {
      // update cart data before dispatch increase quantity
      // find index of product data in cart data
      const indexOfProduct = cartData.findIndex(
        (p) => p.productId === productData.id
      );
      // update product data with new quantity value
      const updatedProduct = {
        productData,
        productId: productData.id,
        quantity: quantity - 1,
      };
      // create a copy of cart data and append updated product data to it
      let updatedCart = [...cartData];

      updatedCart[indexOfProduct] = updatedProduct;

      dispatch(
        updateCartData(updatedCart, isAuthenticated, auth?.currentUser?.uid)
      );
    }
  };

  // incerease product quantity
  const increaseQuantity = () => {
    // update cart data before dispatch increase quantity
    // find index of product data in cart data
    const indexOfProduct = cartData.findIndex(
      (p) => p.productId === productData.id
    );
    // update product data with new quantity value
    const updatedProduct = {
      productData,
      productId: productData.id,
      quantity: quantity + 1,
    };
    // create a copy of cart data and append updated product data to it
    let updatedCart = [...cartData];

    updatedCart[indexOfProduct] = updatedProduct;

    dispatch(
      updateCartData(updatedCart, isAuthenticated, auth?.currentUser?.uid)
    );
  };

  return (
    <div className="flex items-center bg-Buff-100 rounded-md">
      <div className="w-28 h-32 flex items-center justify-center px-2 py-1 rounded-md border-r-[1px] border-EerieBlack-600">
        <img
          src={productData.thumbnail}
          alt={productData.name}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 justify-start">
        <p className="line-clamp-1 text-sm text-center pb-2 font-bold -mt-6">
          {productData.name}
        </p>
        <p className="flex items-center justify-evenly gap-x-1 py-1.5">
          {productData.summaryDetails.map((summary, index) => (
            <span key={index} className="text-xs line-clamp-1 text-center">
              {summary}
            </span>
          ))}
        </p>

        <div className="w-full h-10 -mb-8 px-4">
          <div className="flex items-center justify-between text-base py-2">
            <div className="flex items-center gap-x-3 px-1">
              <button
                onClick={increaseQuantity}
                className="bg-Buff-400 p-1.5 rounded-xl"
              >
                <FaPlus />
              </button>

              <div className="border-2 border-EerieBlack-200 px-1">
                {quantity}
              </div>

              <button
                onClick={decreaseQuantity}
                className="bg-EerieBlack-100 p-1 rounded-xl"
              >
                <FiMinus />
              </button>
            </div>

            <button onClick={removeProduct} className="justify-self-start">
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
