
    import {useEffect, useState} from 'react'
    import ItemList from "../ItemList/ItemList"
    import ItemProduct from "../ItemProduct/ItemProduct"
    import '../ItemListContainer/ItemListContainer.css'
    import products from "../../utils/product.mock"
    import {useParams} from 'react-router-dom'
    import ItemDetail from  "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({}) => {

    const {id, categorias} = useParams()
    const [productData, setProductData] = useState([])
    
useEffect(()=>{
    filterById()
},[])


const filterById = () =>{

    // filter o some
    products.some( (product)=>{
    if(product.id == id)   {
        
        setProductData(product)
      
        // guardarlo en un state para usarlo en JSX
    } 
    })
}




    return(
        
    <div>
          
    <ItemDetail data={productData}/>
          {/* <ItemProduct key={itemDetails[0].id}  data={itemDetails[0]}/> */}
      
    
         </div>
        
    )
}

export default ItemDetailContainer