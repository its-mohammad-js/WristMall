import { Link } from "react-router-dom";

const routes = [
  { title: "Home", path: "" },
  { title: "Shop", path: "" },
  { title: "Blogs", path: "" },
  { title: "َAbout Me", path: "" },
];

function Footer() {
  return (
    <div className="container mx-auto 2xl:max-w-6xl">
      <div id="wrapper" className="w-full h-full bg-EerieBlack-400 px-4 py-2">
        {/* logo */}
        <div className="w-full flex justify-center items-center">
          <img
            src="./logo/logo-no-background.svg"
            alt="site-logo"
            className="w-24 h-24"
          />
        </div>

        {/* route links */}
        <div className="w-full flex flex-wrap items-center justify-center text-Buff-100 text-lg gap-x-4">
          {routes.map((route, index) => (
            <Link key={index}>{route.title}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
