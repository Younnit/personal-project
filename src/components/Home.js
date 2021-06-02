import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import "./css/Home.css";

function Home(props) {
  const { user } = useContext(UserContext);
  const [flick, setFlick] = useState(true);
  const [name, setName] = useState("");
  console.log(user);

  const handleName = (props) => {
    setFlick(!flick);
    if (flick === true) {
      setName("flicker");
    } else {
      setName("");
    }
  };

  return (
    <div className="homepage">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1168&q=80"
          alt="Spine x-ray"
        />
        <button className="signUpBtn" onClick={handleName}>
          Join our Newsletter
        </button>
        {/* {user && <button className="signUpBtn" onClick={showName}>Join our Newsletter</button>} */}
        <h1>Why play volleyball?</h1>
        <p>Volleyball is a sport that can be both competitive and fun.</p>
      </div>
      <div className={`newOne ${name}`}>
        <div className='popUp'>
          <span onClick={handleName} className='theX'>X</span>
          <h3>This is the popUp</h3>
          <input placeholder="Enter an email" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
