import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/cart-context";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header />
        <main>
          <Meals />
        </main>
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
