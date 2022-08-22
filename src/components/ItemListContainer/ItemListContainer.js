
import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"
import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.css'
import products from "../../utils/product.mock"
import { useParams } from 'react-router-dom'
import Detail from '../../pages/Detail'
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebaseConfig"
import { setDefaultEventParameters } from 'firebase/analytics'

const ItemListContainer = ({ secciones }) => {

    const { categoryid, todos } = useParams()
    const [listProducts, setListProducts] = useState([])


    
    // const getItem = async () => {
    //     const productCollection = collection(db , 'products')
    //     const productSnapshot = await getDocs(productCollection)

    //     const productList = productSnapshot.docs.map((doc)=>{
    //         let product = doc.data()
    //         product.id = doc.id
    //         return product
    //     })
    // }
  

    //     // const filterByCategory = productList
    //     // if (todos == )
    //     // const filterByCategory = productList.filter((product) => product.category == categoryid)
    //        //     const categorys =    db.collection("products").where("Almacen", "==", categoryid) 
      
    //     return productList
    //     console.log('productList', productList)
    // }
    
    // // const filterByCategory = listProducts.filter((product) => product.category == categoryid)
    // //         filterByCategory()

    

    
    
    
//     useEffect(() => {
//         getItem()
//         .then((res)=> {
//             setListProducts(res)
            
//        })

// }, [categoryid])





       useEffect(()=>{
       const queryCollection = collection(db,"products") 
       
       if (categoryid){
           const queryFilter= query(queryCollection, where("category" , "==", categoryid))
           getDocs(queryFilter)
           .then(res =>setListProducts (res.docs.map((uno)=>{
                    let product = uno.data()
                    product.id = uno.id
                    return product
                })))
       }else{
       getDocs(queryCollection)
       .then(res =>setListProducts (res.docs.map((uno)=>{
        let product = uno.data()
        product.id = uno.id
        return product
    })))
        
       }
   },[categoryid])











  
        // const categorys = query(collection(db, "products"), where("categoryid", "==","Almacen"), 
        // where("categoryid", "==", "Congelados"), where("categoryid", "==",   "Dulces"), where("categoryid", "==", "Frescos"))



        // const productCollection = collection(db , 'products')
        // const productSnapshot =  getDocs(productCollection)
        // console.log('productCollection', productCollection)
        // console.log('productSnapshot', productSnapshot)
        // if(categoryid){
        //     const productCollection = collection(db , 'products')
        //     const productFilter =  query(productCollection, where('category' , '==' , categoryid))
        //     const productSnapshot =  getDocs(productFilter)
            
        // const productList = productSnapshot.docs.map((doc)=>{
        //             let product = doc.data()
        //             product.id = doc.id
        //             return product
        //         })
        //         setlistProducts(productList)

        // }else{
        //     const productCollection = collection(db , 'products')
        //     const productSnapshot =  getDocs(productCollection)
        //     const productList = productSnapshot.docs.map((doc)=>{
        //                 let product = doc.data()
        //                 product.id = doc.id
        //                 return product
        //             })
        //             setlistProducts(productList)
        // }
     
        





  




    // const filterByCategory = products.filter((product) => product.category == categoryid)





    // const getItem = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         if (categoryid === 'Almacen' || categoryid === 'Congelados' || categoryid === 'Dulces' || categoryid === 'Frescos') {
    //             resolve(filterByCategory)

    //         }
    //         else {
    //             resolve(products)
    //         }
    //     }, 2000);

    // })


    
        // const filterById = () => {

    //     // filter o some
    //     products.some((product) => {
    //         if (product.id == id) {

    //             setProductData(product)

    //         }
    //     })
    // }


 



    // se trae los productos , solo en el montaje nomas.
    // useEffect(() => {

    //     getItem
    //         .then((data) => {
    //             console.log("Productos: ")
    //             console.log(data)


    //             setlistProducts(data)
    //         })
    //         .catch((error) => {
    //             console.log("la llamada fallo" + error)
    //         })
    //         .finally((data) => {

    //             console.log("finally")

    //         })



    // }, [categoryid])






    return (
        <>
            <div className='conteinerStyling centrado '>
              
                <h1 className='minimoContenido titulo'>{secciones}</h1>
                <h1 className='minimoContenido titulo2'>{categoryid}</h1>
                <ItemList listProducts={listProducts} />


            </div>

            {/* <ItemDetailContainer/> */}
        </>

    )
}

export default ItemListContainer