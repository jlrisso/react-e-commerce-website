
import '../css/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {BrowserRouter} from 'react-router-dom';
import CartProvider from '../context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
          <Header />
          <Main />
          <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
