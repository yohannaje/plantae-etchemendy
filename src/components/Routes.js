import { React } from "react";
import { Switch, Route } from "react-router-dom";
import { ItemListContainer } from "../screens/ItemListContainer/ItemListContainer.js";
import { ItemDetailContainer } from "../screens/ItemDetailContainer/ItemDetailContainer.js";
import { Cart } from "../screens/Cart/Cart.js";
import { EmptyPageComponent } from "../components/EmptyPageComponent/EmptyPageComponent.js";
import { ThankYou } from "../screens/ThankYou.js";
import { Footer } from "../components/Footer/Footer.js";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ItemListContainer />
      </Route>
      <Route path="/categories/:id">
        <ItemListContainer />
      </Route>
      <Route path="/item/:id">
        <ItemDetailContainer />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/thankyou/:orderId">
        <ThankYou />
      </Route>
      <Route>
        <EmptyPageComponent
          className="emptyCart"
          imgUrl="https://i.ibb.co/zbgW6w8/Artboard-1-2x.png"
          altText="404"
          h1="Ooops, esta página no existe"
          link="/"
          btnText="Volver al Home"
        />
        <Footer/>
      </Route>
    </Switch>
  );
};
