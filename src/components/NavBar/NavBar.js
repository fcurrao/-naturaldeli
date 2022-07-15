import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () =>  {
    return (
        // fragment
        <> 
            
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="index.html">NATURAL DELI</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="index.html">Productos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="index.html">Descuento</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="index.html">Carrito</a>
      </li>
    </ul>
    
  </div>
  <CartWidget />
</nav>

        




          
                {/* <ComponenteHijo/> */}
                

            

        </>
    )
}

export default NavBar;