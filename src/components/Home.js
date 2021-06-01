import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import "./css/Home.css";

function Home(props) {
  const { user } = useContext(UserContext);
  // const { cart } = useContext(CartContext);
  console.log(user);
  // console.log(cart);
  return (
    <div className="homepage">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1168&q=80"
          alt="Spine x-ray"
        />
        <button className="signUpBtn">Join our Newsletter</button>
        <h1>Why play volleyball?</h1>
        <p>
          Volleyball is a sport that can be both competitive and fun. 
        </p>
      </div>
    </div>
  );
}

export default Home;
