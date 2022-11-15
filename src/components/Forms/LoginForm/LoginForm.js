import "./LoginForm.css";
import { useState } from "react";

const LoginForm = ({ loading, onSubmit, submitText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {loading ? "Loading..." : <button>{submitText}</button>}
    </form>
  );
};

export default LoginForm;
