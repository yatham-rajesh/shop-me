import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ProductProvider } from "./context/Product";
import { CartProvider } from './context/CartContext.jsx'; 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
    <App />

    </CartProvider>
    </ProductProvider>
   
  </StrictMode>,
)
