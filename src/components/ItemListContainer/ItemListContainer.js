
import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"
import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.css'
import products from "../../utils/product.mock"
import { useParams } from 'react-router-dom'
import Detail from '../../pages/Detail'
import { collection, getDocs } from "firebase/firestore"
import db from "../../firebaseConfig"

const ItemListContainer = ({ secciones }) => {

    const { categoryid } = useParams()
    const [listProducts, setlistProducts] = useState([])
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


 

    // filtrar por categoria: 
// pero categoria === "nombre de la categoria"
// WHERE (diapositiva 59 - clase 11)


// const categorys = query(collection(db, "products"), where(" product.category, "==", "Almacen")




    const getItem = async () => {
        const productCollection = collection(db , 'products')
        const productSnapshot = await getDocs(productCollection)

        const productList = productSnapshot.docs.map((doc)=>{
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList

    console.log('productList', productList)
    }

    



    useEffect(() => {

        getItem()
        .then((res)=> {
            setlistProducts(res)
        })
        
    }, [])


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