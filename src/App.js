import { React } from "react";
import { NavBar } from "./components/NavBar/NavBar.js";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./components/Routes.js";
import { CartProvider } from "./screens/Cart/CartContext.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes />
          </CartProvider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
