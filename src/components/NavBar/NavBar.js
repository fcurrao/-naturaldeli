import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import Modal from '../Modal/Modal';
import swal from 'sweetalert';

const NavBar = () => {


  const [busqueda, setbusqueda] = useState()
  const [showLogin, setShowLogin] = useState(false) 
   const [showModal, setShowModal] = useState(false)
   
   const [showSalir,  setShowSalir] = useState(false)

  const [showRegistrarse, setShowRegistrarse] = useState(false)
  const [userOK, setUserOK] =useState({
    password : '',
    password2 : '',
    email : '' ,
    email2 : ''
}) 
  const [formDataUser, setFormdataUser] = useState({
    password : '',
    password2 : '',
    email : '' ,
    email2 : ''
}) 
 

 
const registrarse = () => {
  setShowRegistrarse(true)
}


  // const ingresaNewUser = async (newUser) => {
  //     const collectionOrder = collection(db, 'users')
  //      const userDoc = await addDoc(collectionOrder, newUser)
  //      setUserOK(userDoc.email)
  //     // await console.log("aveeeeeeeeeeeeeeer" , formDataUser, formDataUser.email, formDataUser.password)

  // }

 const  handleChange = (e) => {
  console.log("e.target.name", e.target.name, e.target.value)
  setFormdataUser({...formDataUser,[ e.target.name] : e.target.value})
  setUserOK({...userOK,[ e.target.name] : e.target.value})
  }

  // const ingresaNewUser = () => {
  //   console.log("xxx",formDataUser)
  //   // console.log("aveeeeeeeeeeeeeeer" , formDataUser, formDataUser.email, formDataUser.password)

  // }

  const consoleslogeos = () => {
    console.log(" LAST userOK : ",userOK)
    console.log("LAST  formDataUser : ", formDataUser)
  }

  const ingresaNewUser = (e) =>{ 
    console.log("formData.email 1y2 : ",formDataUser.email , formDataUser.email2, formDataUser.password)
    console.log("userOK : ",userOK)
    setFormdataUser([])  
    console.log("formDataUser : ", formDataUser)
    setShowLogin(true)


    setShowModal(false)
    setShowRegistrarse(false)
    

    e.preventDefault() 
  }





  const ingresaRegistro = (e) =>{
 
    if(formDataUser.password ==undefined && formDataUser.password2 ==undefined && formDataUser.adress ==undefined  && formDataUser.phone==undefined   && formDataUser.email==undefined  && formDataUser.name==undefined  ){
      swal("Debes completar todos los datos"); 
      e.preventDefault() 
    
    } else { 
    if(formDataUser.password == formDataUser.password2){
      setFormdataUser({...formDataUser,[ e.target.name] : e.target.value})
      setUserOK({...userOK,[ e.target.name] : e.target.value})
      e.preventDefault()
      ingresaNewUser() 
      setShowLogin(true)
    } else {
      e.preventDefault() 
    
      swal("Las contraseñas no coinciden"); 

    }
  }
  }
  // ingresaNewUser({formDataUser})


//  const submitDataUser = () =>{
//   if(formData.email exite en firebase) => buscarla y comparar la contraseña (correcta o incorrecta) (logiado correctamente)
  
//   si no existee => crear un usuario (registrado correcctamente)


//   luego de logearse, cambiar el botoon LOG IN POR el email.
//  }


  const ingresarQ = () =>{
    setShowModal(true)
  }


  const  salirQ = () =>{
    setShowSalir(true)
  }
 

  const  salirQ2 = () =>{
    setShowSalir(false)
  }

  const cerrarSesion = () => {
    setFormdataUser([]) 
    setUserOK([])
    setShowSalir(false)
    setShowLogin(false)
    // e.preventDefault()
  }




  const buscandoInput = (e) =>{
    setbusqueda(e.target.value)
    console.log( "1 o  2  :", e.target.value)
  }

const enviarbusqueda = (e) => {
  console.log( busqueda)
  e.preventDefault()

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
          <form className='sinborde'>
            <input className='sinborde inputsito' type='search' placeholder="Buscar productos, marcas y más…" onChange={buscandoInput}  ></input>
            <input type="submit" value="Buscar" onClick={enviarbusqueda}></input> 
            {/* <button onClick={enviarbusqueda}   >SEARCH</button> */}
            </form>
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
                <Link to="/Ordenes" className="nav-link letritas" href="index.html">Favoritos </Link>
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
                  <Link to="/productos" className="dropdown-item letritas" href="#">Nuevos Productos</Link>
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


           
          
          {showLogin ? <>  
          
               
          {console.log("xxxxxx", userOK.email)}
                    <botton className="nav-link disabled btn3 lgrande" href="index.html" onClick={salirQ}> {userOK.email}  </botton>

                    {showSalir && 
                    <>

  <Modal title="Datos de contacto" setModalState={() => setShowSalir(false)} >

          <h2> Usuario: {userOK.name}  </h2><br></br>
          <h2> Email: {userOK.email}  </h2><br></br>
          

          <Link to="/usuario" className="dropdown-item letritas" href="#">
          <botton className="nav-link disabled btn3 lgrande" href="#" onClick={salirQ2}> Mi Perfil </botton>
          </Link>


          <botton className="nav-link disabled btn3 lgrande" href="index.html" onClick={cerrarSesion}> CERRAR SESION  </botton>
         
          </Modal> </>}



                    </>  :<>  

         
                    {console.log("xxxxxx", userOK.email)}
          <botton className="nav-link disabled btn3 lgrande" href="index.html" onClick={ingresarQ}>Log In  </botton>
      </>
}

{showModal &&  
<>
  
  <Modal title="Datos de contacto" setModalState={() => setShowModal(false)}>
<h3>Formulario de Usuario</h3>
                        <form    onSubmit={ingresaNewUser}
                        >
                             email<input className='inputt' type='email' 
                            name='email' 
                            placeholder='email'
                             value={formDataUser.email}
                            onChange={handleChange}
                            />
                            <br />


 
                             Apellido <input className='inputt' type='password' 
                            name='password' 
                            placeholder='password'
                              value={formDataUser.password}
                            onChange={handleChange}
                            />
                            <br />
                            <button type="submit" > Enviar</button>

                            </form>
                            {consoleslogeos()}
                            <button  onClick={() => registrarse()} > REGISTRATE POR PRIMERA VEZ</button>

                            


  </Modal></>}
  {showRegistrarse &&  <Modal   title="Datos de contacto" setModalState={() => setShowRegistrarse(false)} >

<h1>BIENVENIDO</h1>
<h1>Ingrese todos los datos</h1>
<form    onSubmit={ingresaRegistro}
                        >


                          name<input className='inputt' type='text' 
                            name='name' 
                            placeholder='name'
                            //  value={formDataUser.name}
                            onChange={handleChange}
                            />
                            <br />


                            phone<input className='inputt' type='number' 
                            name='phone' 
                            placeholder='phone'
                            //  value={formDataUser.phone}
                            onChange={handleChange}
                            />
                            <br />


                             adress<input className='inputt' type='text' 
                            name='adress' 
                            placeholder='adress'
                            //  value={formDataUser.adress}
                            onChange={handleChange}
                            />
                            <br />

                            email<input className='inputt' type='email' 
                            name='email' 
                            placeholder='email'
                             value={formDataUser.email}
                            onChange={handleChange}
                            />
                            <br />


 
                             password <input className='inputt' type='password' 
                            name='password' 
                            placeholder='password'
                              value={formDataUser.password}
                            onChange={handleChange}
                            />  <br />


                              password2 <input className='inputt' type='password' 
                            name='password2' 
                            placeholder='password chek'
                              value={formDataUser.password2}
                            onChange={handleChange}
                            />

                            <br />
                            <button type="submit" > Enviar</button>

                            </form>
                            {consoleslogeos()}
</Modal>}

{consoleslogeos()}


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