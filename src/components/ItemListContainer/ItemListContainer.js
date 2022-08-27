
import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebaseConfig"

const ItemListContainer = ({ secciones }) => {

    const { categoryid, todos } = useParams()
    const [listProducts, setListProducts] = useState([])


    useEffect(() => {
        const queryCollection = collection(db, "products")

        if (categoryid) {
            const queryFilter = query(queryCollection, where("category", "==", categoryid))
            getDocs(queryFilter)
                .then(res => setListProducts(res.docs.map((uno) => {
                    let product = uno.data()
                    product.id = uno.id
                    return product
                })))
        } else {
            getDocs(queryCollection)
                .then(res => setListProducts(res.docs.map((uno) => {
                    let product = uno.data()
                    product.id = uno.id
                    return product
                })))

        }
    }, [categoryid])

    return (
        <>
            <div className='conteinerStyling centrado '>
                <h1 className='minimoContenido titulo'>{secciones}</h1>
                <h1 className='minimoContenido titulo2'>{categoryid}</h1>
                <ItemList listProducts={listProducts} />
            </div>
        </>

    )
}

export default ItemListContainer