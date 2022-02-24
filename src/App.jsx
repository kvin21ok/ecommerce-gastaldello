
import './App.css';
import './Components/NavBar.css';
import Navigation from './Components/NavBar';
import './Components/CartWidget.css';
import ItemList from './Components/ItemListContainer';

function App() {

  return (
    <div className="App">
      
      <Navigation/>
      <ItemList/>
      
    </div>
  );
}

export default App;