import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {


    const [cantidadXCarro, setCantidadXCarro] = useState(0)
    const [cartProducts, setCartProducts] = useState([])
    const [namee,setNamee] = useState('Natural Deli') 

    const removeProductToCart = (id) => {
       
        const newCarrito = [...cartProducts];
        let index = newCarrito.findIndex(uno => uno.id === id);
        setCantidadXCarro(cantidadXCarro-index.qty)
        newCarrito.splice( index, 1 );

        setCartProducts([...newCarrito]);
        
    }

    const clear = () => { 
        setCartProducts([])
        setCantidadXCarro(0)
    }

    const isInCart = (id) => {

        if(cartProducts.some(uno => uno.id == id)){ 
            return (
                console.log("TRUE")
            )
 
        } else {
            console.log("FALSE")
        }
    }


    //      let isInCart = cartProducts.find(uno => uno.id == product.id)
    //  if(!isInCart){


    const addProductToCart = (product, qty) => { 
        setCantidadXCarro(cantidadXCarro+qty)
     if(cartProducts.some(uno => uno.id == product.id)){
        
        let index = cartProducts.findIndex(uno => uno.id == product.id)
        let itemPF = cartProducts[index]
        itemPF.qty =    itemPF.qty + qty

        const newCarrito = [...cartProducts]
        newCarrito.splice(index,1,itemPF)

        setCartProducts([...newCarrito])
    
    
    } else {

        let itemF = {...product,qty}
        setCartProducts([...cartProducts, itemF ]);
    }
}
// setCartProducts(cartProducts => [...cartProducts, product])
    console.log (cartProducts)

    const dataa = { 
        cartProducts,
        cantidadXCarro,
        setCantidadXCarro,
        isInCart,
        removeProductToCart,
        addProductToCart,
        clear
    }
    
   
    return(
        <CartContext.Provider value={dataa}>
                {/* <CartContext.Provider value={namee,apellidoo}></CartContext.Provider> */}
            {children}
            </CartContext.Provider>

    )
}

export default CartProvider

export { CartContext }