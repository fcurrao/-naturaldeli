// import { Modal } from "bootstrap";

import './Modal.css'
import { useContext } from 'react'
import CartProvider, { CartContext } from '../../context/CartContext'


const Modal = ({setModalState, children}) => {

 
 
    return(
        <div className="modal-custom">
         <button className="zz" onClick={() => setModalState(false)}>X</button>
        
                {children}
            </div> 
    )
}

export default Modal