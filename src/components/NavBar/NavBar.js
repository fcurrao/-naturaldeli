import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import Modal from '../Modal/Modal';


const NavBar = () => {


  const [busqueda, setbusqueda] = useState()
  const [showModal, setShowModal] = useState(false)
  // const [userOK, setUserOK] = useState()
//   const [formDataUser, setFormdataUser] = useState({
//     password : '',
//     email : ''
// }) 
 






  // const ingresaNewUser = async (newUser) => {
  //     const collectionOrder = collection(db, 'users')
  //      const userDoc = await addDoc(collectionOrder, newUser)
  //      setUserOK(userDoc.email)
  //     // await console.log("aveeeeeeeeeeeeeeer" , formDataUser, formDataUser.email, formDataUser.password)

  // }

 const  handleChange = (e) => {
  console.log("e.target.name", e.target.name, e.target.value)
  // setFormdataUser({...formDataUser,[ e.target.name] : e.target.value})
  }

  // const ingresaNewUser = () => {
  //   console.log("xxx",formDataUser)
  //   // console.log("aveeeeeeeeeeeeeeer" , formDataUser, formDataUser.email, formDataUser.password)

  // }
  



  // ingresaNewUser({formDataUser})


//  const submitDataUser = () =>{
//   if(formData.email exite en firebase) => buscarla y comparar la contraseña (correcta o incorrecta) (logiado correctamente)
  
//   si no existee => crear un usuario (registrado correcctamente)


//   luego de logearse, cambiar el botoon LOG IN POR el email.
//  }


  const ingresarQ = () =>{
    setShowModal(true)
  }

  const buscandoInput = (e) =>{
    setbusqueda(e.target.value)
    console.log( "1 o  2  :", e.target.value)
  }

const enviarbusqueda = () => {
  console.log( busqueda)

}


  return (
    // fragment
    <>
    <div className='zoomsito'>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      < sector id="cerosector">
      < div id="cerosectordiv">
        <Link to="/" className="navbar-brand lgrande" href="index.html">
          <img className="logogrande" src={`../assets/img/LOGOgrande.png`} alt="Imagen producto" />

        </Link>
        </div>
        < div id="cerosectordivdos">
        </div>
        </sector>

        <sector id="unosector">
        < div id="unosectordiv">
          <div className='sinborde'>
            <input className='sinborde inputsito' type='text' placeholder="Buscar productos, marcas y más…" onChange={buscandoInput}  ></input>
            
            <button onClick={enviarbusqueda}   >SEARCH</button>
            
          </div>
          </div>
          < div id="unosectordivdos">
     
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link letritas" >Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/productos" className="nav-link letritas" Link href="index.html">Productos</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link letritas" href="index.html">About US</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link letritas" href="index.html">Contacto</Link>
              </li>
              <li className="nav-item">
                <Link to="/descuento" className="nav-link letritas" href="index.html">Descuento</Link>
              </li>
              <li className="nav-item">
                <Link to="/Ordenes" className="nav-link letritas" href="index.html">Busca Tu orden </Link>
              </li>
              <li className="nav-item dropdown">

                <a className="nav-link dropdown-toggle letritas" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Categorias
                </a>
                <div className="dropdown-menu dropdown-menu2 .dropdown-menu.show2" aria-labelledby="navbarDropdown">
                  <Link to="/categorias/Almacen" className="dropdown-item letritas" href="#">Almacen</Link>
                  <Link to="/categorias/Congelados" className="dropdown-item letritas" href="#">Congelados</Link>
                  <Link to="/categorias/Frescos" className="dropdown-item letritas" href="#">Frescos</Link>
                  <Link to="/categorias/Dulces" className="dropdown-item letritas" href="#">Dulces</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/descuento" className="dropdown-item letritas" href="#">Nuevos Productos</Link>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled " href="http://www.google.com.ar" target="_blank" > <li>GOOGLE</li> </a>
              </li>
            </ul>

          </div>
          </div>

        </sector>
        < sector id="dossector">

        
          <div id="dossectordivdos">
          <CartWidget />
          </div>
          <div  id="dossectordiv">

<botton className="nav-link disabled btn3 lgrande" href="index.html" onClick={ingresarQ}>Log In  </botton>


{showModal &&  <Modal title="Datos de contacto" setModalState={() => setShowModal(false)}>
<h3>Formulario de compra</h3>
                        <form 
                        // onSubmit={ingresaNewUser}
                        >
                             email<input className='inputt' type='email' 
                            name='email' 
                            placeholder='email'
                            //  value={formDataUser.email}
                            onChange={handleChange}
                            />
                            <br />


 
                             Apellido <input className='inputt' type='password' 
                            name='password' 
                            placeholder='password'
                              // value={formDataUser.password}
                            onChange={handleChange}
                            />
                            <br />
                            <button type="submit" > Enviar</button>

                            </form>
                            <button  > REGISTRATE POR PRIMERA VEZ</button>
  
  </Modal>}

<Link to="/cart" className="nav-link disabled btn3 ccc lgrande" href="index.html">Ir a Mi carrito </Link>

</div>
        </sector>

      </nav>



      {/* <ComponenteHijo/> */}




    </div>
    </>
  )
}

export default NavBar;