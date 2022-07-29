
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'


const Detail = ({}) => {






return (
<div>
<ItemDetailContainer/>

</div>
        
    )
     }
    
    export default Detail













// const Detail = ({data}) => {

//     const {id,title,description,image,category,filtradito,price,stock}=data
   
// //     console.log(id)
// // console.log(stock)
// console.log(data)

    

//     const onSubmitComprar = () => {
//         console.log("Tocaste Boton Compra  ")
//      }
 
//      const onSubmitDetalle = () => {
//          console.log("Tocaste Boton   detalle producto")
//       }



      
//     const en12cuotasSub = (price/12);
//     const en12cuotas = en12cuotasSub.toFixed(2);





    
//     return (

// <div className="item-product2">



// {/* <h1>hola</h1> */}
// <div className="item-product"></div>
//     <img src={`./assets/${image}`} alt="Imagen producto" />
//         <div  className="item-product2" >
//         <span className="chiquito1 badge badge-warning">{category}</span>
//         <p className='chiquito1'>Producto Organico</p>
//         <h1>{title}</h1>
//         <p className='description2'>{description}</p>
//         <span className="btn2 btn btn-primary">$ {price}</span><br></br>
//         <p className='red' >pagalo en 12 cuotas de {en12cuotas}</p>
//         <Link to={`/productos/${id}`}>
//         <button className="btn btn-group2" onClick={onSubmitDetalle}>Detalle Producto</button>
//         </Link>
//         </div>
//   {/* <div className="item-product2">
// <span className="badge badge-danger">RECOMENDADO</span>
// <ItemCount stock={stock} initial={1} />
// <p className='chiquito1'>stock disponible: {stock}</p>           
// <button className="btn btn-group" onClick={onSubmitComprar}>Comprar</button>
// </div>    
//          <Link to={`/productos/${id}`} zoom={data}>
//     <button className="btn btn-group2" onClick={onSubmitDetalle}>Detalle Producto</button>
//     </Link> */}
       
       


       
//        <div className="item-product">
//         <img src={`./assets/${data.image}`} alt="Imagen producto" />
//         <div  className="item-product2" >
//         <span className="chiquito1 badge badge-warning">{data.category}</span>
//         <p className='chiquito1'>Producto Organico</p>
//         <h1>{data.title}</h1>
//         <p className='description2'>{data.description}</p>
//         <span className="btn2 btn btn-primary">$ {data.price}</span><br></br>
//         <p className='red' >pagalo en 12 cuotas de {en12cuotas}</p>
//         <Link to={`/productos/${data.id}` } zoom={data}>
//         <button className="btn btn-group2" onClick={onSubmitDetalle}>Detalle Producto</button>
//         </Link>
//         </div>
// {/* <div className="item-product2">
// <span className="badge badge-danger">RECOMENDADO</span>
// <ItemCount stock={stock} initial={1} />
// <p className='chiquito1'>stock disponible: {stock}</p>           
// <button className="btn btn-group" onClick={onSubmitComprar}>Comprar</button>
// </div> */}
//         {/* <Link to={`/productos/${id}`} zoom={data}>
//     <button className="btn btn-group2" onClick={onSubmitDetalle}>Detalle Producto</button>
//     </Link> */}
       



// </div>


// </div>
    
    
    
    
//     )
    
    
//     }
    
//     export default Detail