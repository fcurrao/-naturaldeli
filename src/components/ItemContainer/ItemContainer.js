import ItemProduct
 from "../ItemProduct/ItemProduct"
const ItemContainer = (section)=> {
    // const data =[
    //     {title: asdd,
    //     price: asd,
    //      image:} asd,
    //     },
    //     {title: asdd,
    //         price: asd,
    //          image:} asd,
    //         },
    // ]
    return(
        <div>
            <h2>{section}</h2>
        <ItemProduct title="campera"/> 
        <ItemProduct title="remera"/>
        <ItemProduct title="pantalon" price={3000} image={'xxx.png'}/>
        </div> 
    )
}

export default ItemContainer;