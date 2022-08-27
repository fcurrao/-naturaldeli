
import { useEffect, useState } from 'react'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import db from "../../firebaseConfig"
import { doc, getDoc } from "firebase/firestore"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetailContainer = ({ }) => {

    const { id } = useParams()
    const [productData, setProductData] = useState([])
    const { addProductToCart, cartProducts, clear, removeProductToCart, quantitiSelected, setQuantitiSelected, setCantidadXCarro, removeONEProductToCart, cantidadXCarro } = useContext(CartContext)


    // filterById()
    useEffect(() => {
        getProduct()
            .then((res) => {
                setProductData(res)
            })
    }, [id])

    const getProduct = async () => {
        const docRef = doc(db, 'products', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        console.log('product', product)
        return product
    }



    return (

        <div> <ItemDetail data={productData} /> </div>

    )
}

export default ItemDetailContainer