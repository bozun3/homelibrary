import React, { useState } from "react";
import styled from "styled-components";

const FormStyles = styled.form`
 
   input,
   textarea {
       width: 100%;
       margin-top: 0.5rem;

   }   
  }
   
  }
  padding: 2rem;
  background-color: black;
  color: white;
  .contactSection-wrapper {
    display: flex;
    position: relative;
    justify-content: center;
    left: 50%;
  }

  @media only screen and (max-width: 768px) {
    .contactSection-wrapper {
      flex-direction: column;
    }
    .left,
    .right {
      max-width: 100%;
    }
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <h4> Send message</h4>
      <FormStyles>
        <div className="form-group">
          <label htmlFor="name">
            {" "}
            Your name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            {" "}
            Your email
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" style={{ width: "60px" }}>
          {" "}
          Send
        </button>
      </FormStyles>
    </div>
  );
}
