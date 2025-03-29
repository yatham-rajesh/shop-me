
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContex } from "../context/CartContext";
import "../App.css";

export default function NavBar() {

    const {cart, dispatch} = useContext(cartContex);

    return (<div className="nav__bar"><h5>Shopping Cart</h5>
    <Link to="/cart">
        <div className="cart-img"><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="shopping-cart"
        >
            <rect width="100%" height="100%" fill="blue" />

            <path
                d="M6 6h15l-1.5 9H7.5M6 6L4 3H1M6 6l1.5 9h10.5M9 21a1 1 0 100-2 1 1 0 000 2zm9 0a1 1 0 100-2 1 1 0 000 2z"
                fill="white"
            />
        </svg>
        <span className={`cart-badge ${cart.length > 0 ? "show" : ""}`}>
          {cart.length}
        </span>
        </div>
        </Link>
    </div>);
}