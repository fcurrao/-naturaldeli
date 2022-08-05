import Detail from "../../pages/Detail"
import ItemProduct from "../ItemProduct/ItemProduct"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const ItemList = ({listProducts}) => {
    const {namee,setNamee,apellidoo} = useContext(CartContext)
    console.log("dato", namee)
return (
<>
<button onClick={() => console.log("dato", namee)}> Click</button>


 <button onClick={() => setNamee("franco")}> Click</button>

<button onClick={apellidoo}> Click</button> 

{listProducts.map((product)=> {
return <ItemProduct key={product.id} data={product}/>
})}       

{/* <Detail zoom={productData}/> */}

</>
)
}

export default ItemList