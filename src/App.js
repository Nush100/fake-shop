import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

