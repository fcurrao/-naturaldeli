
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Modal from './components/Modal/Modal';
import './App.css'

function App() {
  return (
    <>
   

 
      <NavBar />
     

        <ItemListContainer className="cotenedores" greeting="Productos en oferta"/>
        <ItemListContainer className="cotenedores" greeting="Productos de temporada"/>
        <ItemListContainer className="cotenedores" greeting="Productos mas comprados"/>
   

      {/* <Modal title="MODAL DE REGISTRO">
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>enviar</button>
        </form>
      </Modal> */}

 




    </>
  );
}

export default App;

