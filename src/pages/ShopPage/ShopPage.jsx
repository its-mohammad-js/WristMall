import { useEffect, useState } from "react";
import ShopHeroSection from "../../components/HeroSections/ShopHeroSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rudex/products/productActions";
import { supportedProductFilters } from "../../constants";

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
        className="w-full h-full px-3 py-2 overflow-auto flex items-center gap-x-2 md:justify-center"
      >
        <button
          onClick={() => setSelectedCategory("All")}
          className={`${
            selectedCategory === "All"
              ? "text-EerieBlack-600 ring-2 ring-Buff-300"
              : "text-Buff-300 bg-none border-2 border-Buff-300"
          }  px-3 py-1.5 text-sm rounded-xl relative`}
        >
          <span
            className={`${
              selectedCategory === "All"
                ? "bg-Buff-300 w-full h-full"
                : "bg-none w-0 h-0 invisible"
            } absolute left-0 bottom-0 rounded-xl -z-10 transition-all duration-400`}
          ></span>
          All
        </button>

        {supportedProductFilters.categories.map((c, index) => (
          <button
            onClick={() => setSelectedCategory(c)}
            key={index}
            className={`${
              selectedCategory === c
                ? "text-EerieBlack-600 ring-2 ring-Buff-300"
                : "text-Buff-300 bg-none border-2 border-Buff-300"
            } text-Buff-300 px-3 py-1.5 text-sm rounded-xl whitespace-nowrap relative`}
          >
            <span
              className={`${
                selectedCategory === c
                  ? "bg-Buff-300 w-full h-full"
                  : "bg-none w-0 h-0 invisible"
              } absolute left-0 bottom-0 rounded-xl -z-10 transition-all duration-400`}
            ></span>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductsSection() {
  return (
    <div className="container mx-auto 2xl:max-w-6xl bg-blue-600">
      products section
    </div>
  );
}
