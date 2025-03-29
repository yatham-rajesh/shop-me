import { useEffect, useContext } from 'react'
import { ProductContex } from './context/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Cart from './pages/Cart';




function App() {
  const { dispatch } = useContext(ProductContex);
  const fetchData = async () => {
    try {
      const fetchedData = await fetch("https://dummyjson.com/products");
      const productData = await fetchedData.json();
      dispatch({
        type: "add_products", payload: productData.products.map(p => {
          return { ...p, isInCart: false }
        })
      });
    }
    catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/cart" element={<Cart />} ></Route>
      </Routes>
    </Router>



  )
}

export default App
