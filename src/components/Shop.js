import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from "../context/UserContext";

function Shop() {
    const { user } = useContext(UserContext);
    const [shop, setShop] = useState([])
    useEffect(()=> {
        axios.get('/api/products').then(res => {
            setShop(res.data)
        }).catch(err => console.log(err))
    }, [])

    return (
        <div>
            {shop.map((product) => {
                return(
                    <div key={product.product_id}>
                        <img src={product.img} alt={product.description}/>
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        {user && <button>Add To Cart</button>}
                    </div>
                )
            })}
        </div>
    )
}

export default Shop
