

import { useParams } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Modal from './components/Modal/Modal';
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Detail from './pages/Detail';
import Products from './pages/Products';
import Descuento from './pages/Descuento';
import Checkout from './pages/Checkout';
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider >
      <BrowserRouter>
        <div className="colorFondo">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/-naturaldeli/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/descuento/:filtradito" element={<Descuento />} />
            <Route path="/productos/" element={<Products />} />
            <Route path="/productos/:id" element={<Detail />} />
            <Route path="/categorias/:categoryid" element={<ItemListContainer />} />
            <Route path="/cart" element={<Checkout />} />
            <Route path="*" element={<h1>ERROR 404 - PAGINA NO ENCONTRADA</h1>} />
          </Routes>
          {/* <footer> FOOTER</footer> */}
        </div>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;


