
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemContainer from './components/ItemContainer/ItemContainer';
import Modal from './components/Modal/Modal';

function App() {
  var nombre = 'FEDE';
  // var nombre = null;
  return (
    <>
      <NavBar /> 

  <header className="App-header">
  <p>
         HOLA MUNDO!, yo soy  {nombre? nombre : "NO  TENGO NOMBRE"}
        </p>
  </header>

<div className="App" name="container" style={{padding:10, marginTop: 10}}>

<ItemContainer section="Productos en oferta" />
   <ItemContainer section="Productos de temporada" />
   <ItemContainer section="Productos mas comprados" />

    <Modal title="TITULO DEL POPUP">
      <form>
        <input type="text"/>
      </form>

    </Modal>
       
    </div>

  
        

    </>
  );
}

export default App;

