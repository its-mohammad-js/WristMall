import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import { Provider } from "react-redux";
import store from "./rudex/store";
import { Toaster } from "react-hot-toast";

function App() {
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
