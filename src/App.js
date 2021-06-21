import {NavBar} from './components/NavBar/NavBar.js'
import {BrowserRouter} from 'react-router-dom';
import {Routes} from './components/Routes.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <Routes />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
