import React from "react";

import "./Contact.css";
import kurtJanice from "../../assets/kurt-janice.jpg";
import marNicki from "../../assets/mar-nicki.jpeg";

export default function Contact() {
  return (
    <main className="contact-container">
      <section>
        <div className="founders-container">
          <h1>MEET THE OWNERS</h1>
          <div>
            <div className="founder-image-container">
              <img src={kurtJanice} alt="Image of Kurt and Janice" />
              <p>Kurt and Janice Whitlow</p>
            </div>
            <div className="founder-image-container">
              <img src={marNicki} alt="Image of Mario and Nicki" />
              <p>Mario and Nicki Trevino</p>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form
            action="https://getform.io/f/a85b10b6-4183-4e3b-97ba-77c073ec4eee"
            method="post"
            enctype="multipart/form-data"
            name="EmailForm"
          >
            <h3>
              QUESTION OR COMMENT? <br/>
              Please don't hesitate to reach out!
            </h3>
            <div className="name-container">
              <div className="request-input">
                <label htmlFor="firstName">First name (required)</label>
                <input id="firstName" type="text" name="firstName" required></input>
              </div>
              <div className="request-input">
                <label htmlFor="lastName">Last Name (required)</label>
                <input id="lastName" type="text" name="lastName" required></input>
              </div>
            </div>
            <div className="request-input">
              <label htmlFor="email">Email Address (required)</label>
              <input id="email" type="text" name="email" required></input>
            </div>
            <div className="request-input">
              <label htmlFor="subject">Subject (required)</label>
              <input id="subject" type="text" name="subject" required></input>
            </div>
            <div className="request-input">
              <label htmlFor="message">Message (required)</label>
              <textarea
                id="message"
                type="text"
                name="message"
                required
              ></textarea>
            </div>
            <button type="submit" value="Submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
