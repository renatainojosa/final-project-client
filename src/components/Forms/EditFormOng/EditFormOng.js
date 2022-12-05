import { useState, useEffect } from "react";
import api from "../../../api/project.api";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";
import Loading from "../../Loading/Loading";

const EditFormOng = ({ loading, onSubmit, submitText }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [identification, setIdentification] = useState("");
  const [acceptDonation, setAcceptDonation] = useState("");
  const [profileImgUrl, setProfileImgUrl] = useState("");
  const { userOrOng } = useContext(AuthContext);

  useEffect(() => {
    api
      .getOneOng(userOrOng._id)
      .then((response) => {
        setName(response.name);
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
    onSubmit({ name, email, username, contact, identification, acceptDonation, profileImgUrl });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
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
      {loading ? <Loading /> : <button>{submitText}</button>}
    </form>
  )
};

export default EditFormOng;
