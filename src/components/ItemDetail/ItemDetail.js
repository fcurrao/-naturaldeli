import '../ItemProduct/ItemProduct.css'
import ItemCount from '../ItemCount/ItemCount'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { Link } from 'react-router-dom'
import detail from '../../pages/Detail'
import { useParams } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import CartProvider, { CartContext } from '../../context/CartContext'
import { useContext } from 'react'


const ItemDetail = ({ data }) => {
    
    const { id, title, description, image,image2,image3, qty,category, filtradito, price, stock } = data
    const {cartProducts,addProductToCart,setCantidadXCarro,cantidadXCarro} = useContext(CartContext)
    const [quantitiSelected, setQuantitiSelected] = useState(0)
    const [fotoGrande , setFotoGrande] = useState(1)
    
    const en12cuotasSub = (price / 12);
    const en12cuotas = en12cuotasSub.toFixed(2);

    const onSubmitDetalle = () => {
        console.log("Tocaste Boton   detalle producto")
    }

    const onSubmitComprar = () => {
        console.log("Tocaste Boton   COMPRAR")
        console.log("producto: ",data)
        console.log("cantidad: ",quantitiSelected)
        console.log("aaa: ,", cantidadXCarro)
        console.log("Array del changito",cartProducts)
        qty = quantitiSelected;
        // setQtySelect(counter)
        //  CantidadXCarro(counter)
        // addProductToCart(productData,counter)

    }

    const onSubmitChangePicture1 = () => {
        setFotoGrande(1)
    }

    const onSubmitChangePicture2 = () => {
        setFotoGrande(2)
    }
    const onSubmitChangePicture3 = () => {
        setFotoGrande(3)
    }








    return (
        <div className="item-product-zoom">
            <div className='fotitos'>
            <button  className="foti zindexabajo" onClick={onSubmitChangePicture1}> <img  src={`../assets/img/${image}`} alt="Imagen producto" /></button> 
            <button  className="foti zindexabajo" onClick={onSubmitChangePicture2}> <img src={`../assets/img/${image2}`} alt="Imagen producto" /></button> 
            <button  className="foti zindexabajo" onClick={onSubmitChangePicture3}> <img src={`../assets/img/${image3}`} alt="Imagen producto" /></button> 
            </div>

            {
                fotoGrande == 1 ? 
            <div className="item-product2">
                <img src={`../assets/img/${image}`} alt="Imagen producto" />
            </div>
            :   fotoGrande == 2 ? 
            <>
              <div className="item-product2">
                <img src={`../assets/img/${image2}`} alt="Imagen producto" />
            </div>
             </>
            : 
            <>
              <div className="item-product2">
                <img src={`../assets/img/${image3}`} alt="Imagen producto" />
            </div>
            </>
            }
            
            <div className="item-product3 ">
                <div className="item-product2 " >
                    <span className="chiquito1 badge badge-warning">{category}</span>
                    <p className='chiquito1'>Producto Organico</p>
                    <h1>{title}</h1>
                    <p className='description2 esp esp2' >{description}</p>
                    <span className="btn2 btn btn-primary">$ {price}</span><br></br>
                    <p className='red' >pagalo en 12 cuotas de {en12cuotas}</p>
                    <span className="badge badge-danger">RECOMENDADO</span>
                </div>
                <div className="item-product2 esp">
                   
                   {
                       quantitiSelected > 0 ? 
                       <>
                       {console.log("quantitiSelected", quantitiSelected)}
                            <h4>Selecciono :  {quantitiSelected} unidades</h4>
                       <Link to={`/cart`}> 
                            <button className="btn btn-group btnx2" onClick={onSubmitComprar}>Terminar Compra</button> 
                        </Link>     
                       </>                           
                            : 
                            <>
                       <ItemCount productData={data} quantitiSelected={quantitiSelected} setQtySelect={setQuantitiSelected} stock={stock} initial={1} />
                       <p className='chiquito1'>stock disponible: {stock}</p>
                       </>    
                   }

                  
               
                    
                    
                </div>
            </div>
        </div>

    )
}

export default ItemDetail

