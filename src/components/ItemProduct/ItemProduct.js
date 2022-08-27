import './ItemProduct.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'



const ItemProduct = ({ data }) => {

    const { id, title, description, image, category, filtradito, price, stock } = data
    const en12cuotasSub = (price / 12);
    const en12cuotas = en12cuotasSub.toFixed(2);
    const handleClick = (e) => {
        e.stopPropagation();
    }



    return (
        <div>
            <div className="item-product margin">
                <Link to={`/productos/${id}`}>
                    <img src={`../assets/img/${image}`} alt="Imagen producto" />
                    {/* {namee} */}
                </Link>
                <Link to={`/productos/${id}`}>
                    <div className="item-product2" >   <span className=" chiquito1 badge badge-warning">{category}</span>
                        <p className='chiquito1'>Producto Organico</p>
                        <h1>{title}</h1>
                        <p className='description2'>{description}</p>
                        <span className="btn2 btn btn-primary">$ {price}</span><br></br>
                        <p className='red' > 12 cuotas de {en12cuotas}</p>

                    </div>
                </Link>
                <div >
                    <ItemCount onClick={() => handleClick} productData={data} stock={stock} initial={1} />
                </div>
                <div >
                    <p className='chiquito1'>stock disponible: {stock}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemProduct




