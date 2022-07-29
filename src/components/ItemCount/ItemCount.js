import './ItemCount.css'
import {useState} from 'react'

const ItemCount = ({stock,initial}) => {

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
 <button className="btn btn-group2" onClick={removeNumber}>- </button>
     <p>{counter}</p>
     <button className="btn btn-group2" onClick={addNumber} >+</button>
 </div>





)
}

export default ItemCount