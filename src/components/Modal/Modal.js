// import { Modal } from "bootstrap";
import './ItemProduct.css' 

const Modal = (title,children) => {
    return(
        <div classname="cssModal">
        <h2> {title}</h2>
        
        {children}
        </div>
    )
}

export default Modal;