import '../ItemProduct/ItemProduct.css' 
import ItemCount from '../ItemCount/ItemCount' 
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const ItemDetail =   ( {baseProducto} ) => {

    const {title,description,image,price,stock}=baseProducto


    const onSubmitComprar = () => {
       console.log("Tocaste Boton Compra  ")
    }

    const onSubmitDetalle = () => {
        console.log("Tocaste Boton   detalle producto")
     }
     


     const en12cuotasSub = (price/12);
    const en12cuotas = en12cuotasSub.toFixed(2);


return (

    <div className="item-product">
    <img src={`./assets/${image}`} alt="Imagen producto" />
    <div  className="item-product2" >
    <p className='chiquito1'>Producto Organico</p>
    <h1>{title}</h1>
    <p className='description2'>{description}</p>
    <span className="btn2 btn btn-primary">$ {price}</span><br></br>
    <p className='red' >pagalo en 12 cuotas de {en12cuotas}</p>
    </div>
    <div className="item-product2">

    <span className="badge badge-danger">RECOMENDADO</span>
    <ItemCount stock={stock} initial={1} />
    <p className='chiquito1'>stock disponible: {stock}</p>           
  

    <button className="btn btn-group2" onClick={onSubmitDetalle}>Detalle Producto</button>
    <button className="btn btn-group" onClick={onSubmitComprar}>Comprar</button>
    </div>
</div>
    
    
)
}

export default ItemDetail

