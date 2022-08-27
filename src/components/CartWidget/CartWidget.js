

import './CartWidget.css'
import CartProvider, { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {


    const { addProductToCart, cantidadXCarro, cartProducts, clear, removeProductToCart, setCantidadXCarro } = useContext(CartContext)

    const { id, title, description, image, category, filtradito, price, qty, stock } = cartProducts

    // TOTAL  tiene que ser un parametro que me lo pase la pagina...

    let total = 0
    let subtotal = 0
    let mostrar = false

    console.log("xxxxxxxxxxxxxxxxxxxxxxx", cartProducts)

    console.log("yyyyyyyyyyyyyyyyyyyyyyy", cantidadXCarro)
    

    const showCart = () => {
        if (mostrar === false) {
            mostrar = true
        } else {
            mostrar = false
        }
        console.log(mostrar)
    }


    const calculandoElTotal = () => {
        cartProducts.map((product) => {

            subtotal = product.price * product.qty;
            total = subtotal + total
        })
    }






    return (
        <> 
     
            {cartProducts.length !== 0 ?  <>
                {calculandoElTotal()}
                <div class="dropdown">
                    <button onClick={showCart} className='btncarro btn btn-secondary dropdown-toggle ' style={{ color: cantidadXCarro>9 ?  'darkblue' : 'black'}}  
                    type="button" id="dropdownMenuButton" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">

                        <img className="carro" src={`../assets/img/carticon.svg`} alt="Imagen producto" />  {cantidadXCarro}</button>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div>
                            <div className='none'>
                                {total = 0}
                                {subtotal = 0}
                            </div>
                            {cartProducts.map((product) => {
                                return <>
                                    <div className="item-productxx margin hoverr">
                                        <img  className="imgcart" src={`../assets/img/${product.image}`} alt="Imagen producto" />
                                        {/* {namee} */}
                                        <div  > 
                                            <h3>{product.title}</h3> 
                                            
                                            <div className='none'>
                                                {subtotal = product.price * product.qty}
                                                {total = subtotal + total}
                                           
                                        
                                            </div>
                                          
                                           
                                            <div>
                                                <button className="btn btn-group2 bttn" onClick={() => removeProductToCart(product)}>Remover</button>
                                                
                                                

                                                <Link to={`/productos/${product.id}`}>
                                                    <button className="btn btn-group2 bttn" >Agregar mas</button>
                                                </Link>
                                             
                                            </div>

                                        </div>     <div><h4 className='description2'>{product.qty} Unidades  </h4> 
                                          </div>
                                            <div>   <h4 className='description2'>Total: {subtotal}</h4></div>
                                    </div>

                                </>

                            })}
                            <div className="ajam">

                                <h3 className='item-productx margin float-left'>Total del Carro: {total}</h3>
                                <Link to={`/cart`}>
                                    <button className="btn btnp btn-group2 bttn" > VER MI CARRO</button>
                                </Link>
                                <button className="btn btn-group2 bttn" onClick={clear}>Limpiar Carrito</button>
                            </div>
                        </div>

                    </div>
                </div>
            </> : <div class="dropdown">
                <button onClick={showCart} class="btncarro btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                <img  className="carro"  src={`../assets/img/carticon.svg`} alt="Imagen producto" />   </button>

                <div class="dropdown-menu" id="nadda" aria-labelledby="dropdownMenuButton">
                    <div>
                        <div className='none'>
                        </div>
                    </div>
                    <h4 className='description2'>No hay ítems en el carro</h4>
                    <Link to={`/productos`}>
                        <button className="btn btn-group2 bttn  float-left margin3"> Comprar Productos </button>
                    </Link>
                </div>
            </div>
            }





        </>
    )
}




export default CartWidget
    ;