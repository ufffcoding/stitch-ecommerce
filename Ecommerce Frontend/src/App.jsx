import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Product from "./components/product/Product";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <>
      <Header />
      <Checkout />
      {/* <Outlet /> */}
      <Footer />
    </>
  );
}

export default App;
