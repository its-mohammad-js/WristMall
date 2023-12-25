import { useEffect } from "react";
import HomePageHero from "../../components/HeroSections/HomePageHero";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rudex/products/productActions";

function HomePage() {
  //  products state
  const { loading, productsData, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  //   get all products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(productsData[1]);
  return (
    <>
      <HomePageHero />

      {productsData.length && (
        <div className="container 2xl:max-w-6xl mx-auto flex flex-col mt-1 px-4 py-2 gap-y-2">
          <h2 className="text-4xl font-bold text-EerieBlack-100">WATCH</h2>
          <div className="md:flex">
            <div className="">
              <img
                src={productsData[1].images[0]}
                alt={productsData[1].name}
                className="rounded-tr-3xl rounded-bl-2xl w-full h-60 object-cover custome-shadow"
              />
            </div>
            <p className="text-white-100 mt-4 text-base">
              {productsData[1].description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
