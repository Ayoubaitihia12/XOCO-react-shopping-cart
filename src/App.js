import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ShoppingCartProvider from './context/shoppingCart';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar/>
      <Hero/>
      <Products/>
      <Footer/>
    </ShoppingCartProvider>
  );
}

export default App;
