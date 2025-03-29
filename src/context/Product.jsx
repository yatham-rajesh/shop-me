import { createContext, useReducer, useContext } from "react";


export const ProductContex = createContext();

const initialState = {
    orgProducts: [],
    products: [],
};

function productReducer(state, action) {

    switch (action.type) {
        case "ascending":
            return {
                ...state,
                products: [...state.orgProducts].slice().sort((a, b) => a.price - b.price),
            };
        case "descending":
            return {
                ...state,
                products: [...state.orgProducts].slice().sort((a, b) => b.price - a.price),
            };

        case "add_products":
            return {
                ...state,
                products: [...action.payload],  
                orgProducts: [...action.payload],
            };
        case "reset":
            return {
                ...state,
                products: [...state.orgProducts],  
            };

        default:
            return state;

    }

};


export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);


    const ascending = () => {

        dispatch(state, { type: "ascending" })
    }
    return (
        <ProductContex.Provider value={{ products: state.products, orgProducts: state.orgProducts, dispatch, ascending }}>
            {children}
        </ProductContex.Provider>
    )
}


