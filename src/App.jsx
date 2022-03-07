
import './App.css';
import './Components/NavBar.css';
import NavBar from './Components/NavBar';
import './Components/CartWidget.css';
import ItemListContainer from './Components/ItemListContainer';
import './Components/ItemCount.css';

function App() {

  return (
    <div className="App">
      
      <NavBar/>
      <ItemListContainer greetings = 'Hola! Bienvenidos a EL EMPORIO'/>
      
    </div>
  );
}

export default App;