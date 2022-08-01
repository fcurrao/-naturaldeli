import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'


const NavBar = () =>  {
    return (
        // fragment
        <> 
            
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/"  className="navbar-brand" href="index.html">NATURAL DELI</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/"  className="nav-link" >Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
      <Link to="/"   className="nav-link" Link href="index.html">Productos</Link>
      </li>
      <li className="nav-item">
      <Link to="/About"   className="nav-link" href="index.html">About US</Link>
      </li>    
      <li className="nav-item">
      <Link to="/Contact"   className="nav-link" href="index.html">Contacto</Link>
      </li>   
      <li className="nav-item">
      <Link to="/"   className="nav-link" href="index.html">Descuento</Link>
      </li>   
      <li className="nav-item dropdown">
       
      <a   className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorias 
        </a> 
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to="/categorias/Almacen"   className="dropdown-item" href="#">Almacen</Link>
        <Link to="/categorias/Congelados"   className="dropdown-item" href="#">Congelados</Link>
          <Link to="/categorias/Frescos"  className="dropdown-item" href="#">Frescos</Link>
          <Link to="/categorias/Dulces"  className="dropdown-item" href="#">Dulces</Link>
          <div className="dropdown-divider"></div>
          <Link to="/"  className="dropdown-item" href="#">Nuevos Productos</Link>
        </div>
      </li>
      
      <li className="nav-item">
      <Link to="/"   className="nav-link disabled" href="index.html">Carrito</Link>
      </li>

      <li className="nav-item">
      <a className="nav-link disabled" href="http://www.google.com.ar" target="_blank" > <li>GOOGLE</li> </a>
      </li>
    </ul>
    
  </div>
  <div> 
    
  <Link to="/"  className="nav-link disabled btn3" href="index.html">Log In </Link>
     






  </div>
  <CartWidget />
</nav>


          
                {/* <ComponenteHijo/> */}
                

            

        </>
    )
}

export default NavBar;