import Detail from "../../pages/Detail"
import ItemProduct from "../ItemProduct/ItemProduct"


const ItemList = ({listProducts}) => {
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