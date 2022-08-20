import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {


    const [cantidadXCarro, setCantidadXCarro] = useState(0)
    const [cartProducts, setCartProducts] = useState([])
    const [quantitiSelected, setQuantitiSelected] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const removeProductToCart = (product) => {

        const index = cartProducts.find(uno => uno.id === product.id);


        setCantidadXCarro(cantidadXCarro - index.qty)
        const newCarrito = cartProducts.filter((index) => index.id !== product.id);

        setCartProducts([...newCarrito]);
        console.log(cartProducts)

    }




    const clear = () => {
        setCartProducts([])
        setCantidadXCarro(0)
        setTotalPrice(0)
    }

    const isInCart = (id) => {

        if (cartProducts.some(uno => uno.id == id)) {
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
        let subtotal2 = product.price * qty 
        setTotalPrice(totalPrice + subtotal2)
        setCantidadXCarro(cantidadXCarro + qty)
        if (cartProducts.some(uno => uno.id == product.id)) {

            let index = cartProducts.findIndex(uno => uno.id == product.id)



            let itemPF = cartProducts[index]
            itemPF.qty = itemPF.qty + qty

            const newCarrito = [...cartProducts]
            newCarrito.splice(index, 1, itemPF)

            setCartProducts([...newCarrito])


        } else {

            let itemF = { ...product, qty }
            setCartProducts([...cartProducts, itemF]);
        }
    }


    const removeONEProductToCart = (product, qty) => {
        setCantidadXCarro(cantidadXCarro - qty)
        if (cartProducts.some(uno => uno.id == product.id)) {

            let index = cartProducts.findIndex(uno => uno.id == product.id)
            let itemPF = cartProducts[index]
            itemPF.qty = itemPF.qty - qty

            const newCarrito = [...cartProducts]
            newCarrito.splice(index, 1, itemPF)

            setCartProducts([...newCarrito])


        }
    }



    // setCartProducts(cartProducts => [...cartProducts, product])
    console.log(cartProducts)

    const dataa = {
        cartProducts,
        cantidadXCarro,
        setCantidadXCarro,
        isInCart,
        removeProductToCart,
        removeONEProductToCart,
        addProductToCart,
        setQuantitiSelected,
        clear,
        totalPrice,
        quantitiSelected
    }


    return (
        <CartContext.Provider value={dataa}>
            {/* <CartContext.Provider value={namee,apellidoo}></CartContext.Provider> */}
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider

export { CartContext }