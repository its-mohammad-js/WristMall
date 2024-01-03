import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { routesInfo } from "../../constants";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // get auth data to display signIn methods button or Profile button on navbar
  const { isAuthenticated } = useSelector((state) => state.authData);
  // get cart data to dispaly length on cart icon in navbar
  const { cartData } = useSelector((state) => state.cartData);

  return (
    <div className="flex w-screen fixed z-50 2xl:pr-6">
      <div
        id="wrapper"
        className="mx-auto w-full bg-Buff-100 bg-opacity-30 backdrop-blur-sm z-50 2xl:max-w-6xl flex items-center justify-between px-4 py-2 relative"
      >
        {/* logo */}
        <div className="flex-1">
          <img
            src="./logo/logo-no-background.svg"
            alt=""
            className="w-14 h-14 lg:w-16 lg:h-16"
          />
        </div>

        {/* mobile menu btn */}
        <div className="flex items-center gap-x-4 text-Buff-300 md:hidden">
          {/* link to cart page */}
          <div className="">
            <Link to="/WristMall/Cart" className="relative">
              <FaCartShopping className="text-2xl" />

              <p className="text-sm bg-Buff-100 text-EerieBlack-600 font-extrabold px-1.5 rounded-full bottom-3 left-3 absolute">
                {cartData.length || 0}
              </p>
            </Link>
          </div>
          {/* menu icon */}
          <div onClick={() => setMenuIsOpen(!menuIsOpen)} className="">
            <GiHamburgerMenu className="text-3xl" />
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`${
            menuIsOpen
              ? "visible h-full w-full opacity-100"
              : "invisible h-0 w-0 opacity-0"
          } absolute -bottom-[135px] right-0 flex items-center justify-center duration-300`}
        >
          <div
            id="wrapper"
            className={`w-11/12 bg-white-100 rounded-md flex flex-col items-center justify-center gap-y-2 px-2 py-1`}
          >
            {routesInfo.map(
              (route, index) =>
                route.title !== "Cart" && (
                  <Link
                    key={index}
                    to={route.path}
                    className="text-lg text-EerieBlack-600 border-b-2 border-Buff-200"
                  >
                    {route.title}
                  </Link>
                )
            )}

            <Link
              to={isAuthenticated ? "/WristMall/Profile" : "/WristMall/SignIn"}
              className="w-full bg-Buff-400 text-white-100 px-4 py-2 rounded-md text-center"
            >
              {isAuthenticated ? "Profile" : "SignIn"}
            </Link>
          </div>
        </div>

        {/*  desktop menu */}
        <div className="items-center justify-center gap-x-4 px-4 hidden md:flex">
          {routesInfo.map((route, index) => (
            <Link
              key={index}
              to={route.path}
              className="text-white-100 text-lg hover:text-EerieBlack-600 transition-all"
            >
              {route.title}
            </Link>
          ))}

          <Link
            to="/WristMall/SignIn"
            className="bg-Buff-300 text-white-100 px-2 py-1 rounded-md text-lg hover:text-EerieBlack-600 transition-all"
          >
            SignIn
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
