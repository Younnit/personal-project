import React, { useEffect, useState } from "react";
import axios from "axios";
// import { UserContext } from "../context/UserContext";
import "./css/Shop.css";
import { Link } from "react-router-dom";

function Shop() {
  // const { user } = useContext(UserContext);
  const [shop, setShop] = useState([]);
  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        console.log(res.data)
        setShop(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="gear">
      <h1>Gear</h1>
      {shop.map((product) => {
        return (
          <div className="eachProduct" key={product.product_id}>
            <img src={product.img} alt={product.description} />
            <div id="textContainer">
              <h4>
                <u>{product.name}</u>
              </h4>
              <p>{product.description}</p>
            </div>
          </div>
        );
      })}
      <footer>
        <h3>Thanks for checking us out!</h3>
        <p>
          If you have any questions, please{" "}
          <Link to="/contact">
            <u>contact us</u>
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default Shop;
