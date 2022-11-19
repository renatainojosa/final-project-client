import "./Login.css";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/project.api";

import { AuthContext } from "../../context/auth.context";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { authenticateUser } = useContext(AuthContext);

  const onSubmit = async ({ email, password }) => {
    setLoading(true);
    try {
      await api.login({ email, password });
      authenticateUser();
      navigate("/");
    } catch (error) {
      throw error.response.data || error.message || error;
    } finally {
      setLoading(false);
    }
  };
  const onSubmitOng = async ({ email, password }) => {
    setLoading(true);
    try {
      await api.loginOng({ email, password });
      authenticateUser();
      navigate("/");
    } catch (error) {
      throw error.response.data || error.message || error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2 className="title">Login</h2>
      <LoginForm onSubmit={onSubmit} submitText="Login" loading={loading} />
      <h2 className="title">Login Ong</h2>
      <LoginForm onSubmit={onSubmitOng} submitText="Login Ong" loading={loading} />
    </div>
  );
};

export default Login;
