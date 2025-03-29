
import { useState, useContext } from 'react';
import { cartContex } from '../context/CartContext';
import '../App.css';
export default function Card({product}){
    const [buttonState, setButtonState] = useState('Add');
     const {cart, dispatch} = useContext(cartContex);

    function changeButtonState(product){
        if(buttonState === 'Add'){
            setButtonState('Remove');
            dispatch({payload: {...product, isInCart: true}, type:"ADD_TO_CART"});
        }
        else{
            setButtonState('Add');
            dispatch({payload: {...product, isInCart: false}, type:"REMOVE_FROM_CART"});
        }
    }

    const isItemAdded = cart.some((item) => item.id === product.id);

    return ( <>
    <div className="card__container">


          <img src={product.images[0]} />
          <span >{product.title}</span>
          <span > ₹ {Math.round(product.price * 80)}</span>
          <span >Rating: {product.rating}</span>
          <span >Stock: {product.stock}</span>
          <button className='cart-button' style={{backgroundColor: isItemAdded ?  'red' : "#007bff" }} onClick={() => changeButtonState(product)}> {!isItemAdded ? 'Add to card' : 'Remove item'} </button>
    </div>
    </>)
}