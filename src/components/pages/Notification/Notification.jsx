import { useState } from "react";
import css from "./Notification.css";

export const Notification = (props) => {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const readMsg = (id) => {
    props.setNotifications((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, readed: true } : msg)),
    );
  };
  const readAll = () => {
    props.setNotifications((prev) =>
      prev.map((msg) => ({ ...msg, readed: true })),
    );
  };
  return (
    <section className="notification">
      <header className="notification-header">
        <p className="notification-header-text">Notifications</p>
        <button onClick={readAll}>✓</button>
      </header>
      <ul className="notification-list">
        {props.notifications.length > 0 ? (
          props.notifications.map((msg) => {
            return (
              <li
                className={`notification-message ${!msg.readed ? "notification-message--notread" : ""} ${focusedIndex === msg.id ? "notification-message--active" : ""}`}
                key={msg.id}
                onClick={() => {
                  readMsg(msg.id);
                  setFocusedIndex(msg.id);
                }}
              >
                <p>{msg.message}</p>
                <span>{msg.date}</span>
              </li>
            );
          })
        ) : (
          <div>No Message Here</div>
        )}
      </ul>
    </section>
  );
};
