import {NavBar} from './components/NavBar/NavBar.js'
import { ItemListContainer } from './components/Items/ItemListContainer/ItemListContainer.js';
import {ItemDetailContainer} from './components/Items/ItemDetailContainer/ItemDetailContainer.js';

function App() {
  return (
    <div className="App">  
      <header className="App-header">
  
        <NavBar />
        <ItemListContainer greeting=""/>
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
