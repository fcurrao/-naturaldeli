import './ItemCount.css'
import {useState} from 'react'

const ItemCount = ({stock,initial, onAdd}) => {

    const [counter, setCounter] = useState(initial) 

    const addNumber = () => {
        if (stock > counter){
            setCounter(counter + 1)
    }}
    
    const removeNumber = () => {
        
        if(counter>initial){
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