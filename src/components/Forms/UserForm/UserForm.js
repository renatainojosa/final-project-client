import './UserForm.css';
import { useState } from 'react';
import projectApi from '../../../api/project.api';

const UserForm = ({loading, onSubmit, submitText}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [contact, setContact] = useState("");
    const [profileImgUrl, setProfileImgUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = new FormData();
        try {
          userData.append('username', username);
          userData.append('email', email);
          userData.append('password', password);
          userData.append('contact', contact);
          userData.append('profileImgUrl', profileImgUrl);
          const response =  await projectApi.signup(userData);
          return response;
        } catch (error) {
          console.log(error)
        }
        // onSubmit({ username, email, password, contact, profileImgUrl });
    };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
    <div className="form-control">
      <label htmlFor="username">Username:</label>
      <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
    </div>
    <div className="form-control">
      <label htmlFor="email">E-mail:</label>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="form-control">
      <label htmlFor="contact">Contact:</label>
      <input type='text' value={contact} onChange={(e) => setContact(e.target.value)} />
    </div>
    <div className="form-control">
      <label htmlFor="password">Password:</label>
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
    <div className="form-control">
      <label htmlFor="profileImgUrl">Profile Image:</label>
      <input type='file' value={profileImgUrl} onChange={(e) => setProfileImgUrl(e.target.files)} />
    </div>
    {loading ? 'Loading...' : <button>{submitText}</button>}
  </form>
  )
}

export default UserForm;