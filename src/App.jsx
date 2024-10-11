import './App.css';
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Nosotros from "./components/Nosotros.jsx";
import Contacto from "./components/Contacto.jsx";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/inicio" element={<ItemListContainer />} />
            <Route path="/inicio/:categoria" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;