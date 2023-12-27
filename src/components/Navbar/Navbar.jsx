import { IoHomeSharp } from "react-icons/io5";
import { AiFillShop } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex w-screen fixed z-50 2xl:pr-6">
      <div
        id="wrapper"
        className="mx-auto w-full bg-Buff-100 bg-opacity-30 backdrop-blur-sm z-50 2xl:max-w-6xl flex items-center justify-between px-4 py-2"
      >
        <div className="flex-1">
          <img
            src="./logo/logo-no-background.svg"
            alt=""
            className="w-14 h-14 lg:w-16 lg:h-16"
          />
        </div>

        <div className="flex items-center gap-x-6 text-white-100 px-4 lg:text-lg">
          <Link to="/WristMall/" className="hover:text-white-90">
            Home
          </Link>
          <Link className="hover:text-white-90">Shop</Link>
          <Link className="hover:text-white-90">Cart</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
