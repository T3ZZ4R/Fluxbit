import "./Settings.css";
import { useState } from "react";

export const Settings = () => {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="settings">
      <h1>Settings</h1>

      {/* Theme */}
      <div className="settings-card">
        <h3>Theme</h3>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>

      {/* Language */}
      <div className="settings-card">
        <h3>Language</h3>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="fa">Persian</option>
          <option value="ar">Arabic</option>
        </select>
      </div>

      {/* Notifications */}
      <div className="settings-card">
        <h3>Notifications</h3>
        <label className="toggle">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          <span>Enable Notifications</span>
        </label>
      </div>
    </div>
  );
};
