import React, { useEffect, useState } from "react";
import axios from "axios";
// import { UserContext } from "../context/UserContext";
import "./css/Shop.css";
import Footer from './Footer'

function Shop() {
  // const { user } = useContext(UserContext);
  const [shop, setShop] = useState([]);
  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setShop(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='gear'>
      {shop.map((product) => {
        return (
          <div className="eachProduct" key={product.product_id}>
            <img src={product.img} alt={product.description} />
            <div id='textContainer'>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
            </div>
          </div>
        );
      })}
      <Footer/>
    </div>
  );
}

export default Shop;
