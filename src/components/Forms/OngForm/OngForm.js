import "./OngForm.css";
import { useState } from "react";

const OngForm = ({ loading, onSubmit, submitText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [profileImgUrl, setProfileImgUrl] = useState("");
  const [identification, setIdentification] = useState("");
  const [acceptDonation, setAcceptDonation] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      username,
      email,
      password,
      contact,
      identification,
      profileImgUrl,
      acceptDonation,
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="username">ONG name:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="identification">Identification:</label>
        <input
          type="text"
          value={identification}
          onChange={(e) => setIdentification(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="profileImgUrl">Profile Image:</label>
        <input
          type="file"
          value={profileImgUrl}
          onChange={(e) => setProfileImgUrl(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="acceptDonation">Accept Donation:</label>
        <select
          value={acceptDonation}
          onChange={(e) => setAcceptDonation(e.target.value)}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      {loading ? "Loading..." : <button>{submitText}</button>}
    </form>
  );
};

export default OngForm;
