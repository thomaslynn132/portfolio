import { db, collection, getDocs } from "../../Components/firebase";
import React, { useState, useEffect } from "react";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const messagesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(messagesList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching messages: ", error);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return <p>Loading messages...</p>;
  }

  return (
    <>
      <h2>Messages</h2>
      {messages ? (
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              <strong>Contact Info:</strong> {message.contactInfo}
              <br />
              <strong>Title:</strong> {message.title}
              <br />
              <strong>Details:</strong> {message.details}
              <br />
              <strong>Timestamp:</strong>{" "}
              {new Date(message.timestamp.seconds * 1000).toLocaleString()}
            </li>
          ))}
        </ul>
      ) : (
        <>
          <h1>No Message was Found.</h1>
        </>
      )}
    </>
  );
}

export default Messages;
