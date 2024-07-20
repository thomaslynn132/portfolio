import React, { useState } from "react";
import { db, addDoc, collection } from "./firebase";

function SendMessage() {
  const [contactInfo, setContactInfo] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  // eslint-disable-next-line
  const [message, setMessage] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), {
        contactInfo,
        title,
        details,
        timestamp: new Date(),
      });
      setMessage("Message sent successfully!");
      setContactInfo("");
      setTitle("");
      setDetails("");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <h2>From Here</h2>
      <form onSubmit={handleSubmit} className="messageForm">
        <label>Contact Info:</label>
        <br />
        <input
          type="text"
          className="resizable"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
          placeholder="Phone Number (or) Email"
        />{" "}
        <br />
        <label>Title:</label>
        <br />
        <input
          type="text"
          className="resizable"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <br />
        <label>Details:</label>
        <br />
        <textarea
          className="detailsInput"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Details"
        />
        <br />
        <br />
        <input
          type="submit"
          value="Send"
          className="buttons"
          style={{ width: "100px" }}
        />
      </form>
    </>
  );
}

export default SendMessage;
