import "./Profile.css";
import { useState } from "react";

export const Profile = () => {
  const [name, setName] = useState("User Name");
  const [email, setEmail] = useState("user@gmail.com");
  const [bio, setBio] = useState("Crypto trader & frontend developer");

  return (
    <div className="profile">
      <h1>Profile</h1>

      <div className="profile-card">
        <div className="avatar">
          <span>{name.charAt(0)}</span>
        </div>

        <div className="profile-info">
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />

          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Bio</label>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
        </div>

        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
};
