import "./MyProfile.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditForm from "../../components/Forms/EditForm/EditForm";
import api from "../../api/project.api";

const MyProfile = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async ({
    username,
    email,
    password,
    contact,
    profileImgUrl,
  }) => {
    setLoading(true);
    try {
      await api.editUser({ username, email, password, contact, profileImgUrl });
      window.alert("Profile updated!");
      navigate("/my-profile");
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Hello, alguém!</h1>
      <div>
        <Link to="/my-profile/my-pets">My Pets</Link>
      </div>
      <div>
        <Link to="/my-profile/new-pet">Register a new pet!</Link>
      </div>
      <EditForm loading={loading} submitText="Save" onSubmit={onSubmit} />
    </div>
  );
};

export default MyProfile;
