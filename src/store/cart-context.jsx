import { createContext, useReducer } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  updateAmount: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    const updatedCartItems = [...state.items];
    const existingItemIndex = updatedCartItems.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingItem = updatedCartItems[existingItemIndex];

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedCartItems[existingItemIndex] = updatedItem;
    } else {
      updatedCartItems.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1,
      });
    }
    return {
      ...state,
      items: updatedCartItems,
    };
  }

  if (action.type === "UPDATE_AMOUNT") {
    const updatedCartItems = [...state.items];
    const itemToUpdateIndex = updatedCartItems.findIndex(
      (item) => item.id === action.payload.id
    );
    const itemToUpdate = updatedCartItems[itemToUpdateIndex];
    const updatedItem = {
      ...itemToUpdate,
      quantity: itemToUpdate.quantity + action.payload.amount,
    };
    updatedCartItems[itemToUpdateIndex] = updatedItem;

    if (updatedItem.quantity <= 0) {
      updatedCartItems.splice(itemToUpdateIndex, 1);
    }
    return {
      ...state,
      items: updatedCartItems,
    };
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

  function handleUpdateAmount(id, amount) {
    ShoppingCartDispatch({type: "UPDATE_AMOUNT", payload: {id, amount,}})
  }

  const contextValue = {
    cartItems: shoppingCartState.items,
    addToCart: handleAddToCart,
    updateAmount: handleUpdateAmount,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;