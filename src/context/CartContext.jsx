import { createContext, useReducer, useEffect } from "react";


export const cartContex = createContext();

const intialState = {
    cart: []
}

function cartReducer(state, action) {

    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter((p) => p.id !== action.payload.id) }
        default:
            return state;
    }

}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, [], () => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : intialState;
      });
    
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state));
      }, [state]);
    

    return (<cartContex.Provider value={{ cart: state.cart, dispatch }}>
        {children}
    </cartContex.Provider>)
}