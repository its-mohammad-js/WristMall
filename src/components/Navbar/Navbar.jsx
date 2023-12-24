import { IoHomeSharp } from "react-icons/io5";
import { AiFillShop } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* desktop navbar */}
      <div className="hidden sm:flex w-screen fixed z-50">
        <div
          id="wrapper"
          className="container bg-EerieBlack-500 bg-opacity-50 backdrop-blur-sm mx-auto 2xl:max-w-6xl flex items-center justify-between px-4 py-2"
        >
          <div className="flex-1">
            <img
              src="./logo/logo-no-background.svg"
              alt=""
              className="w-14 h-14 lg:w-16 lg:h-16"
            />
          </div>

          <div className="flex items-center gap-x-6 text-white-100 px-2 lg:text-lg">
            <Link to="/WristMall/" className="hover:text-white-90">
              Home
            </Link>
            <Link className="hover:text-white-90">Shop</Link>
            <Link className="hover:text-white-90">Cart</Link>
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      <div className="sm:hidden fixed bottom-0 container 2xl:max-w-6xl py-2 z-50">
        <div
          id="wrapper"
          className="flex items-center justify-between bg-EerieBlack-600 w-4/5 mx-auto rounded-full ring-2 ring-Buff-300"
        >
          <div className="bg-Buff-300 ring-2 ring-white-95 px-4 py-2 rounded-full">
            <IoHomeSharp className="text-3xl text-EerieBlack-500" />
          </div>
          <div className="px-4 py-2 rounded-full">
            <AiFillShop className="text-3xl text-white-90" />
          </div>
          <div className="px-4 py-2 rounded-full">
            <FaShoppingCart className="text-3xl text-white-90" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
