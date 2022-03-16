import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from './Components/Cart';
import { CartContext } from './Context/CartContext';
import './Components/CartWidget.css';
import './Components/ItemCount.css';
import './App.css';
import './Components/NavBar.css';

function App() {

  return (

    <CartContext.Provider value ={{
      
    }}>

    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path= '/' element= {<ItemListContainer greetings = 'Hola! Bienvenidos a EL EMPORIO'/>}/>
          <Route path= '/category/:categoryName' element= {<ItemListContainer greetings = 'Hola! Bienvenidos a EL EMPORIO'/>}/>
          <Route path= '/detail/:detailId' element= { <ItemDetailContainer/> }/>
          <Route path= '/cart' element = { <Cart/> } />

          <Route path= '/*' element= { <Navigate to= '/' replace /> }/>       
        </Routes>
      </div>
    </BrowserRouter>

    </CartContext.Provider>

  );
}

export default App;