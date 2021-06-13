import {NavBar} from './components/NavBar/NavBar.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemListContainer/ItemCount/ItemCount.js';
import {ItemDetailContainer} from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer.js'

function App() {
  return (
    <div className="App">  
      <header className="App-header">
  
        <NavBar />
        <ItemListContainer greeting=""/>
        <ItemCount stock={5} initial={1}/>
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
