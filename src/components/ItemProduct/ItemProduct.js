import './ItemProduct.css'
import {useState,useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemProduct = ({data,onSubmit,children}) => {

   

const {title,image,price,stock}=data



//  // aca en useEffect se llama a la api y listo 
//         // fetch().then(
//             // setProduct())
//     // para agregar un producto dsp hacer una actualizacion

//     useEffect(()=>{
//         console.log("ejecuto en fase de actualizacion")
//          // fetch().then(
//             // setProduct())
//     },[counter, otro])
// // se ejecuta cada vez que cambie el estado COUNTER


    return(
        <div className="item-product">
            <img src={`/assets/${image}`} alt="Imagen producto" />
            <p>{title}</p>
            <span>$ {price}</span>
            <ItemCount stock={stock} initial={1} />           
          


            <button onClick={onSubmit}>Comprar</button>
        </div> 
    )
}

export default ItemProduct

