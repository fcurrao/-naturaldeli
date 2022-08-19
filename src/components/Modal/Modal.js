// import { Modal } from "bootstrap";

import './Modal.css'
import { useContext } from 'react'
import CartProvider, { CartContext } from '../../context/CartContext'


const Modal = ({setModalState,imagensita, data, children}) => {


    // const { id, title, description, image,image2,image3, qty,category, filtradito, price, stock } = data
    // const {cartProducts,addProductToCart,setCantidadXCarro,cantidadXCarro} = useContext(CartContext)

 
    return(
        <div className="modal-custom">
         <button className="zz" onClick={() => setModalState(false)}>X</button>
         {/*   <h2>{title}</h2>
            <div className="item-product2"  >
                <img className="imgzoom" src={`../assets/img/${imagensita}`}  alt="Imagen producto" /> */}
                {children}
            </div>
        // </div>
    )
}

export default Modal