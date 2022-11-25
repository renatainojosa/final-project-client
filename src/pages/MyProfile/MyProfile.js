import "./MyProfile.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditForm from "../../components/Forms/EditForm/EditForm";
import api from "../../api/project.api";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { firstLetter } from "../../utils/other.utils";


const MyProfile = () => {
  const { userOrOng } = useContext(AuthContext);
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
      <h1>Hello, {firstLetter(userOrOng.name)}!</h1>
      <img src={userOrOng.profileImgUrl} alt='profileImg' style={{width: '18rem'}}/>
      <div>
        <Link to="/my-profile/my-pets">My Pets</Link>
      </div>
      <div>
        <Link to="/my-profile/new-pet">Register a new pet!</Link>
      </div>
      <h3>Edit your profile:</h3>
      <EditForm loading={loading} submitText="Save" onSubmit={onSubmit} />
    </div>
  );
};

export default MyProfile;
