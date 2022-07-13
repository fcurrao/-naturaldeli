
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  var nombre = 'FEDE';
  // var nombre = null;
  return (
    <div className="App" style={{padding:10, marginTop: 10}}>
      <header className="App-header">

        <NavBar />
        <p>
         HOLA MUNDO, yo soy {nombre? nombre : "NO  TENGO NOMBRE"}
        </p>
        <NavBar />

      
        <a
          className="App-link"
          href="https://www.google.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          NATURAL DELI (google)
        </a>
      </header>
    </div>
  );
}

export default App;
