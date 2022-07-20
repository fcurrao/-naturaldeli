
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
 
    import {useEffect} from 'react'
    import ItemProduct from "../ItemProduct/ItemProduct"
    import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

    // aca en useEffect se llama a la api y listo 
        // fetch().then(
            // setProduct())
    // para agregar un producto dsp hacer una actualizacion

    useEffect(()=>{
        console.log("ejecuto en fase de montage")
         // fetch().then(
            // setProduct())
    }, [])


    const producto1 ={
        title: "arroz integral",
        price: 150,
        image: './img/ARROZ.jpg',
        stock: 8
    }

    const producto2 ={
        title: "Yerba",
        price: 1200,
        image: './img/YERBA.jpg',
        stock: 12
    }


    const handleSubmit = () => {
        console.log("envio de datos")
    }

    return(
        <>
        <div className='conteinerStyling'>
            
        <h2 className='minimoContenido'>{greeting}</h2>

            <ItemProduct data={producto1} onSubmit={handleSubmit}>
                <div>aca es el children (porque es cuando abris y cerras la etiqueta)</div>
            </ItemProduct>
            <ItemProduct data={producto2} onSubmit={handleSubmit}/>
        </div>
    
        </>
    )
}

export default ItemListContainer