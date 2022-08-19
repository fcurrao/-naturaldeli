



import CartProvider, { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import CartWidget from "../components/CartWidget/CartWidget"
import "../pages/pages.css"
import { Link } from 'react-router-dom'
import ItemCount from '../components/ItemCount/ItemCount'
import Modal from '../components/Modal/Modal'
import { useState } from 'react'
import db from '../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'



const Checkout = () => {

    const { addProductToCart, cartProducts, clear, removeProductToCart, quantitiSelected, setQuantitiSelected , setCantidadXCarro, removeONEProductToCart, cantidadXCarro } = useContext(CartContext)
    const { id, title, description, image, category, filtradito, price, qty, stock } = cartProducts
    const {totalPrice} = useContext(CartContext)

    const [succes, setSucces] = useState()
    const [showModal, setShowModal] = useState(false)
    const [order, setOrder] = useState({
        items: cartProducts.map((product => {
            return {
                id: product.id,
                title: product.title,
                qty: product.qty,
                price: product.price
            }
        })),
        buyer:{  },
        date: new Date().toLocaleString(),
        total: cantidadXCarro
    }) 


    const [formData, setFormdata] = useState({

        name : '',
        phone : '',
        email : '',

    }) 


    
// w.target.name (queda: name, phone y email)
 const handleChange = (e) => {
    console.log("valor ingresado por el usuario, TARGET : ", e.target)
    setFormdata({...formData,[ e.target.name] : e.target.value})
 }



const submitData = (e) =>{ 
    e.preventDefault()
    console.log("order para enviar:", {...order, buyer: formData})
    pushDatatoFireabase({...order,buyer: formData})

}

const pushDatatoFireabase = async (newOrder) => {
 const collectionOrder = collection(db, 'OrdenDeCompra')
  const orderDoc = await addDoc(collectionOrder, newOrder)
  setSucces(orderDoc.id)
  console.log('ORDER GENERADA ', orderDoc)
  clear()
}






    
    // TOTAL  tiene que ser un parametro que me lo pase la pagina...

    let total = 0
    let subtotal = 0


    console.log("Productos::: ", cartProducts)

    // const removerUno = (product) => {
    //     if(cartProducts.some(uno => uno.id == product.id)){
    //         product.qty =  product.qty-1
    //         console.log("si")
    //         return (product.qty)
    //     }
    // }



    return (
        <>



            <section>
                <h1 className="titulo centrado">Tu Carrito  </h1>
                {console.log('formData', formData)}
                {console.log('order', order)}

                {cartProducts.length !== 0 ? <>
                    <div>
                        {cartProducts.map((product) => {
                            {
                                subtotal = product.price * product.qty;
                                total = subtotal + total
                            }
                            return <>
                                <div className="item-product margin hoverr">
                                    <img src={`../assets/img/${product.image}`} alt="Imagen producto" />
                                    {/* {namee} */}
                                    <div className="item-product2" >
                                         <span className="chiquito1 badge badge-warning">{product.category}</span>
                                        <p className='description2'>Producto Organico</p>
                                        <h1>{product.title}</h1>
                                        <p className='description2'>{product.description}</p>
                                        <h2 className='description2 azul'>{product.qty} </h2> <p>Unidades de </p>

                                        <span className="btn2 btn btn-primary">$ {product.price}</span><br></br>
                                        <h2 className='description2'>Total: {subtotal}</h2>
                                   

                                        <div>
                                            <button className="btn btn-group2 bttn" onClick={() => removeProductToCart(product)}>Remover</button>
                                    

                                           
                                            <Link to={`/productos/${product.id}`}>
                                                <button className="btn btn-group2 bttn" >Agregar mas</button>
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            </>
                        })}
                        
                    </div>

                    
                    <div>
                        <h2 className='margin2 float-left'>Total del Carro: {total}</h2>
                        
                    </div>

                    <button className="btn btn-group2 bttn  float-left margin3" onClick={() => setShowModal(true)}> Continuar PAGO</button>
                    

                 

                    <Link to={`/productos`}>
                        <button className="btn btn-group2 bttn  float-left margin3"> Seguir comprando ...</button>
                    </Link>
                    <img className='margin2' src={`../assets/img/tarjetas.png`} alt="Imagen tarjetas" />
                    <div className='medioo'>
                        <button className="btn btn-group2 bttn float-left margin4"> Mas Info</button>
                        <button className="btn btn-group2 bttn  float-left margin4 red" onClick={clear}>Limpiar Carrito</button>
                    </div>



                </> : <div>
                    <h2 className='margin2 float-left'>  No hay ítems en el carro</h2>
                    <Link to={`/productos`}>
                        <button className="btn btn-group2 bttn  float-left margin3"> Comprar Productos </button>
                    </Link>
                </div>
                }



            </section>
            {showModal &&  <Modal title="Datos de contacto" setModalState={() => setShowModal(false)}>
                      {succes ? <>  
                        <h3>Su orden fue Generada correctamente  </h3>
                        <p> Id de compra {succes}</p>

                        </> : <>
                        <h3>Formulario </h3>
                        <form onSubmit={submitData}>
                            <input type='text' 
                            name='name' 
                            placeholder='nombre'
                             value={formData.name}
                            onChange={handleChange}/>

                            <input type='number' 
                            name='phone' 
                            placeholder='telefono'
                             value={formData.phone}
                             onChange={handleChange}/>

                            <input type='email' 
                            name='email' 
                            placeholder='correo electronico'
                            value={formData.email}
                            onChange={handleChange}/>

                        <button type="submit" > Enviar</button>
                        
                        </form></>}
                    </Modal>}



        </>
    )
}



export default Checkout