import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import { Provider } from "react-redux";
import store from "./rudex/store";
import { Toaster } from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ mirror: true });
  }, []);

  return (
    <Provider store={store}>
      <AppLayout>
        <Toaster />
        <Routes>
          <Route path="/WristMall/" element={<HomePage />} />
        </Routes>
      </AppLayout>
    </Provider>
  );
}

export default App;
