import axios from "axios";
import React, { useState } from "react";
import "./css/contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const dataToSubmit = {
  //         name,
  //         email,
  //         subject,
  //         message
  //     }
  //   }

  console.log(message)

  return (
    <div className="contact">
      {/* <form onSubmit={handleSubmit}> */}
      <h1>Contact us</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Please enter your message here..."
        />
        <button>Submit</button>
        {/* <button onClick={handleSubmit}>Send</button> */}
        {/* </form> */}
      </form>
    </div>
  );
}

export default Contact;
