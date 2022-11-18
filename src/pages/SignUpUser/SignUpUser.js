import "./SignUpUser.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../../components/Forms/UserForm/UserForm";
import api from "../../api/project.api";

const SignUpUser = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const meusDados = new FormData();
  // meusDados.append('campo', valor);
  const onSubmit = async ({
    username,
    email,
    password,
    contact,
    profileImgUrl,
  }) => {
    const userData = new FormData();
    userData.append('username', username)
    userData.append('email', email)
    userData.append('password', password)
    userData.append('contact', contact)
    userData.append('profileImgUrl', profileImgUrl)
    setLoading(true);
    try {
      await api.signup({ username, email, password, contact, profileImgUrl });
      navigate("/login");
    } catch (error) {
      // throw error.response.data || error.message || error;
      console.log('erro:', error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="title">Signup</h2>
      <UserForm onSubmit={onSubmit} submitText="Register" loading={loading} />
    </div>
  );
};

export default SignUpUser;
