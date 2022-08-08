

import './CartWidget.css'
import CartProvider, { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {


    const { addProductToCart, cartProducts,clear, removeProductToCart, setCantidadXCarro, cantidadXCarro } = useContext(CartContext)

    const { id, title, description, image, category, filtradito, price, qty, stock } = cartProducts

    // TOTAL  tiene que ser un parametro que me lo pase la pagina...

    let total = 0
    let subtotal = 0
    let mostrar = false

    console.log("xxxxxxxxxxxxxxxxxxxxxxx", cartProducts)


    const showCart = () => {
        if (mostrar === false) {
            mostrar = true
        } else {
            mostrar = false
        }
        console.log(mostrar)
    }


    const  calculandoElTotal = () =>{
        cartProducts.map((product) => {
           
                subtotal = product.price * product.qty;
                total = subtotal + total
        }) 
    }


    return (
        <>

 
            { calculandoElTotal()}
                <div class="dropdown">
                    <button onClick={showCart} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                        <svg className="bi bi-cart4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path className="carritoDerecha carro" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg> $ {total}</button>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div>
                    <div className='none'> 
                    {total = 0}
                    { subtotal = 0}
                    </div>
                        {cartProducts.map((product) => {
                            return <>
                                <div className="item-product margin hoverr">
                                    <img src={`../assets/img/${product.image}`} alt="Imagen producto" />
                                    {/* {namee} */}
                                    <div className="item-product2" >
                                        <span className="chiquito1 badge badge-warning">{product.category}</span>
                                        <p className='description2'>Producto Organico</p>
                                        <h1>{product.title}</h1>
                                        <p className='description2'>{product.description}</p>
                                        <h2 className='description2'>{product.qty} Unidades de </h2>
                                        <span className="btn2 btn btn-primary">$ {product.price}</span><br></br>
                                       <div className='none'> 
                                       {subtotal = product.price * product.qty}
                                           {total = subtotal + total}
                                           </div>
                                        <h2 className='description2'>Total: {subtotal}</h2>

                                        <div>
                                        <button className="btn btn-group2 bttn" onClick={()=>removeProductToCart(product.id)}>Remover</button>
                                        <Link to={`/productos/${product.id}`}> 
                            <button className="btn btn-group2 bttn" >Agregar mas</button>
                            </Link> 

                                        </div>

                                    </div>
                                  
                                </div>
                                
                            </>
                            
                        })}
                          <div className="ajam">
                            
                          <h3 className='item-productx margin float-left'>Total del Carro: {total}</h3>
                          <Link to={`/cart`}> 
                          <button className="btn btn-group2 bttn" >finalizar compra</button>
                          </Link>
                          <button className="btn btn-group2 bttn" onClick={clear}>Limpiar Carrito</button>
                          </div>
                    </div>

                    </div>
                </div>


            

 
        </>
    )
}




export default CartWidget
    ;