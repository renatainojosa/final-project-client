import './MyProfileOng.css'
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import EditFormOng from "../../components/Forms/EditFormOng/EditFormOng";
import api from "../../api/project.api";
import { AuthContext } from "../../context/auth.context";
import { firstLetter } from "../../utils/other.utils";

const MyProfileOng = () => {
    const {userOrOng} = useContext(AuthContext);
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
          await api.editOng({ name, username, email, password, contact, identification, acceptDonation, profileImgUrl });
          window.alert("Profile updated!");
          navigate("/my-profile-ong");
        } catch (error) {
          throw (error.response && error.response.data) || error.message || error;
        } finally {
          setLoading(false);
        }
      };

  return (
    <div className="myprofile-container">
      <div className="hello-and-img">
        <h1>Hello, {firstLetter(userOrOng.name)}!</h1>
        <img
          src={userOrOng.profileImgUrl}
          alt="profileImg"
          style={{ width: "18rem" }}
        />
      </div>
        <div className="links">
          <Link to="/my-profile-ong/my-pets" className='link'>My Pets</Link>
          <Link to="/my-profile-ong/new-pet" className='link'>Register a new pet!</Link>
        </div>
        <div className="edit-profile">
          <h3>Edit your profile:</h3>
          <EditFormOng loading={loading} submitText="Save" onSubmit={onSubmit} />
        </div>
    </div>
  )
}

export default MyProfileOng;