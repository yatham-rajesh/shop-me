import { useContext } from "react";
import { cartContex } from "../context/CartContext";
import "../App.css"
function Cart() {
    const { cart, dispatch } = useContext(cartContex);
    return (<div >
        {cart.map(p => {
            return (
                <div className="cart_conatiner" key={p.id}>
                    <img src={p.images[0]} />
                    <span>{p.title}</span>

                    <span>${Math.round(p.price * 80)}</span>
                    <button
                        onClick={() => dispatch({payload: p,type: "REMOVE_FROM_CART"})}
                        className="delete-button"
                        aria-label="Delete"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 6h18" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <path d="M10 11v6" />
                            <path d="M14 11v6" />
                            <path d="M5 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14" />
                        </svg>
                    </button>
                </div>
            )
        })}
    </div>)
}

export default Cart;