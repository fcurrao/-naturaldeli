import './ItemProduct.css'

const ItemProduct = ({title, price, image}) => {

    return(
        <div className="item-product">
            <img src={`/assets/${image}`} alt="Imagen producto" />
            <p>{title}</p>
            <span>$ {price}</span>
            <button>Comprar</button>
        </div> 
    )
}

export default ItemProduct










