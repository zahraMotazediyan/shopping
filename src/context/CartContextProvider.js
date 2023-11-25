import React, {createContext, useReducer} from "react";

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkOut: false
}

const sumItems = (item) => {
    const itemsCounter = item.reduce((total, product) => total + product.quantity, 0);
    const total = item.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return {itemsCounter, total}
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD-ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                checkOut: false,
                ...sumItems(state.selectedItems)
            }

        case "REMOVE-ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)

            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(newSelectedItems)
            }

        case "INCREASE":
            const indexA = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexA].quantity++;

            return {
                ...state,
                ...sumItems(state.selectedItems)
            }

        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity--;

            return {
                ...state,
                ...sumItems(state.selectedItems)
            }

        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkOut: true
            }

        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkOut: false
            }
        default:
            return state;
    }
}

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <div>
            <CartContext.Provider value={{state, dispatch}}>
                {children}
            </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider