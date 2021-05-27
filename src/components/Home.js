import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./css/Home.css";

function Home(props) {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="homepage">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1539815208687-a0f05e15d601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
          alt="Spine x-ray"
        />
        <button className="signUpBtn">Join our Newsletter</button>
        <h1>What causes back pain?</h1>
        <p>loremdasf hjkahsdf kjlhasdl kjfhakj dshfkjhasdkjf hakjsdhfkjahsdfkjhasdkj fhakljsdfh kjahsdkjhaksdj fhakljdhfkjasdhf kjahdkjfhadksjfh kajdsfhjkahsd kjfhasdkj fhaskljdhf kjasdhf kjlahsdf kljhasdkjfh ailusdfhalkjsdhf laiksdhf liuahsdfik hasdikfh asldifghasldkhf alisdh fliadsh fliasdhf liashd fiasdhf iha siahd iklfahsdli fhailsudf haiusdhf ilasuhd liuhafwdes</p>
      </div>
    </div>
  );
}

export default Home;
