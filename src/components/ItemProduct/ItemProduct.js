import './ItemProduct.css'
import { useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Detail from '../../pages/Detail'
import products from '../../utils/product.mock'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Modal from '../Modal/Modal'


const ItemProduct = ({ data }) => {

    // console.log("DATAAAAAAAAAAAAAAA:", data)


    // const {yd, categorias} = useParams()
    const { id, title, description, image, category, filtradito, price, stock } = data
    const { addProductToCart, cartProducts, clear, removeProductToCart, quantitiSelected, setQuantitiSelected , setCantidadXCarro, removeONEProductToCart, cantidadXCarro } = useContext(CartContext)

    // const {id, categorias} = useParams()



    const onSubmitDetalle = (e) => {
        e.preventDefault()
        // e.stopPropagation()
        console.log("Tocaste Boton   detalle producto")
        // <Modal />

    }
 


    const onSubmitComprar = () => {
        console.log("Tocaste Boton   Comprar")
    }

    console.log("data:", id)


    const en12cuotasSub = (price / 12);
    const en12cuotas = en12cuotasSub.toFixed(2);

    
    return (
        <div>
      
                <div className="item-product margin hoverr">
                    <img src={`../assets/img/${image}`} alt="Imagen producto" />
                    {/* {namee} */}
                    <div className="item-product2" >
                        <span className="chiquito1 badge badge-warning">{category}</span>
                        <p className='chiquito1'>Producto Organico</p>
                        <h1>{title}</h1>
                        <p className='description2'>{description}</p>
                        <span className="btn2 btn btn-primary">$ {price}</span><br></br>
                        <p className='red' > 12 cuotas de {en12cuotas}</p>
                      

                        <ItemCount  productData={data} stock={stock} initial={1} />
                       <p className='chiquito1'>stock disponible: {stock}</p>
                       <Link to={`/productos/${id}`}>

                        <div>
                            <button className="btn btn-group2 bttn"  >Detalle Producto</button>
                          
                        </div>
                        </Link>
                    </div>
                </div>

            
        </div>
    )
}

export default ItemProduct




