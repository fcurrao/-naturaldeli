import '../ItemProduct/ItemProduct.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import CartProvider, { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import Modal from '../Modal/Modal'


const ItemDetail = ({ data }) => {

    const { id, title, type, description, image, image2, image3, qty, category, filtradito, price, stock } = data
    const { addProductToCart, cartProducts, clear, removeProductToCart, quantitiSelected, setQuantitiSelected, setCantidadXCarro, removeONEProductToCart, cantidadXCarro } = useContext(CartContext)

    const { categoryid, todos } = useParams()
    const [imagensita, setImagensita] = useState('')
    const [fotoGrande, setFotoGrande] = useState(1)
    const [modaleState, setModalState] = useState(false)

    const en12cuotasSub = (price / 12);
    const en12cuotas = en12cuotasSub.toFixed(2);

    const onSubmitDetalle = () => {
        console.log("Tocaste Boton   detalle producto")
    }

    const onSubmitComprar = () => {
        console.log("Tocaste Boton   COMPRAR")
        console.log("producto: ", data)
        console.log("cantidad: ", quantitiSelected)
        console.log("aaa: ,", cantidadXCarro)
        console.log("Array del changito", cartProducts)
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





    const onModal1 = () => {
        setModalState(true)
        setImagensita(image)
    }

    const onModal2 = () => {
        setModalState(true)
        setImagensita(image2)
    }

    const onModal3 = () => {
        setModalState(true)
        setImagensita(image3)
    }

    return (
        <>
            {id != null ? <>
                <div className="item-product-zoom">
                    <div className='fotitos'>
                        <button className="foti zindexabajo" onClick={onSubmitChangePicture1}> <img src={`../assets/img/${image}`} alt="Imagen producto" /></button>
                        <button className="foti zindexabajo" onClick={onSubmitChangePicture2}> <img src={`../assets/img/${image2}`} alt="Imagen producto" /></button>
                        <button className="foti zindexabajo" onClick={onSubmitChangePicture3}> <img src={`../assets/img/${image3}`} alt="Imagen producto" /></button>
                    </div>

                    {
                        fotoGrande == 1 ?
                            <div className="item-product2">
                                <img src={`../assets/img/${image}`} onClick={onModal1} alt="Imagen producto" />
                            </div>
                            : fotoGrande == 2 ?
                                <>
                                    <div className="item-product2" >
                                        <img src={`../assets/img/${image2}`} onClick={onModal2} alt="Imagen producto" />
                                    </div>
                                </>
                                :
                                <>
                                    <div className="item-product2"  >
                                        <img src={`../assets/img/${image3}`} onClick={onModal3} alt="Imagen producto" />
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
                            <select className='padbot' >
                            <p>Tipo:</p>

                            


                                {type.map((t) => {
                                    return <option>{t}</option>
                                })}
 <br></br> <br></br> <br></br> <br></br>
                                <br></br>
                            </select >
                            <span className="badge badge-danger">RECOMENDADO</span>
                        </div>
                        <div className="item-product2 esp">

                            {
                                quantitiSelected > 0 ?
                                    <>
                                        {console.log("quantitiSelected", quantitiSelected)}
                                        <div className='padtop'><h4>Agrego al carro :  {quantitiSelected} unidades</h4>
                                        <Link to={`/cart`}>
                                            <button className="btn btn-group btnx2" onClick={onSubmitComprar}>Terminar Compra</button>
                                        </Link>
                                        <Link to={`/productos`}>
                                            <button className="btn btn-group btnx2" onClick={onSubmitComprar}>Seguir comprando...</button>
                                        </Link>
                                        </div>
                                    </>
                                    :
                                    <><div className='padtop'>
                                        <ItemCount productData={data} stock={stock} initial={1} />
                                        <p className='chiquito1'>stock disponible: {stock}</p>
                                        </div>
                                    </>
                            }
                            {modaleState && <Modal className="custom2" data={data} setModalState={setModalState} imagensita={imagensita}>

                                <div className="item-product22"  >
                                    <h2>{title}</h2>
                                    <img className="imgzoom" src={`../assets/img/${imagensita}`} alt="Imagen producto" />

                                </div>
                            </Modal>}

                        </div>
                    </div>
                </div>
            </> : <><h1>NO EXISTE ESTE PRODUCTO</h1></>}






        </>
    )
}

export default ItemDetail

