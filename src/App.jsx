import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import { Provider } from "react-redux";
import store from "./rudex/store";
import { Toaster } from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ShopPage from "./pages/ShopPage/ShopPage";
import CartPage from "./pages/CartPage/CartPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import AboutMePage from "./pages/AboutMePage/AboutMePage";

function App() {
  // aos library init
  useEffect(() => {
    Aos.init({ mirror: true });
  }, []);

  return (
    <Provider store={store}>
      <AppLayout>
        <Toaster />
        <Routes>
          <Route path="/WristMall/" element={<HomePage />} />
          <Route path="/WristMall/Shop" element={<ShopPage />} />
          <Route path="/WristMall/SignUp" element={<SignUpPage />} />
          <Route path="/WristMall/SignIn" element={<SignInPage />} />
          <Route
            path="/WristMall/SingleWatch/:id"
            element={<SingleProductPage />}
          />
          <Route path="/WristMall/Cart" element={<CartPage />} />
          <Route path="/WristMall/AboutMe" element={<AboutMePage />} />
        </Routes>
      </AppLayout>
    </Provider>
  );
}

export default App;
