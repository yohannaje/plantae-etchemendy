import {React} from 'react';
import {Switch, Route} from 'react-router-dom';
import {ItemListContainer} from '../components/Items/ItemListContainer/ItemListContainer.js';
import {ItemDetailContainer} from '../components/Items/ItemDetailContainer/ItemDetailContainer.js';
import {Cart} from '../screens/Cart.js'
export const Routes = () => {

return <Switch>
       
        <Route exact path="/">
            <ItemListContainer />
        </Route>
        <Route path="/category/:id">
            <ItemListContainer />
        </Route>
        <Route path="/item/:id">
            <ItemDetailContainer />
        </Route>
        <Route path="/cart">
            <Cart />
        </Route>
      
</Switch>

}