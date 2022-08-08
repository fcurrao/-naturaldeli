import './ItemCount.css'
import {useState} from 'react'
import CartProvider, { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const ItemCount = ({productData,stock,initial,quantitiSelected,setQtySelect}) => {

    const {cartProducts,addProductToCart,setCantidadXCarro,cantidadXCarro} = useContext(CartContext)
    const qty = quantitiSelected;
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
        setQtySelect(counter)
        setCantidadXCarro(counter)
        addProductToCart(productData,counter)
        console.log("producto: ",productData)
        console.log("cantidad: ",qty)
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