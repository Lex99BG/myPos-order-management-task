import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingpage/landingpage';
import AboutPage from './pages/aboutpage/aboutpage';
import ProductPage from './pages/productpage/productpage';
import Navbar from "./components/navbar/navbar";
import HeaderSlider from "./components/headerslider/headerslider";
import Footer from "./components/footer/footer";
import MotorcyclePage from "./childpages/motorcycles/motorcycles";
import CarsPage from "./childpages/cars/car";
import TrucksPage from "./childpages/trucks/trucks";
import TrailersPage from "./childpages/trailers/trailers";
import { ShoppingCartProvider } from "./context/shopping-cart-context/shoppingcartcontext";
import CheckoutPage from "./pages/checkoutpage/checkout";
import OrdersList from "./pages/orders-list/orders-list";
import PageNotFound from "./pages/page-not-found/pagenotfound";

function App() {
  return (
    <div className="App">
          <ShoppingCartProvider>
            <Navbar />
            <HeaderSlider />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/motorcycles" element={<MotorcyclePage />} />
              <Route path="/cars" element={<CarsPage />} />
              <Route path="/trucks" element={<TrucksPage />} />
              <Route path="/trailers" element={<TrailersPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/orders" element={<OrdersList />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer/>
          </ShoppingCartProvider>
    </div>
  );
}

export default App;