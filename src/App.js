import {NavBar} from './components/NavBar/NavBar.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount.js';


function App() {
  return (
    <div className="App">  
      <header className="App-header">
  
        <NavBar />
        <ItemListContainer />
        <ItemCount />
       
      </header>
    </div>
  );
}

export default App;
