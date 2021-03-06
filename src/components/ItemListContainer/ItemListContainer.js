
    import {useEffect, useState} from 'react'
    import ItemList from "../ItemList/ItemList"
    import ItemProduct from "../ItemProduct/ItemProduct"
    import './ItemListContainer.css'
    import products from "../../utils/product.mock"

const ItemListContainer = ({greeting}) => {

    const [listProducts, setlistProducts] = useState([])

    const getProcuts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)         
        }, 2000);
    
    })


    // se trae los productos , solo en el montaje nomas.
    useEffect(()=>{

        getProcuts
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
            
        <h2 className='minimoContenido'>{greeting}</h2>
        
       <ItemList dataProducts={listProducts}/> 
         </div>
    
        </>
    )
}

export default ItemListContainer