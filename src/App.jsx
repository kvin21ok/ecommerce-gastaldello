
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
      <ItemListContainer greetings = 'Hola! dentro de poco deberia convertirme en algo'/>
      
    </div>
  );
}

export default App;