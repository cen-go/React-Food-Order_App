import { createContext, useReducer } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    const updatedCartItems = [...state.items, {
      id: action.payload.id,
      name: action.payload.name,
      price: action.payload.price,
      quantity: 1,
    }];
    return {
      items: updatedCartItems,
    }

  }
}

function CartContextProvider({ children }) {
  const [shoppingCartState, ShoppingCartDispatch] = useReducer(shoppingCartReducer, 
    {
      items: []
    }
  )

  function handleAddToCart(meal) {
    ShoppingCartDispatch({ type: "ADD_TO_CART", payload: meal});
  }

  const contextValue = {
    cartItems: shoppingCartState.items,
    addToCart: handleAddToCart,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;