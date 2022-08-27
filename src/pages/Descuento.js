import "../pages/pages.css"
import { useEffect, useState } from 'react'
import db from "../firebaseConfig"
import { doc, getDoc } from "firebase/firestore"
import ItemDetail from "../components/ItemDetail/ItemDetail"

import { useParams } from 'react-router-dom'



const Descuento = () => {


    const [productData, setProductData] = useState([])
    const { filtradito } = useParams()


    useEffect(() => {
        getProduct()
            .then((res) => {
                setProductData(res)
            })
    }, [filtradito])


    const getProduct = async () => {
        const docRef = doc(db, 'products', filtradito)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        console.log('product', product)
        return product
    }



    return (
        <section>
            <h1 className="titulo centrado">Descuentos</h1>
            <div> <ItemDetail data={productData} /></div>
        </section>

    )


}

export default Descuento