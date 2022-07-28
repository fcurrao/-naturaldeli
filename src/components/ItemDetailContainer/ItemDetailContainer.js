

import {useEffect, useState} from 'react'
import ItemList from "../ItemList/ItemList"
import products from "../../utils/product.mock"
import ItemDetail from '../ItemDetail/ItemDetail' 



const ItemDetailContainer = ({secciones}) => {

    
        
        // Implementar mock invocando a getItem() y utilizando el resolver then
        //  return /* JSX que devuelva un ItemDetail (punto 2) */
    


         
    const [listProducts, setlistProducts] = useState([])

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)         
        }, 2000);
    
    })
    
    



    // se trae los productos , solo en el montaje nomas.
    useEffect(()=>{
    
        getItem
        .then ((data) => {
            console.log("Productos: ")
            console.log(data)
            setlistProducts(data)
        })
        .catch((error)=>{
            console.log("la llamada fallo" + error)
        })
        .finally ((data)=>{
    
            console.log("finally")
        })
    
    },[])

 




     
    return(
        <>
        <div className='conteinerStyling'>
            
        <h2 className='minimoContenido'>{secciones}</h2>

        {listProducts.map((product)=> {
        return <ItemDetail key={product.id} baseProducto={product}/>  
        
        
        })}   


         </div>
    
        </>
    )
    }


export default ItemDetailContainer




