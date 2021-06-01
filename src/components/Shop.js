import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import "./css/Shop.css";

function Shop() {
  const { user } = useContext(UserContext);
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
    <div>
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
    </div>
  );
}

export default Shop;
