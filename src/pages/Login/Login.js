import './Login.css';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../../api/project.api";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    
  }

  return (
    <div>Login</div>
  )
}

export default Login;