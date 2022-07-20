import './ItemCount.css'
import {useState,useEffect} from 'react'

const ItemCount = ({stock,initial, onAdd}) => {

    const [counter, setCounter] = useState(initial) 
    const [otro, setOtro] = useState() 

    const addNumber = () => {
        if (stock > counter){
            setCounter(counter + 1)
    }}
    
    const removeNumber = () => {
        
        if(counter>1){
            setCounter(counter - 1)
    }}

    






return(

    
 <div className='countProd'>
 <button onClick={removeNumber}>-</button>
     <p>{counter}</p>
     <button onClick={addNumber} >+</button>
 </div>





)
}

export default ItemCount