



import CartProvider, { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import CartWidget from "../components/CartWidget/CartWidget"
import "../pages/pages.css"
import { Link } from 'react-router-dom'
import ItemCount from '../components/ItemCount/ItemCount'

const Checkout = () => {



    const { addProductToCart, cartProducts, clear, removeProductToCart, setCantidadXCarro, removeONEProductToCart, cantidadXCarro } = useContext(CartContext)

    const { id, title, description, image, category, filtradito, price, qty, stock } = cartProducts

    // TOTAL  tiene que ser un parametro que me lo pase la pagina...

    let total = 0
    let subtotal = 0


    console.log("xxxxxxxxxxxxxxxxxxxxxxx", cartProducts)

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

                    <button className="btn btn-group2 bttn  float-left margin3"> Continuar PAGO</button>
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





        </>
    )
}



export default Checkout