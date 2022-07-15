// import { Modal } from "bootstrap";

import './Modal.css'
const Modal = ({title, children}) => {

    // onClick={cerrarModal}

    // const cerrarElModal = document.getElementsByClassName('modal-custom');
    // function cerrarModal () {
      
    //     cerrarElModal.removeClass('modal-custom');
    //     cerrarElModal.addClass('modal-custom2');
    //     alert("jaja");
    // }
    return(
        <div className="modal-custom">
            <button>X</button>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Modal