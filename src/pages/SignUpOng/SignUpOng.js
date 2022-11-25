import "./SignUpOng.css";
import OngForm from "../../components/Forms/OngForm/OngForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/project.api";

const SignUpOng = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async ({
    name, 
    username,
    email,
    password,
    contact,
    identification,
    acceptDonation,
    profileImgUrl,
  }) => {
    setLoading(true);
    try {
      await api.signupOng({
        name,
        username,
        email,
        password,
        contact,
        identification,
        acceptDonation,
        profileImgUrl,
      });
      navigate("/login");
    } catch (error) {
      throw error.response.data || error.message || error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <OngForm title='Signup' onSubmit={onSubmit} submitText="Register" loading={loading} />
    </div>
  );
};

export default SignUpOng;
