import React, { useState, useContext } from "react";
import "./css/Auth.css";
import { UserContext } from "../context/UserContext";

function Auth(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, handleRegister} = useContext(UserContext);
  return (
    <div className="outer">
        <h2>Please sign in</h2>
      <div className="inputs">
        <label>Enter your email</label>
        <input value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <label>Enter your password</label>
        <input value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className='buttons'>
        <button onClick={() => {
            handleLogin(email, password)
            props.history.push('/')
            }}>Login</button>
        <button onClick={() => {
            handleRegister(email, password)
            props.history.push('/')
            }}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Auth;
