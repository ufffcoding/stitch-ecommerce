import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import ProductDetails from "./components/productDetails/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <ProductDetails />
      {/* <Outlet /> */}
      <Footer />
    </>
  );
}

export default App;
