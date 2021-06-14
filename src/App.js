import {NavBar} from './components/NavBar/NavBar.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer.js'

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
