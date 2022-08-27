import { useState } from "react"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import "../pages/pages.css"
import { Link } from 'react-router-dom'

const home = () => {

  // const [showModal, setShowModal] = useState(false)


return (


//   centrado

// opacity: 0.1;

  // <section className={showModal ?  "centrado2"  :  "centrado"  } >

  //  {showModal? console.log("sadesa") : console.log("sadesaaaa")}

<section className="centrado">
<h1 className="titulo"> BIENVENIDOS A NATURAL DELI</h1>



<Link to={`/productos`}> 
<button className="productboton" >  VER TODOS NUESTROS PRODUCTOS </button>
   </Link> 



<div id="carouselExampleIndicators" className="carousel slide kkk" data-bs-ride="true">
  <div className="carousel-indicators">
    <button  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="colornegro active" aria-current="true" aria-label="Slide 1"></button>
    <button className="colornegro" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button className="colornegro" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={"../assets/img/banner.jpg"} alt="Imagen producto" />
    </div>
    <div className="carousel-item">
    <img src={"../assets/img/banner2.jpg"} alt="Imagen producto" />
    </div>
    <div className="carousel-item">
    <img src={"../assets/img/banner.jpg"} alt="Imagen producto" />
    </div>
  </div>
  <a  className="carousel-control-prev pointer" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden letrasGaleria prev"> ←← Previous</span>
    </a>
   <a className="carousel-control-next pointer" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden letrasGaleria next ">Next →→</span>
    </a>
</div>
















      
   <div className="padding">
    <div className="fondo centrado colorblanco"> NUESTRA TIENDA</div>
    </div>
      </section>



)


}

export default home