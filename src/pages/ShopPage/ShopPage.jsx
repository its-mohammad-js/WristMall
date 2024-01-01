import { useEffect, useState } from "react";
import ShopHeroSection from "../../components/HeroSections/ShopHeroSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rudex/products/productActions";
import { supportedProductFilters } from "../../constants";
import SingleWatchCard from "../../components/SingleWatchCard/SingleWatchCard";

function ShopPage() {
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
      {/* hero section */}
      <ShopHeroSection />
      {/* products filter section */}
      <FilterProductsSection />
      {/* products card section */}
      <ProductsSection />
    </>
  );
}

export default ShopPage;

function FilterProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="container mx-auto 2xl:max-w-6xl">
      <div
        id="wrapper"
        className="w-full h-full px-3 py-2 md:py-3 overflow-auto flex items-center gap-x-2 md:justify-center"
      >
        {/* all categories button */}
        <button
          onClick={() => setSelectedCategory("All")}
          className={`${
            selectedCategory === "All"
              ? "text-EerieBlack-600 ring-2 ring-Buff-300"
              : "text-Buff-300 bg-none border-2 border-Buff-300"
          }  px-3 py-1.5 text-sm md:text-base rounded-xl relative`}
        >
          <span
            className={`${
              selectedCategory === "All"
                ? "bg-Buff-300 w-full h-full"
                : "bg-none w-0 h-0 invisible"
            } absolute left-0 bottom-0 rounded-xl -z-10 duration-1000 `}
          ></span>
          All
        </button>
        {/* categories button */}
        {supportedProductFilters.categories.map((c, index) => (
          <button
            onClick={() => setSelectedCategory(c)}
            key={index}
            className={`${
              selectedCategory === c
                ? "text-EerieBlack-600 ring-2 ring-Buff-300"
                : "text-Buff-300 bg-none border-2 border-Buff-300"
            } text-Buff-300 px-3 py-1.5 text-sm md:text-base rounded-xl whitespace-nowrap relative`}
          >
            <span
              className={`${
                selectedCategory === c
                  ? "bg-Buff-300 w-full h-full"
                  : "bg-none w-0 h-0 invisible"
              } absolute left-0 bottom-0 rounded-xl -z-10 duration-1000`}
            ></span>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductsSection() {
  const { loading, productsData, error } = useSelector(
    (state) => state.products
  );

  if (loading) return <p className="text-white-100">Loading ...</p>;

  if (!loading)
    return (
      <div className="container mx-auto 2xl:max-w-6xl flex flex-row flex-wrap gap-x-1 justify-center sm:justify-evenly items-center gap-y-4 py-4">
        {productsData.map((product) => (
          <SingleWatchCard key={product.id} {...product} />
        ))}
      </div>
    );
}
