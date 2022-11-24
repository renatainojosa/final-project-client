import "./NewPet.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/project.api";
import PetForm from "../../components/Forms/PetForm/PetForm";
import { AuthContext } from "../../context/auth.context";

const NewPet = () => {
  const {userOrOng} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async ({
    name,
    description,
    category,
    gender,
    breed,
    age,
    color,
    castrated,
    vaccinated,
    profileImgUrl,
  }) => {
    setLoading(true);
    try {
      await api.newPet({
        name,
        description,
        category,
        gender,
        breed,
        age,
        color,
        castrated,
        vaccinated,
        profileImgUrl,
      });
      userOrOng.type === "User"
        ? navigate("/my-profile/my-pets")
        : navigate("/my-profile-ong/my-pets");
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newpet-container">
      <h2>Register your pet:</h2>
      <PetForm loading={loading} onSubmit={onSubmit} submitText="Register" />
    </div>
  );
};

export default NewPet;
