import "./SignUpUser.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import UserForm from "../../components/Forms/UserForm/UserForm";
import api from "../../api/project.api";

const SignUpUser = () => {
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  // const onSubmit = async ({
  //   username,
  //   email,
  //   password,
  //   contact,
  //   profileImgUrl,
  // }) => {
  //   setLoading(true);
  //   try {
  //     await api.signup({ username, email, password, contact, profileImgUrl });
  //     navigate("/login");
  //   } catch (error) {
  //     // throw error.response.data || error.message || error;
  //     console.log('erro:', error)
  //   } finally {
  //     setLoading(false);
  //   }
  // };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [contact, setContact] = useState("");
    const [profileImgUrl, setProfileImgUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const userData = new FormData();
      setLoading(true);
      try {
        userData.append('username', username);
        userData.append('email', email);
        userData.append('password', password);
        userData.append('contact', contact);
        userData.append('profileImgUrl', profileImgUrl);
        await api.signup(userData);
        navigate("/login");
        
      } catch (error) {
        console.log(error)
      } finally {
            setLoading(false);
        }
  };

  return (
    // <div className="signup-container">
    //   <h2 className="title">Signup</h2>
    //   <UserForm onSubmit={onSubmit} submitText="Register" loading={loading} />
    // </div>
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
      <input type='file' value={profileImgUrl} onChange={(e) => setProfileImgUrl(e.target.value)} />
    </div>
    {loading ? 'Loading...' : <button>register</button>}
  </form>
  );
};

export default SignUpUser;
