import "./SignUpUser.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../../components/Forms/UserForm/UserForm";
import api from "../../api/project.api";

const SignUpUser = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async ({
    name,
    username,
    email,
    password,
    contact,
    profileImgUrl,
  }) => {
    setLoading(true);
    try {
      await api.signup({ name, username, email, password, contact, profileImgUrl });
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
