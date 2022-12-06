import './EditForm.css'
import { useState, useEffect } from "react";
import api from "../../../api/project.api";
import Loading from "../../Loading/Loading";

const EditForm = ({ loading, onSubmit, submitText }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [profileImgUrl, setProfileImgUrl] = useState("");

  useEffect(() => {
    api
      .getOneUser()
      .then((response) => {
        setName(response.name);
        setEmail(response.email);
        setUsername(response.username);
        setContact(response.contact);
        setProfileImgUrl(response.profileImgUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, username, contact, profileImgUrl });
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
        <label htmlFor="profileImgUrl">Profile Image:</label>
        <input
          type="file"
          onChange={(e) => setProfileImgUrl(e.target.files[0])}
        />
      </div>
      {loading ? <Loading /> : <button className="btn btn-new-pet btn-edit" style={{width: '28rem'}}>{submitText}</button>}
    </form>
  );
};

export default EditForm;
