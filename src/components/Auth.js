import React, { useState, useContext } from "react";
import "./css/Auth.css";
import { UserContext } from "../context/UserContext";

function Auth(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, handleRegister} = useContext(UserContext);
  return (
    <div className="outer">
        <h2>Please sign in</h2>
      <div className="inputs">
        <label>Enter a username</label>
        <input value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
        <label>Enter your password</label>
        <input type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className='buttons'>
        <button onClick={() => {
            handleLogin(username, password)
            props.history.push('/')
            }}>Login</button>
        <button onClick={() => {
            handleRegister(username, password)
            props.history.push('/')
            }}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Auth;
