import "./Login.css";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/project.api";
import Alert from "../../components/Alert/Alert";

import { AuthContext } from "../../context/auth.context";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { authenticateUser } = useContext(AuthContext);

  const onSubmit = async ({ email, password }) => {
    setLoading(true);
    try {
      await api.login({ email, password });
      authenticateUser();
      console.log('deu erro')
      navigate("/");
    } catch (error) {
      setError(error);
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
    <>
      {error && <Alert message='E-mail or password is invalid!' />}
    <div className="login-container login-page login-mobile">
      <LoginForm type='Login' onSubmit={onSubmit} submitText="Submit" loading={loading} />
      <LoginForm type='Login ONG' onSubmit={onSubmitOng} submitText="Submit" loading={loading} />
    </div>
    </>
  );
};

export default Login;
