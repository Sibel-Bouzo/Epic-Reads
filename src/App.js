import "./App.css";
import { Nav } from "./components/layout/components/Nav";
import { Home } from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";
import { Footer } from "./components/layout/components/Footer";
import { FAQs } from "./pages/FAQs/FAQs";
import { History } from "./pages/History/History";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Nav />
      <Routes>
        <Route index path="/Epic-Reads" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/history" element={<History />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
