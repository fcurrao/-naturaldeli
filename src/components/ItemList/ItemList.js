
import ItemProduct from "../ItemProduct/ItemProduct"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const ItemList = ({ listProducts }) => {
    const { namee } = useContext(CartContext)
    console.log("dato", namee)
    return (
        <>

            {listProducts.map((product) => {
                return <ItemProduct key={product.id} data={product} />
            })}
        </>
    )
}

export default ItemList