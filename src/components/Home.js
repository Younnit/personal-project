import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./css/Home.css";

function Home(props) {
  const { user } = useContext(UserContext);
  const [flick, setFlick] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(user);
  console.log(email);

  // const addEmail = (value) => {
  //   axios.post("/api/emails", { value });
  // };

  const handleName = (props) => {
    setFlick(!flick);
    if (flick === true) {
      setName("flicker");
    } else {
      setName("");
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    const dataToSubmit = {
      email,
    };

    axios.post("/api/sendMail", dataToSubmit);
  };

  const together = () => {
    handleName();
    handleSubmit();
  };

  return (
    <div className="homepage">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1168&q=80"
          alt="Spine x-ray"
        />
        {/* <button className="signUpBtn" onClick={handleName}>
          Join our Newsletter
        </button> */}
        <div className="btns">
          <button className="signUpBtn" onClick={handleName}>
            Join our Newsletter
          </button>
          <Link to="/map">
            <button className="signUpBtn">Find a court</button>
          </Link>
        </div>

        <h3>Volleyball</h3>
        <p>
          No matter your athletic ability, volleyball is a game everyone can
          enjoy. For those of you who don't know how to play: There are 2 teams
          that pass a ball back and fourth around 2 sides of a net. Games are
          played to 25 (or however much you want to go to) and points are scored
          when a team allows for the ball to bounce on their side of the court
          or by hitting the ball out of bounds. <br />
          <br />
        </p>
        <h3>So why play?</h3>
        <p>
          For me personally, volleyball is more of a social thing. It brought me
          to know some great people whom I would've never met in my life
          otherwise.
          <br />
          <br /> But for many others, it is a exercise thing. On average, anyone
          can burn 120 to 172 calories over a half hour of playing. This game
          allows for the players to speed up their reaction time, as many spikes
          are very quick and require that fast reaction to make a play on the
          ball.
        </p>
      </div>
      <div className={`newOne ${name}`}>
        <div className="popUp">
          <span onClick={handleName} className="theX">
            X
          </span>
          <h3>Please enter your email to join</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              placeholder="name@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={together}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
