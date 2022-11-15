import './Login.css';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../../api/project.api";

import { AuthContext } from '../../context/auth.context'

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {authenticateUser} = useContext(AuthContext);

  const onSubmit = ({ email, password }) => {

  }

  return (
    <div>Login</div>
  )
}

export default Login;