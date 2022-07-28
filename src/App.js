
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Modal from './components/Modal/Modal';
import './App.css'

function App() {
  return (
    <>
   

 
      <NavBar />
     

        <ItemDetailContainer className="cotenedores" secciones="Productos en oferta"/>




        {/* <ItemListContainer className="cotenedores" secciones="Productos de temporada"/>
        <ItemListContainer className="cotenedores" secciones="Productos mas comprados"/> */}
   

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

