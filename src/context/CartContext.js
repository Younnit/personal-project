import {createContext, useState} from 'react'
import axios from 'axios'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(null)

    const addToCart = (product_id) => {
        axios.post(`/api/cart/${product_id}`).then(res => {
            setCart(res.data)
        }).catch(err => console.log(err))
    }

    const getCart = () => {
        axios.get('/api/cart').then(res => {
            setCart(res.data)
        }).catch(err => console.log(err))
    }

    const editQuantity = (product_id) => {
        axios.put(`/api/cart/${product_id}`).then(res => {
            setCart(res.data)
        }).catch(err => console.log(err))
    }

    const deleteFromCart = (product_id) => {
        axios.delete(`/api/cart/${product_id}`).then(res => {
            setCart(res.data)
        }).catch(err => console.log(err))
    }
    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            getCart,
            editQuantity,
            deleteFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}