import '../ItemProduct/ItemProduct.css' 
import ItemCount from '../ItemCount/ItemCount' 
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { Link} from 'react-router-dom'
import detail from '../../pages/Detail'
import {useParams} from 'react-router-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom';



const ItemDetail =   ( {data} ) => {

    const {id,title,description,image,category,filtradito,price,stock}=data

    
const en12cuotasSub = (price/12);
const en12cuotas = en12cuotasSub.toFixed(2);

const onSubmitDetalle = () => {
    console.log("Tocaste Boton   detalle producto")
 }

 const onSubmitComprar = () => {
    console.log("Tocaste Boton   COMPRAR")
 }

return (
    <div className="item-product-zoom">
        <div className='fotitos'>
        <img src={`/assets/${image}`} alt="Imagen producto" />
        <img src={`/assets/${image}`} alt="Imagen producto" />
        <img src={`/assets/${image}`} alt="Imagen producto" />
        </div>
        <div className="item-product2">
    <img src={`/assets/${image}`} alt="Imagen producto" />
    </div>
    <div className="item-product3">
        <div  className="item-product2" >
        <span className="chiquito1 badge badge-warning">{category}</span>
        <p className='chiquito1'>Producto Organico</p>
        <h1>{title}</h1>
        <p className='description2'>{description}</p>
        <span className="btn2 btn btn-primary">$ {price}</span><br></br>
        <p className='red' >pagalo en 12 cuotas de {en12cuotas}</p>
        <Link to={`/productos/${id}`}>
        <button className="btn btn-group2" onClick={onSubmitDetalle}>Detalle Producto</button>
        </Link>
        </div>
    <div className="item-product2">
<span className="badge badge-danger">RECOMENDADO</span>
<ItemCount stock={stock} initial={1} />
<p className='chiquito1'>stock disponible: {stock}</p>           
<button className="btn btn-group" onClick={onSubmitComprar}>Comprar</button>
</div>    
</div>
</div>

)
}

export default ItemDetail

