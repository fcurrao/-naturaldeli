
import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"
import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.css'
import products from "../../utils/product.mock"
import { useParams } from 'react-router-dom'
import Detail from '../../pages/Detail'

const ItemListContainer = ({ secciones }) => {

    const { categoryid } = useParams()
    const [listProducts, setlistProducts] = useState([])
    const filterByCategory = products.filter((product) => product.category == categoryid)

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryid === 'Almacen' || categoryid === 'Congelados' || categoryid === 'Dulces' || categoryid === 'Frescos') {
                resolve(filterByCategory)

            }
            else {
                resolve(products)
            }
        }, 2000);

    })

    // se trae los productos , solo en el montaje nomas.
    useEffect(() => {

        getItem
            .then((data) => {
                console.log("Productos: ")
                console.log(data)


                setlistProducts(data)
            })
            .catch((error) => {
                console.log("la llamada fallo" + error)
            })
            .finally((data) => {

                console.log("finally")

            })



    }, [categoryid])






    return (
        <>
            <div className='conteinerStyling centrado '>
                <h2 className='minimoContenido titulo centrado'>{secciones}</h2>
                <h3 className='minimoContenido'>{categoryid}</h3>
                <ItemList listProducts={listProducts} />


            </div>

            {/* <ItemDetailContainer/> */}
        </>

    )
}

export default ItemListContainer