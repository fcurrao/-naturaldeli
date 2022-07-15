

import './ItemProduct.css' 

// en props van, tittle , class, name, price, etc
const ItemProduct = (title,price,image) => {

    console.log("propiesdades:" , title , price )
 return (
<>
<div className="items">
    <img scr={`/assets/${image}`} alt="" />
    <p>{title}</p>
    <span>$ {price}</span>
    <button>Comprar</button>
</div>





















</>
 )

}

export default ItemProduct;
