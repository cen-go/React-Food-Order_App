import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", // "cart", "checkout"
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [progressState, setProgressState] = useState("");

  function handleShowCart() {
    setProgressState("cart");
  }
  function handleHideCart() {
    setProgressState("");
  }
  function handleShowCheckout() {
    setProgressState("checkout");
  }
  function handleHideCheckout() {
    setProgressState("");
  }

  const contextValue = {
    progress: progressState,
    showCart: handleShowCart,
    hideCart: handleHideCart,
    showCheckout: handleShowCheckout,
    hideCheckout: handleHideCheckout,
  };

  return (
    <UserProgressContext.Provider value={contextValue}>
      {children}
    </UserProgressContext.Provider>
  )
}

export default UserProgressContext;