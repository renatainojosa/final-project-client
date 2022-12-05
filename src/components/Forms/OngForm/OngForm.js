import "./OngForm.css";
import { useState } from "react";
import Loading from "../../Loading/Loading";

const OngForm = ({ title, loading, onSubmit, submitText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [profileImgUrl, setProfileImgUrl] = useState("");
  const [identification, setIdentification] = useState("");
  const [acceptDonation, setAcceptDonation] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
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
     <h2 className="title">{title}</h2>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="username">Username:</label>
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
          onChange={(e) => setProfileImgUrl(e.target.files[0])}
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
      {loading ? <Loading /> : <button style={{width: '28rem'}} className="btn btn-new-pet btn-signup">{submitText}</button>}
    </form>
  );
};

export default OngForm;
