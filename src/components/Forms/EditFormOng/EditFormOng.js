import { useState, useEffect } from "react";
import api from "../../../api/project.api";

const EditFormOng = ({ loading, onSubmit, submitText }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [identification, setIdentification] = useState("");
  const [acceptDonation, setAcceptDonation] = useState("");
  const [profileImgUrl, setProfileImgUrl] = useState("");

  useEffect(() => {
    api
      .getOneOng()
      .then((response) => {
        setEmail(response.email);
        setUsername(response.username);
        setContact(response.contact);
        setIdentification(response.identification);
        setAcceptDonation(response.acceptDonation);
        setProfileImgUrl(response.profileImgUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, username, contact, identification, acceptDonation, profileImgUrl });
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
      {loading ? "Loading..." : <button>{submitText}</button>}
    </form>
  )
};

export default EditFormOng;
