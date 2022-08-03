import './ItemCount.css'
import {useState} from 'react'

const ItemCount = ({stock,initial,setQtySelect}) => {

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