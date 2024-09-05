import React, { useState } from "react";

export default function BasicForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/H-kmh5wdjxf", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        return response.json().then((data) => {
          console.log("Response status:", response.status); // For debugging
          console.log("Response data:", data); // For debugging

          if (response.status === 200) {
            alert("We received your submission, thank you!");
            setName("");
            setEmail("");
            setMessage("");
            setError("");
          } else if (response.status === 422) {
            // Field validation failed
            setError(data.message || "Validation failed");
          } else {
            // Other errors
            setError(data.message || "Form submission failed");
          }
        });
      })
      .catch((error) => {
        // Network or other request-related error
        console.error("Request error:", error); // For debugging
        setError(error.message || "An error occurred during submission");
      });
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="formcarry-block">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Your first and last name"
        />
      </div>

      <div className="formcarry-block">
        <label htmlFor="email">Your Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="john@doe.com"
        />
      </div>

      <div className="formcarry-block">
        <label htmlFor="message">Your message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          placeholder="Enter your message..."
        ></textarea>
      </div>

      {error && (
        <div className="error-message" style={{ color: "red" }}>
          {error}
        </div>
      )}

      <div className="formcarry-block">
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
