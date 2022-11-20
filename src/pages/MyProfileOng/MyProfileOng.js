import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditFormOng from "../../components/Forms/EditFormOng/EditFormOng";
import api from "../../api/project.api";

const MyProfileOng = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async ({
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
          await api.editOng({ username, email, password, contact, identification, acceptDonation, profileImgUrl });
          window.alert("Profile updated!");
          navigate("/my-profile-ong");
        } catch (error) {
          throw (error.response && error.response.data) || error.message || error;
        } finally {
          setLoading(false);
        }
      };

  return (
    <div>
      <h1>Hello, ONG!</h1>
      <div>
        <Link to="/my-profile/my-pets">My Pets</Link>
      </div>
      <div>
        <Link to="/my-profile/new-pet">Register a new pet!</Link>
      </div>
      <EditFormOng loading={loading} submitText="Save" onSubmit={onSubmit} />
    </div>
  )
}

export default MyProfileOng;