import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import './Components/CartWidget.css';
import ItemDetailContainer from './Components/ItemDetailContainer';
import './Components/ItemCount.css';
import './App.css';
import './Components/NavBar.css';

function App() {

  return (
    <div className="App">
      
      <NavBar/>
      <ItemListContainer greetings = 'Hola! Bienvenidos a EL EMPORIO'/>
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;