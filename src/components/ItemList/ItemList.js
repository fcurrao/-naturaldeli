import Detail from "../../pages/Detail"
import ItemProduct from "../ItemProduct/ItemProduct"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const ItemList = ({listProducts}) => {
    const {namee,setNamee,apellidoo} = useContext(CartContext)
    console.log("dato", namee)
return (
<>
 
{listProducts.map((product)=> {
return <ItemProduct key={product.id} data={product}/>
})}       

{/* <Detail zoom={productData}/> */}

</>
)
}

export default ItemList