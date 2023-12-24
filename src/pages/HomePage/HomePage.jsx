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

  return (
    <>
      <HomePageHero />
    </>
  );
}

export default HomePage;
