import "./LoginForm.css";
import { useState } from "react";
import Loading from "../../Loading/Loading";

const LoginForm = ({type, loading, onSubmit, submitText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form className="form-container form-login form-mobile" onSubmit={handleSubmit}>
      <h2 className="title">{type}</h2>
      <div className="form-control mb-3">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control mb-3">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {loading ? <Loading /> : <button style={{width: '28rem'}} className="btn btn-new-pet btn-mobile">{submitText}</button>}
    </form>
  );
};

export default LoginForm;
