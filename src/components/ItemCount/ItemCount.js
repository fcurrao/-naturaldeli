import './ItemCount.css'
import {useState} from 'react'
import CartProvider, { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const ItemCount = ({productData,stock,initial}) => {

    const { addProductToCart, cartProducts, clear, removeProductToCart, setQuantitiSelected , setCantidadXCarro, removeONEProductToCart, cantidadXCarro } = useContext(CartContext)
     
    setQuantitiSelected(0)
    const [counter, setCounter] = useState(initial) 

    const addNumber = () => {
        if (stock > counter){
            setCounter(counter + 1)
    }}
    const removeNumber = () => {
        if(counter>initial){
            setCounter(counter - 1)
    }}


    const onAdd = () =>{
        setQuantitiSelected(counter)
        setCantidadXCarro(counter)
        addProductToCart(productData,counter)
        console.log("producto: ",productData) 
        console.log("aaa: ,", cantidadXCarro)
    }


return(

 <div className='countProd columnn'>
<div className='roww'>
 <button className="btn btn-group2" onClick={removeNumber}>- </button>
     <p>{counter}</p>
     <button className="btn btn-group2" onClick={addNumber} >+</button>
     </div>
     <div className='roww'>

     <button className="btn btn-group btnx bttn" onClick={onAdd} >Agregar al carro</button>
     </div>


 </div>
)
}

export default ItemCount