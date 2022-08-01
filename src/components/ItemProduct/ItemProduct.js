import './ItemProduct.css'
import {useState,useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Detail from '../../pages/Detail'
import products from '../../utils/product.mock'

const ItemProduct = ({data}) => {

    // console.log("DATAAAAAAAAAAAAAAA:", data)
   

    // const {yd, categorias} = useParams()
    const {id,title,description,image,category,filtradito,price,stock}=data
  
    // const {id, categorias} = useParams()



    const onSubmitDetalle = () => {
        console.log("Tocaste Boton   detalle producto")
     }


     
    const onSubmitComprar = () => {
        console.log("Tocaste Boton   Comprar")
     }

console.log("data:", id)






const en12cuotasSub = (price/12);
const en12cuotas = en12cuotasSub.toFixed(2);


    return(
        <div>
       {/* <Detail data={productData} /> */}
       <div className="item-product">
        <img src={`../assets/img/${image}`} alt="Imagen producto" />
        <div  className="item-product2" >
        <span className="chiquito1 badge badge-warning">{category}</span>
        <p className='chiquito1'>Producto Organico</p>
        <h1>{title}</h1>
        <p className='description2'>{description}</p>
        <span className="btn2 btn btn-primary">$ {price}</span><br></br>
        <p className='red' >pagalo en 12 cuotas de {en12cuotas}</p>
        <Link to={`/productos/${id}` }>
       <div>
        <button className="btn btn-group2" onClick={onSubmitDetalle}>Detalle Producto</button>
        </div>
        </Link>
        </div>
        </div>
    </div>
    )
}

export default ItemProduct




