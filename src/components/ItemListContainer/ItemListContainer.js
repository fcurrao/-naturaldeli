
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
 

    import ItemProduct from "../ItemProduct/ItemProduct"
    import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

    return(
        <>
        <div className='conteinerStyling'>
            
        <h2 className='minimoContenido'>{greeting}</h2>
            <ItemProduct title="Arroz Integral" price={150} image={'./img/ARROZ.jpg'}/>
            <ItemProduct title="Yerba" price={1200} image={'./img/YERBA.jpg'}/>
        </div>
    
        </>
    )
}

export default ItemListContainer