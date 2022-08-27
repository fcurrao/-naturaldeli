import "../pages/pages.css"
import ItemCount from '../components/ItemCount/ItemCount'
import { Link } from 'react-router-dom' 
import { useEffect, useState } from 'react'  
import db from "../firebaseConfig"
import { doc, getDoc } from "firebase/firestore" 
import ItemDetail from "../components/ItemDetail/ItemDetail"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

import { useParams } from 'react-router-dom'



const Descuento = () => {


      // const { filtradito } = useContext(CartContext)
      const [productData, setProductData] = useState([])
       
   
  const {filtradito} = useParams()

  
  
  



          // filterByfiltradito()

    useEffect( () => {
      getProduct()
      .then((res) => {
          setProductData(res)
      })
  }, [filtradito])


  const getProduct = async () => {
      const docRef = doc(db , 'products', filtradito)
      const docSnapshot = await getDoc(docRef)
      let product = docSnapshot.data()
      product.id = docSnapshot.id
      console.log('product', product)
      return product
  } 






return (


<section>
<h1 className="titulo centrado">Descuentos</h1>
     


<div>
       
       
<ItemDetail data={productData} />


      
</div>
 
     
     
     
     
     
      </section>




)


}

export default Descuento