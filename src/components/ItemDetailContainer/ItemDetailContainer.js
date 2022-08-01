
    import {useEffect, useState} from 'react'
    import ItemList from "../ItemList/ItemList"
    import ItemProduct from "../ItemProduct/ItemProduct"
    import '../ItemListContainer/ItemListContainer.css'
    import products from "../../utils/product.mock"
    import {useParams} from 'react-router-dom'
    import ItemDetail from  "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({}) => {

    const {id} = useParams()
    const [productData, setProductData] = useState([])
    
useEffect(()=>{
    filterById()
},[])


const filterById = () =>{

    // filter o some
    products.some( (product)=>{
    if(product.id == id)   {
        
        setProductData(product)
       
    } 
    })
}

    return(
        
    <div>
          
    <ItemDetail data={productData}/> 
      
    
         </div>
        
    )
}

export default ItemDetailContainer