import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/cart-context";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <main>
          <Meals />
        </main>
        <h1>You got this 💪</h1>
        <p>Stuck? Not sure how to proceed?</p>
        <p>Don't worry - we've all been there. Let's build it together!</p>
      </CartContextProvider>
    </>
  );
}

export default App;
