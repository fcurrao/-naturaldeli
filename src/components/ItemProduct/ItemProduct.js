import './ItemProduct.css'
import {useState,useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemProduct = ({data,onSubmit,children}) => {

   

const {title,image,price,stock}=data


    return(
        <div className="item-product">
            <img src={`/assets/${image}`} alt="Imagen producto" />
            <p>{title}</p>
            <span>$ {price}</span>
            <ItemCount stock={stock} initial={1} />           
          


            <button className="btn btn-group" onClick={onSubmit}>Comprar</button>
        </div> 
    )
}

export default ItemProduct

