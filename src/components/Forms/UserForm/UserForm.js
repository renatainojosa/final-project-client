import "./UserForm.css";
import { useState } from "react";

const UserForm = ({ loading, onSubmit, submitText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [profileImgUrl, setProfileImgUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, password, username, contact, profileImgUrl });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="username" className="form-label">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email" className="form-label">E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="contact" className="form-label">Contact:</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="profileImgUrl" className="form-label">Profile Image:</label>
        <input
          type="file"
          onChange={(e) => setProfileImgUrl(e.target.files[0])}
        />
      </div>
      {loading ? "Loading..." : <button className="btn btn-new-pet btn-signup">{submitText}</button>}
    </form>
  );
};

export default UserForm;
