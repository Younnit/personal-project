import axios from "axios";
import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const dataToSubmit = {
//         email
//     }
//   }

  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
        <input
          type={Text}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type={Text}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type={Text} placeholder="Subject" />
        <textarea rows="4" cols="50" />
        {/* <button onClick={handleSubmit}>Send</button> */}
      {/* </form> */}
    </div>
  );
}

export default Contact;
